// app.js - Core application logic and database syncing
const questions = window.questions;

// Application State
let studentName = 'Mia';
let currentQuestionIndex = 0;
let selectedTimeframe = 'all'; // 'all' or 'week'
let progress = {
  student: studentName,
  streak: 0,
  lastActiveDate: '',
  scores: {}, // e.g. { "Mathematics": { correct: 0, total: 0 } }
  subcategoryScores: {}, // e.g. { "Algebra": { correct: 0, total: 0 } }
  answerHistory: [], // e.g. [{ questionId, date, isCorrect, category, subcategory }]
  answeredQuestionIds: [],
  completedDates: [], // e.g. ['2026-05-20', '2026-05-22']
  totalStudyTimeMs: 0
};

// Calendar State
let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();

// Date Helpers (using local time to avoid timezone offset shifts)
function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterdayString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatDateString(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// Get all days of a month with padding for grid alignment (Mon = first column)
function getMonthDaysWithPadding(month, year) {
  const firstDay = new Date(year, month, 1);
  const firstDayOfWeek = firstDay.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const padDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  const numDays = new Date(year, month + 1, 0).getDate();
  const days = [];

  for (let i = 0; i < padDays; i++) {
    days.push(null);
  }

  for (let d = 1; d <= numDays; d++) {
    days.push(new Date(year, month, d));
  }

  return days;
}

// Counts how many questions the student has answered today
function getQuestionsAnsweredTodayCount() {
  const todayStr = getTodayString();
  if (!progress.answerHistory) return 0;
  return progress.answerHistory.filter(ans => ans.date === todayStr).length;
}

// Checks if a date was completed (has >= 20 answers or in completedDates)
function isDateCompleted(dateStr) {
  if (progress.completedDates && progress.completedDates.includes(dateStr)) {
    return true;
  }
  if (!progress.answerHistory) return false;
  const count = progress.answerHistory.filter(ans => ans.date === dateStr).length;
  return count >= 20;
}

// Get the Monday-Sunday week array for the current week
function getWeekDays() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const distanceToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(today);
  monday.setDate(today.getDate() + distanceToMonday);
  
  const week = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    week.push(d);
  }
  return week;
}

// ----------------------------------------------------
// STORAGE & API SYNCHRONIZATION
// ----------------------------------------------------

// Load progress from API or fallback to LocalStorage
async function loadProgress() {
  const localKey = `cps_hsat_progress_${studentName.toLowerCase()}`;
  
  try {
    const response = await fetch(`/api/progress?student=${encodeURIComponent(studentName)}`);
    if (response.ok) {
      const data = await response.json();
      if (data && !data.error) {
        progress = data;
        // Validate array structures
        if (!progress.answeredQuestionIds) progress.answeredQuestionIds = [];
        if (!progress.completedDates) progress.completedDates = [];
        if (!progress.scores) progress.scores = {};
        if (!progress.subcategoryScores) progress.subcategoryScores = {};
        if (!progress.answerHistory) progress.answerHistory = [];
        if (progress.totalStudyTimeMs === undefined) progress.totalStudyTimeMs = 0;
        
        // Save local backup
        localStorage.setItem(localKey, JSON.stringify(progress));
        verifyStreakValidity();
        return;
      }
    }
  } catch (err) {
    console.warn("Could not sync with Cloudflare KV API. Falling back to local storage.", err);
  }

  // Local Storage Fallback
  const cached = localStorage.getItem(localKey);
  if (cached) {
    try {
      progress = JSON.parse(cached);
      if (!progress.answeredQuestionIds) progress.answeredQuestionIds = [];
      if (!progress.completedDates) progress.completedDates = [];
      if (!progress.scores) progress.scores = {};
      if (!progress.subcategoryScores) progress.subcategoryScores = {};
      if (!progress.answerHistory) progress.answerHistory = [];
      if (progress.totalStudyTimeMs === undefined) progress.totalStudyTimeMs = 0;
    } catch (e) {
      console.error("Failed to parse cached progress data, initializing blank profile", e);
      resetProgressState();
    }
  } else {
    resetProgressState();
  }
  
  verifyStreakValidity();
}

// Save progress to LocalStorage immediately and sync to API asynchronously
async function saveProgress() {
  const localKey = `cps_hsat_progress_${studentName.toLowerCase()}`;
  progress.student = studentName;
  
  // 1. Save to LocalStorage (Instant local fallback)
  localStorage.setItem(localKey, JSON.stringify(progress));
  
  // 2. Sync to Cloudflare KV API
  try {
    const response = await fetch(`/api/progress?student=${encodeURIComponent(studentName)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(progress)
    });
    if (!response.ok) {
      console.warn("Cloudflare KV update failed. Will retry next save.");
    }
  } catch (err) {
    console.warn("Cloudflare KV sync offline. Saved locally.", err);
  }
}

function resetProgressState() {
  progress = {
    student: studentName,
    streak: 0,
    lastActiveDate: '',
    scores: {},
    subcategoryScores: {},
    answerHistory: [],
    answeredQuestionIds: [],
    completedDates: [],
    totalStudyTimeMs: 0
  };
}

// Checks if the streak is broken on load (i.e. did they miss yesterday?)
function verifyStreakValidity() {
  if (!progress.lastActiveDate) {
    progress.streak = 0;
    return;
  }
  
  const todayStr = getTodayString();
  const yesterdayStr = getYesterdayString();
  
  // If the last active date is not today and not yesterday, the streak is broken
  if (progress.lastActiveDate !== todayStr && progress.lastActiveDate !== yesterdayStr) {
    progress.streak = 0;
  }
}

// Increments/maintains streak when a daily 20-question target is met
function updateStreakOnAnswer() {
  const todayStr = getTodayString();
  const yesterdayStr = getYesterdayString();

  const todayCount = getQuestionsAnsweredTodayCount();
  if (todayCount >= 20) {
    if (!progress.completedDates.includes(todayStr)) {
      progress.completedDates.push(todayStr);
    }

    if (progress.lastActiveDate === todayStr) {
      // Streak already earned today
      return;
    }

    if (progress.lastActiveDate === yesterdayStr) {
      // Continued from yesterday
      progress.streak++;
    } else {
      // New or broken streak
      progress.streak = 1;
    }

    progress.lastActiveDate = todayStr;
  }
}

// ----------------------------------------------------
// UI RENDERING & PAGE NAVIGATION
// ----------------------------------------------------

// Switch Active Screens
function switchScreen(targetScreenId) {
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  const targetScreen = document.getElementById(targetScreenId);
  if (targetScreen) {
    targetScreen.classList.remove('hidden');
  }

  // Update nav tab highlights
  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.getAttribute('data-target') === targetScreenId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Refresh dynamic content for the screen
  if (targetScreenId === 'screenStreak') {
    renderStreakScreen();
  } else if (targetScreenId === 'screenPerformance') {
    renderPerformanceScreen();
  } else if (targetScreenId === 'screenDailyPrep') {
    const todayCompleted = isDateCompleted(getTodayString());
    const quizStateEl = document.getElementById('dailyPrepQuizState');
    const completedStateEl = document.getElementById('dailyPrepCompletedState');

    if (todayCompleted && (!currentSession.isActive || currentSession.mode !== 'extra')) {
      quizStateEl.classList.add('hidden');
      completedStateEl.classList.remove('hidden');
    } else {
      quizStateEl.classList.remove('hidden');
      completedStateEl.classList.add('hidden');
      if (!currentSession.isActive) {
        startNewSession();
      }
      loadNextQuestion();
    }
  } else if (targetScreenId === 'screenSessionReview') {
    renderSessionReviewScreen();
  }
}

// Render Streak Screen
function renderStreakScreen() {
  const streakCountText = document.getElementById('streakCountText');
  const streakHeadline = document.getElementById('streakHeadline');
  const streakDescription = document.getElementById('streakDescription');
  const weekGrid = document.getElementById('weekGrid');
  const btnStartPractice = document.getElementById('btnStartPractice');

  // Verify streak first
  verifyStreakValidity();

  streakCountText.textContent = progress.streak;

  const todayStr = getTodayString();
  const studiedToday = isDateCompleted(todayStr);

  if (progress.streak === 0) {
    streakHeadline.textContent = `Start your study habit, ${studentName}!`;
    streakDescription.textContent = "Answer 20 practice questions today to start your streak. Building a daily routine is key to success on the HSAT.";
    btnStartPractice.querySelector('span').textContent = "Start Today's Prep";
  } else {
    streakHeadline.textContent = studiedToday 
      ? `Awesome job today, ${studentName}! 🎉`
      : `Keep the streak burning, ${studentName}! 🔥`;
    streakDescription.textContent = studiedToday
      ? `You completed today's daily challenge. Your ${progress.streak}-day streak is safe! See you tomorrow for more training.`
      : `You're on a ${progress.streak}-day streak! Answer 20 questions today to keep it going.`;
    btnStartPractice.querySelector('span').textContent = studiedToday ? "Practice Extra Questions" : "Keep Streak Burning";
  }

  // Update Daily Progress Bar
  const todayCount = getQuestionsAnsweredTodayCount();
  document.getElementById('dailyProgressText').textContent = `${todayCount} / 20 questions`;
  const pct = Math.min(100, Math.round((todayCount / 20) * 100));
  document.getElementById('dailyProgressBarFill').style.width = `${pct}%`;

  // Update Calendar Header Label
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById('currentMonthYearLabel').textContent = `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;

  // Render Month Tracker Grid
  weekGrid.innerHTML = '';

  // Render Weekday Header Titles
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  dayNames.forEach(name => {
    const colHeader = document.createElement('div');
    colHeader.className = 'calendar-header-day';
    colHeader.textContent = name;
    weekGrid.appendChild(colHeader);
  });

  // Render Days (with padding)
  const monthDays = getMonthDaysWithPadding(currentCalendarMonth, currentCalendarYear);
  const now = new Date();
  const todayVal = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  monthDays.forEach(dayDate => {
    if (dayDate === null) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'day-circle empty-slot';
      weekGrid.appendChild(emptyDiv);
    } else {
      const dateStr = formatDateString(dayDate);
      const dayNum = dayDate.getDate();
      const isCompleted = isDateCompleted(dateStr);
      const isToday = dateStr === todayStr;
      
      const cellDateVal = new Date(dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate()).getTime();
      const isPast = cellDateVal < todayVal;

      const dayDiv = document.createElement('div');
      let statusClass = '';
      let statusIcon = '🔒';

      if (isCompleted) {
        statusClass = 'completed';
        statusIcon = '✅';
      } else if (isToday) {
        statusClass = 'today';
        statusIcon = '⚡';
      } else if (isPast) {
        statusClass = 'missed';
        statusIcon = '❌';
      }

      dayDiv.className = `day-circle ${statusClass}`;
      dayDiv.innerHTML = `
        <span class="day-number">${dayNum}</span>
        <span class="day-status">${statusIcon}</span>
      `;
      weekGrid.appendChild(dayDiv);
    }
  });
}

// Render Performance Screen
function renderPerformanceScreen() {
  let activeScores = {};
  let activeSubScores = {};
  let totalAnswered = 0;
  let totalCorrect = 0;

  const weekDays = getWeekDays().map(d => formatDateString(d));

  if (!progress.answerHistory) {
    progress.answerHistory = [];
  }

  if (selectedTimeframe === 'week') {
    // Filter history for this week only
    const weekHistory = progress.answerHistory.filter(entry => weekDays.includes(entry.date));
    
    weekHistory.forEach(entry => {
      // Categories
      if (!activeScores[entry.category]) {
        activeScores[entry.category] = { correct: 0, total: 0 };
      }
      activeScores[entry.category].total++;
      if (entry.isCorrect) activeScores[entry.category].correct++;

      // Subcategories
      if (!activeSubScores[entry.subcategory]) {
        activeSubScores[entry.subcategory] = { correct: 0, total: 0 };
      }
      activeSubScores[entry.subcategory].total++;
      if (entry.isCorrect) activeSubScores[entry.subcategory].correct++;
    });
  } else {
    // All Time
    if (progress.answerHistory.length > 0) {
      progress.answerHistory.forEach(entry => {
        if (!activeScores[entry.category]) {
          activeScores[entry.category] = { correct: 0, total: 0 };
        }
        activeScores[entry.category].total++;
        if (entry.isCorrect) activeScores[entry.category].correct++;

        if (!activeSubScores[entry.subcategory]) {
          activeSubScores[entry.subcategory] = { correct: 0, total: 0 };
        }
        activeSubScores[entry.subcategory].total++;
        if (entry.isCorrect) activeSubScores[entry.subcategory].correct++;
      });
    } else {
      activeScores = progress.scores || {};
      activeSubScores = progress.subcategoryScores || {};
    }
  }

  // Calculate Overall
  for (let cat in activeScores) {
    totalAnswered += activeScores[cat].total;
    totalCorrect += activeScores[cat].correct;
  }

  const overallAccVal = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  document.getElementById('totalQuestionsAnswered').textContent = totalAnswered;
  document.getElementById('overallAccuracy').textContent = `${overallAccVal}%`;

  // Render study time
  const totalMs = progress.totalStudyTimeMs || 0;
  const totalMinutes = Math.round(totalMs / 60000);
  document.getElementById('totalStudyTime').textContent = `${totalMinutes}m`;

  // Render Math & Reading main cards
  const categories = ["Mathematics", "Reading"];
  categories.forEach(cat => {
    const catScore = activeScores[cat] || { correct: 0, total: 0 };
    const accuracy = catScore.total > 0 ? Math.round((catScore.correct / catScore.total) * 100) : 0;
    
    if (cat === "Mathematics") {
      document.getElementById('mathAccuracy').textContent = `${accuracy}%`;
      document.getElementById('mathProgressBar').style.width = `${accuracy}%`;
      document.getElementById('mathRatio').textContent = `${catScore.correct} / ${catScore.total} correct`;
    } else if (cat === "Reading") {
      document.getElementById('readingAccuracy').textContent = `${accuracy}%`;
      document.getElementById('readingProgressBar').style.width = `${accuracy}%`;
      document.getElementById('readingRatio').textContent = `${catScore.correct} / ${catScore.total} correct`;
    }
  });

  // Render Subcategories
  const mathSubEl = document.getElementById('mathSubcategories');
  const readingSubEl = document.getElementById('readingSubcategories');
  
  mathSubEl.innerHTML = '';
  readingSubEl.innerHTML = '';

  const subcategoriesByCategory = {
    "Mathematics": new Set(),
    "Reading": new Set()
  };

  questions.forEach(q => {
    if (subcategoriesByCategory[q.category]) {
      subcategoriesByCategory[q.category].add(q.subcategory);
    }
  });

  for (let cat in subcategoriesByCategory) {
    const container = cat === "Mathematics" ? mathSubEl : readingSubEl;
    const subcats = Array.from(subcategoriesByCategory[cat]);

    subcats.sort();

    subcats.forEach(sub => {
      const score = activeSubScores[sub] || { correct: 0, total: 0 };
      const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
      
      const subItem = document.createElement('div');
      subItem.className = 'subcategory-item';
      subItem.innerHTML = `
        <div class="subcategory-info">
          <span class="subcategory-name">${sub}</span>
          <div class="subcategory-stats">
            <span class="subcategory-ratio">${score.correct} / ${score.total}</span>
            <span class="subcategory-percentage">${pct}%</span>
          </div>
        </div>
        <div class="sub-progress-bar-container">
          <div class="sub-progress-bar-fill" style="width: ${pct}%"></div>
        </div>
      `;
      container.appendChild(subItem);
    });
  }
}

// ----------------------------------------------------
// TEST WORKSPACE & SESSION FLOW
// ----------------------------------------------------

let currentQuestion = null;
let currentSession = {
  questions: [],
  answers: [], // will store { questionId, selectedIndex, isCorrect }
  currentIndex: 0,
  isActive: false,
  startTime: null,
  endTime: null,
  sessionMode: 'quiz', // 'quiz' or 'review'
  reviewQuestions: [],
  reviewIndex: 0,
  mode: 'normal' // 'normal' or 'extra'
};

// Helper to format milliseconds to a human-readable string
function formatDuration(ms) {
  if (!ms || ms < 0) return '0s';
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}

// Initialize a new flexible practice session
function startNewSession(sessionType = 'normal') {
  // Find unanswered questions
  let pool = questions.filter(q => !progress.answeredQuestionIds.includes(q.id));
  
  // If we run out of unanswered questions, mix in answered ones but avoid duplicates
  if (pool.length < 20) {
    const answeredPool = questions.filter(q => progress.answeredQuestionIds.includes(q.id));
    const combined = [...pool];
    for (let q of answeredPool) {
      if (combined.length >= 20) break;
      if (!combined.some(item => item.id === q.id)) {
        combined.push(q);
      }
    }
    pool = combined;
  }

  // Shuffle the practice pool to make it feel fresh
  pool.sort(() => Math.random() - 0.5);

  // Select a batch of up to 20 questions
  const sessionSize = Math.min(20, pool.length);
  const selectedQuestions = pool.slice(0, sessionSize);

  currentSession = {
    questions: selectedQuestions,
    answers: [],
    currentIndex: 0,
    isActive: true,
    startTime: Date.now(),
    endTime: null,
    sessionMode: 'quiz', // 'quiz' or 'review'
    reviewQuestions: [],
    reviewIndex: 0,
    mode: sessionType
  };
}

// Select and load the next question for practice or review correction
function loadNextQuestion() {
  const quizFeedback = document.getElementById('quizTutorFeedback');
  if (quizFeedback) quizFeedback.classList.add('hidden');

  if (!currentSession.isActive) {
    startNewSession();
  }

  const alphabet = ['A', 'B', 'C', 'D'];
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';

  const btnNext = document.getElementById('btnNextQuestion');
  btnNext.classList.add('hidden');

  if (currentSession.sessionMode === 'review') {
    const nextQ = currentSession.reviewQuestions[currentSession.reviewIndex];
    currentQuestion = nextQ;
    currentQuestionIndex = questions.indexOf(nextQ);

    document.getElementById('questionCategoryBadge').textContent = `${nextQ.category} • ${nextQ.subcategory} (Correction Mode)`;
    document.getElementById('questionCounter').textContent = `Correcting: Question ${currentSession.reviewIndex + 1} of ${currentSession.reviewQuestions.length}`;

    // Render passage
    const passageContainer = document.getElementById('passageContainer');
    const passageText = document.getElementById('passageText');
    if (nextQ.passage) {
      passageContainer.classList.remove('hidden');
      passageText.textContent = nextQ.passage;
    } else {
      passageContainer.classList.add('hidden');
    }

    document.getElementById('questionText').textContent = nextQ.question;

    nextQ.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${alphabet[index]}</span>
        <span class="option-text">${optText}</span>
      `;
      btn.addEventListener('click', () => handleReviewOptionSelection(index));
      optionsContainer.appendChild(btn);
    });
  } else {
    // Normal Quiz Mode
    const nextQ = currentSession.questions[currentSession.currentIndex];
    currentQuestion = nextQ;
    currentQuestionIndex = questions.indexOf(nextQ);

    document.getElementById('questionCategoryBadge').textContent = `${nextQ.category} • ${nextQ.subcategory}`;
    document.getElementById('questionCounter').textContent = `Question ${currentSession.currentIndex + 1} of ${currentSession.questions.length}`;

    // Render passage
    const passageContainer = document.getElementById('passageContainer');
    const passageText = document.getElementById('passageText');
    if (nextQ.passage) {
      passageContainer.classList.remove('hidden');
      passageText.textContent = nextQ.passage;
    } else {
      passageContainer.classList.add('hidden');
    }

    document.getElementById('questionText').textContent = nextQ.question;

    nextQ.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${alphabet[index]}</span>
        <span class="option-text">${optText}</span>
      `;
      btn.addEventListener('click', () => handleOptionSelection(index));
      optionsContainer.appendChild(btn);
    });
  }
}

// Handle multiple choice selection in normal quiz mode
function handleOptionSelection(selectedIndex) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.setAttribute('disabled', 'true'));

  const isCorrect = selectedIndex === currentQuestion.correctIndex;
  const category = currentQuestion.category;
  const subcategory = currentQuestion.subcategory;

  // Mark answer index states visually
  buttons.forEach((btn, index) => {
    if (index === currentQuestion.correctIndex) {
      btn.classList.add(selectedIndex === index ? 'selected-correct' : 'highlighted-correct');
    } else if (index === selectedIndex) {
      btn.classList.add('selected-incorrect');
    }
  });

  // Record answer in session
  currentSession.answers[currentSession.currentIndex] = {
    questionId: currentQuestion.id,
    selectedIndex,
    isCorrect
  };

  // Initialize metrics if absent
  if (!progress.scores[category]) {
    progress.scores[category] = { correct: 0, total: 0 };
  }
  if (!progress.subcategoryScores) {
    progress.subcategoryScores = {};
  }
  if (!progress.subcategoryScores[subcategory]) {
    progress.subcategoryScores[subcategory] = { correct: 0, total: 0 };
  }

  // Record metrics
  progress.scores[category].total++;
  progress.subcategoryScores[subcategory].total++;
  
  if (isCorrect) {
    progress.scores[category].correct++;
    progress.subcategoryScores[subcategory].correct++;
  }

  // Record in global answer history
  if (!progress.answerHistory) {
    progress.answerHistory = [];
  }
  progress.answerHistory.push({
    questionId: currentQuestion.id,
    date: getTodayString(),
    isCorrect: isCorrect,
    category: category,
    subcategory: subcategory
  });

  // Add to answered list so we don't repeat immediately
  if (!progress.answeredQuestionIds.includes(currentQuestion.id)) {
    progress.answeredQuestionIds.push(currentQuestion.id);
  }

  // Update/maintain streak on practice attempt
  updateStreakOnAnswer();

  // Save updated progress
  saveProgress();

  // Show Next Button
  const btnNext = document.getElementById('btnNextQuestion');
  btnNext.classList.remove('hidden');

  if (currentSession.currentIndex === currentSession.questions.length - 1) {
    const wrongCount = currentSession.answers.filter(ans => !ans.isCorrect).length;
    if (wrongCount > 0) {
      btnNext.querySelector('span').textContent = "Start Wrong Answer Review";
    } else {
      btnNext.querySelector('span').textContent = "Finish & View Certificate";
    }
  } else {
    btnNext.querySelector('span').textContent = "Next Question";
  }
}

// Handle option selection in wrong-question review mode
function handleReviewOptionSelection(selectedIndex) {
  const isCorrect = selectedIndex === currentQuestion.correctIndex;
  const buttons = document.querySelectorAll('.option-btn');
  const quizFeedback = document.getElementById('quizTutorFeedback');
  const feedbackTitle = document.getElementById('quizTutorFeedbackTitle');
  const feedbackText = document.getElementById('quizTutorFeedbackText');

  if (isCorrect) {
    // Disable all options
    buttons.forEach(btn => btn.setAttribute('disabled', 'true'));
    
    // Highlight correct choice
    buttons[selectedIndex].classList.add('selected-correct');

    // Show step-by-step explanation
    if (quizFeedback) {
      quizFeedback.classList.remove('hidden');
      quizFeedback.style.borderLeftColor = 'var(--success)';
      feedbackTitle.textContent = "✅ Correct! Step-by-Step Explanation";
      feedbackText.innerHTML = currentQuestion.tutorContent.explanation;
    }

    // Show Next button
    const btnNext = document.getElementById('btnNextQuestion');
    btnNext.classList.remove('hidden');

    if (currentSession.reviewIndex === currentSession.reviewQuestions.length - 1) {
      btnNext.querySelector('span').textContent = "View Certificate";
    } else {
      btnNext.querySelector('span').textContent = "Next Review Question";
    }
  } else {
    // Highlight wrong choice
    buttons[selectedIndex].classList.add('selected-incorrect');
    buttons[selectedIndex].setAttribute('disabled', 'true'); // Disable just this one to allow other guesses

    // Show tutor hint
    if (quizFeedback) {
      quizFeedback.classList.remove('hidden');
      quizFeedback.style.borderLeftColor = 'var(--warning)';
      feedbackTitle.textContent = "💡 Tutor Hint";
      feedbackText.innerHTML = currentQuestion.tutorContent.hint;
    }
  }
}

// Next question or session end router
function handleNextQuestionClick() {
  if (currentSession.sessionMode === 'review') {
    if (currentSession.reviewIndex === currentSession.reviewQuestions.length - 1) {
      // Completed wrong answer review!
      currentSession.isActive = false;
      currentSession.endTime = Date.now();

      // Record study duration
      const elapsedMs = currentSession.endTime - currentSession.startTime;
      progress.totalStudyTimeMs = (progress.totalStudyTimeMs || 0) + elapsedMs;
      saveProgress();

      switchScreen('screenSessionReview');
    } else {
      currentSession.reviewIndex++;
      loadNextQuestion();
    }
  } else {
    // Normal quiz mode
    if (currentSession.currentIndex === currentSession.questions.length - 1) {
      // Completed initial 20 questions!
      const wrongAnswers = currentSession.answers.filter(ans => !ans.isCorrect);
      if (wrongAnswers.length > 0) {
        // Redirect to wrong-answer retry review mode
        currentSession.sessionMode = 'review';
        currentSession.reviewQuestions = wrongAnswers.map(ans => 
          currentSession.questions.find(q => q.id === ans.questionId)
        );
        currentSession.reviewIndex = 0;
        loadNextQuestion();
      } else {
        // Perfect score, directly show review screen
        currentSession.isActive = false;
        currentSession.endTime = Date.now();

        const elapsedMs = currentSession.endTime - currentSession.startTime;
        progress.totalStudyTimeMs = (progress.totalStudyTimeMs || 0) + elapsedMs;
        saveProgress();

        switchScreen('screenSessionReview');
      }
    } else {
      currentSession.currentIndex++;
      loadNextQuestion();
    }
  }
}

// Compile results and populate the review screen
function renderSessionReviewScreen() {
  const correctAnswers = currentSession.answers.filter(ans => ans.isCorrect);
  const totalAnswered = currentSession.answers.length;

  document.getElementById('sessionCorrectCount').textContent = `${correctAnswers.length} / ${totalAnswered}`;
  
  const accuracy = totalAnswered > 0 ? Math.round((correctAnswers.length / totalAnswered) * 100) : 0;
  document.getElementById('sessionAccuracy').textContent = `${accuracy}%`;

  // Update certificate title & date
  document.getElementById('completionHeader').textContent = `Well done, ${studentName}!`;
  
  const d = new Date();
  const monthStr = String(d.getMonth() + 1).padStart(2, '0');
  const dayStr = String(d.getDate()).padStart(2, '0');
  const yearStr = d.getFullYear();
  document.getElementById('completionDate').textContent = `Date: ${monthStr}/${dayStr}/${yearStr}`;

  // Update session duration
  const elapsedMs = (currentSession.endTime || Date.now()) - (currentSession.startTime || Date.now());
  document.getElementById('sessionTimeSpent').textContent = formatDuration(elapsedMs);

  // Calculate historical comparison (exclude current session inputs to compare to the past)
  let histTotal = 0;
  let histCorrect = 0;
  for (let cat in progress.scores) {
    histTotal += progress.scores[cat].total;
    histCorrect += progress.scores[cat].correct;
  }

  const pastTotal = histTotal - totalAnswered;
  const pastCorrect = histCorrect - correctAnswers.length;

  const comparisonEl = document.getElementById('sessionComparisonText');
  if (pastTotal > 0) {
    const pastAccuracy = Math.round((pastCorrect / pastTotal) * 100);
    const diff = accuracy - pastAccuracy;

    if (diff > 0) {
      comparisonEl.innerHTML = `📈 <strong>+${diff}%</strong> better than your previous average of ${pastAccuracy}%!`;
      comparisonEl.style.borderColor = 'rgba(16, 185, 129, 0.3)';
    } else if (diff < 0) {
      comparisonEl.innerHTML = `📉 <strong>${Math.abs(diff)}%</strong> below your previous average of ${pastAccuracy}%. Keep reviewing explanations!`;
      comparisonEl.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    } else {
      comparisonEl.innerHTML = `🎯 Right on target! Matches your historical average of ${pastAccuracy}%.`;
      comparisonEl.style.borderColor = 'var(--card-border)';
    }
  } else {
    comparisonEl.innerHTML = `🌱 This is your very first session! Great job starting today.`;
    comparisonEl.style.borderColor = 'var(--card-border)';
  }

  // Render detailed wrong-question list for final review
  const wrongAnswersContainer = document.getElementById('wrongAnswersContainer');
  wrongAnswersContainer.innerHTML = '';

  const wrongAnswers = currentSession.answers.filter(ans => !ans.isCorrect);

  if (wrongAnswers.length === 0) {
    wrongAnswersContainer.innerHTML = `
      <div class="card no-incorrect-card" style="text-align: center; border-color: var(--success); background: rgba(16, 185, 129, 0.05); color: var(--success); font-weight: 600; padding: 20px;">
        ✨ Perfect Score! You didn't get any questions wrong in this session. Keep up the amazing work! ✨
      </div>
    `;
    return;
  }

  wrongAnswers.forEach(ans => {
    const q = questions.find(item => item.id === ans.questionId);
    if (!q) return;

    const wrongCard = document.createElement('div');
    wrongCard.className = 'wrong-question-card card';

    let passageHtml = '';
    if (q.passage) {
      passageHtml = `
        <div class="passage-container review-passage-container">
          <div class="passage-content">${q.passage}</div>
        </div>
      `;
    }

    const selectedText = q.options[ans.selectedIndex];
    const correctText = q.options[q.correctIndex];

    const alphabet = ['A', 'B', 'C', 'D'];
    const selectedLetter = alphabet[ans.selectedIndex];
    const correctLetter = alphabet[q.correctIndex];

    wrongCard.innerHTML = `
      <div class="wrong-question-header">
        <span class="category-badge">${q.category} • ${q.subcategory}</span>
      </div>
      ${passageHtml}
      <div class="question-statement">${q.question}</div>
      <div class="review-answers">
        <div class="review-answer-item incorrect">
          <span class="answer-status-label">Your Initial Answer:</span>
          <span class="answer-text">(${selectedLetter}) ${selectedText}</span>
        </div>
        <div class="review-answer-item correct">
          <span class="answer-status-label">Correct Answer:</span>
          <span class="answer-text">(${correctLetter}) ${correctText}</span>
        </div>
      </div>
      <div class="explanation-box" style="margin-top: 15px;">
        <h4>💡 Step-by-Step Explanation</h4>
        <div class="explanation-text">${q.tutorContent.explanation}</div>
      </div>
    `;
    wrongAnswersContainer.appendChild(wrongCard);
  });
}

// ----------------------------------------------------
// PROFILE SWITCHER & NAME EDIT
// ----------------------------------------------------

function toggleProfileEdit(show) {
  const profileDisplay = document.getElementById('profileDisplay');
  const profileEditBox = document.getElementById('profileEditBox');
  const studentNameInput = document.getElementById('studentNameInput');

  if (show) {
    profileDisplay.classList.add('hidden');
    profileEditBox.classList.remove('hidden');
    studentNameInput.value = studentName;
    studentNameInput.focus();
  } else {
    profileDisplay.classList.remove('hidden');
    profileEditBox.classList.add('hidden');
  }
}

async function handleProfileSave() {
  const studentNameInput = document.getElementById('studentNameInput');
  const newName = studentNameInput.value.trim();
  
  if (newName.length > 0) {
    studentName = newName;
    document.getElementById('currentStudentName').textContent = studentName;
    
    // Load state for this specific student
    await loadProgress();
    
    // Reset views and go back to streak dashboard
    switchScreen('screenStreak');
  }
  
  toggleProfileEdit(false);
}

// ----------------------------------------------------
// INITIALIZATION & EVENT LISTENERS
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', async () => {
  // Navigation Tabs Event Listeners
  document.getElementById('tabDailyPrep').addEventListener('click', () => switchScreen('screenDailyPrep'));
  document.getElementById('tabStreak').addEventListener('click', () => switchScreen('screenStreak'));
  document.getElementById('tabPerformance').addEventListener('click', () => switchScreen('screenPerformance'));

  // Calendar Prev/Next navigation
  document.getElementById('btnPrevMonth').addEventListener('click', () => {
    if (currentCalendarMonth === 0) {
      currentCalendarMonth = 11;
      currentCalendarYear--;
    } else {
      currentCalendarMonth--;
    }
    renderStreakScreen();
  });

  document.getElementById('btnNextMonth').addEventListener('click', () => {
    if (currentCalendarMonth === 11) {
      currentCalendarMonth = 0;
      currentCalendarYear++;
    } else {
      currentCalendarMonth++;
    }
    renderStreakScreen();
  });

  // Streak dashboard CTA
  document.getElementById('btnStartPractice').addEventListener('click', () => switchScreen('screenDailyPrep'));

  // Extra practice and completion triggers
  document.getElementById('btnStartExtraPractice').addEventListener('click', () => {
    startNewSession('extra');
    document.getElementById('dailyPrepCompletedState').classList.add('hidden');
    document.getElementById('dailyPrepQuizState').classList.remove('hidden');
    loadNextQuestion();
  });

  document.getElementById('btnGoToStreak').addEventListener('click', () => {
    switchScreen('screenStreak');
  });

  // Next question or finish session
  document.getElementById('btnNextQuestion').addEventListener('click', handleNextQuestionClick);

  document.getElementById('btnFinishSession').addEventListener('click', () => {
    switchScreen('screenStreak');
  });

  // Timeframe Toggle Event Listeners
  const btnAll = document.getElementById('btnToggleAllTime');
  const btnWeek = document.getElementById('btnToggleThisWeek');
  
  if (btnAll && btnWeek) {
    btnAll.addEventListener('click', () => {
      selectedTimeframe = 'all';
      btnAll.classList.add('active');
      btnWeek.classList.remove('active');
      renderPerformanceScreen();
    });

    btnWeek.addEventListener('click', () => {
      selectedTimeframe = 'week';
      btnWeek.classList.add('active');
      btnAll.classList.remove('active');
      renderPerformanceScreen();
    });
  }

  // Profile switches
  document.getElementById('btnEditProfile').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleProfileEdit(true);
  });
  
  document.getElementById('btnSaveProfile').addEventListener('click', handleProfileSave);

  document.getElementById('studentNameInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleProfileSave();
  });

  // Clicking outside name selector closes it
  document.addEventListener('click', (e) => {
    const editBox = document.getElementById('profileEditBox');
    const editBtn = document.getElementById('btnEditProfile');
    if (!editBox.classList.contains('hidden') && !editBox.contains(e.target) && e.target !== editBtn) {
      toggleProfileEdit(false);
    }
  });

  // Initial Data Load
  await loadProgress();
  
  // Default to streak dashboard screen
  switchScreen('screenStreak');
});
