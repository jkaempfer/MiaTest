window.questions = [
  {
    id: "math_alg_1",
    category: "Mathematics",
    subcategory: "Algebra",
    question: "If 3x + 7 = 22, what is the value of 2x - 3?",
    options: ["7", "12", "5", "9"],
    correctIndex: 0,
    tutorContent: {
      hint: "First, solve for x in the equation 3x + 7 = 22. Once you find x, plug it into the expression 2x - 3.",
      explanation: "Let's solve it step by step!\n1. Subtract 7 from both sides: 3x = 15.\n2. Divide by 3: x = 5.\n3. Now plug x = 5 into 2x - 3:\n   2(5) - 3 = 10 - 3 = 7.\nTherefore, the correct answer is 7.",
      commonMistake: "A common mistake is finding x = 5 and selecting it immediately, or miscalculating the arithmetic when subtracting 7."
    }
  },
  {
    id: "math_geo_1",
    category: "Mathematics",
    subcategory: "Geometry",
    question: "A rectangular garden has a perimeter of 40 meters. If the length is 4 meters longer than the width, what is the area of the garden in square meters?",
    options: ["84", "96", "100", "120"],
    correctIndex: 1,
    tutorContent: {
      hint: "Remember the perimeter formula for a rectangle: P = 2(length + width). Set up an equation using a variable for the width.",
      explanation: "Let's work through this step-by-step:\n1. Let the width of the garden be w. Since the length is 4m longer, the length is w + 4.\n2. The perimeter formula is 2 * (length + width) = 40:\n   2 * ((w + 4) + w) = 40\n   2 * (2w + 4) = 40\n   4w + 8 = 40\n   4w = 32\n   w = 8 meters.\n3. So the width is 8m, and the length is 8 + 4 = 12m.\n4. Find the area: Area = length * width = 12 * 8 = 96 square meters.\nTherefore, the correct answer is 96.",
      commonMistake: "Choosing 84 or 100 often happens if you forget to divide by 2 for the perimeter, or if you guess the dimensions without solving the equations."
    }
  },
  {
    id: "math_word_1",
    category: "Mathematics",
    subcategory: "Word Problems",
    question: "A train travels at a constant speed of 60 miles per hour. A second train starts 30 minutes later from the same station and travels in the same direction at 80 miles per hour. How many hours after the second train starts will it overtake the first train?",
    options: ["1 hour", "1.5 hours", "2 hours", "2.5 hours"],
    correctIndex: 1,
    tutorContent: {
      hint: "Find how far the first train travels before the second train starts. Then, think about how much faster the second train travels to catch up.",
      explanation: "Let's break down the distance and speeds:\n1. The first train starts 30 minutes (0.5 hours) early at 60 mph. It travels 60 * 0.5 = 30 miles before the second train starts.\n2. The second train travels at 80 mph, which is 20 mph faster than the first train (80 - 60 = 20).\n3. To cover the 30-mile head start at a relative speed of 20 mph, it takes:\n   Time = Distance / Speed = 30 miles / 20 mph = 1.5 hours.\nTherefore, it will take 1.5 hours.",
      commonMistake: "Selecting 1 hour or 2 hours often comes from trying to divide the total speeds without accounting for the 30-minute head start properly."
    }
  },
  {
    id: "math_alg_2",
    category: "Mathematics",
    subcategory: "Algebra",
    question: "If x + y = 14 and x - y = 4, what is the value of x² - y²?",
    options: ["18", "40", "56", "96"],
    correctIndex: 2,
    tutorContent: {
      hint: "You can find x and y individually, or you can use the algebraic identity for the difference of squares: x² - y² = (x + y)(x - y).",
      explanation: "There are two ways to solve this. Let's look at the fast way first!\n**Method 1 (Algebraic Identity):**\nWe know that x² - y² = (x + y) * (x - y).\nPlugging in the given values:\n(x + y) * (x - y) = 14 * 4 = 56.\n\n**Method 2 (Solving for x and y):**\n1. Add the two equations: (x + y) + (x - y) = 14 + 4 => 2x = 18 => x = 9.\n2. Since x = 9, plug it back in to find y: 9 + y = 14 => y = 5.\n3. Compute x² - y²: 9² - 5² = 81 - 25 = 56.\nBoth methods give 56!",
      commonMistake: "Selecting 40 or 96 usually happens from arithmetic errors or multiplying the numbers incorrectly."
    }
  },
  {
    id: "math_geo_2",
    category: "Mathematics",
    subcategory: "Geometry",
    question: "In triangle ABC, the measure of angle A is 45 degrees. The measure of angle B is 15 degrees less than twice the measure of angle C. What is the measure of angle B in degrees?",
    options: ["50°", "65°", "75°", "80°"],
    correctIndex: 2,
    tutorContent: {
      hint: "Remember that the sum of angles in any triangle is always 180 degrees. Set up an equation where A + B + C = 180.",
      explanation: "Let's set up the equation step-by-step:\n1. Let the measure of angle C be c degrees.\n2. Angle B is 15 less than twice C, so B = 2c - 15.\n3. Angle A is 45.\n4. The sum of the angles is 180:\n   A + B + C = 180\n   45 + (2c - 15) + c = 180\n   30 + 3c = 180\n   3c = 150\n   c = 50 degrees.\n5. Now find angle B using B = 2c - 15:\n   B = 2(50) - 15 = 100 - 15 = 75 degrees.\nTherefore, angle B is 75°.",
      commonMistake: "Choosing 50° is a common mistake because it is the value of C, not B. Be sure to read the question carefully to see which angle is being asked for!"
    }
  },
  {
    id: "read_voc_1",
    category: "Reading",
    subcategory: "Vocabulary",
    passage: "The scientist's explanation was so convoluted that even her colleagues struggled to follow her reasoning.",
    question: "As used in the sentence, the word 'convoluted' most nearly means:",
    options: ["Brief and direct", "Extremely complex", "Scientifically advanced", "Factually incorrect"],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the context clue: 'even her colleagues struggled to follow her reasoning'. This implies the explanation was difficult to navigate or tangled.",
      explanation: "The sentence states that colleagues 'struggled to follow' her reasoning, indicating that the structure of the explanation was complicated and winding. 'Convoluted' means folded, twisted, or extremely complex.",
      commonMistake: "Choosing 'Factually incorrect' is a trap because the colleagues struggled with it, but the sentence is describing the clarity and complexity of the reasoning, not whether the facts were true or false."
    }
  },
  {
    id: "read_voc_2",
    category: "Reading",
    subcategory: "Vocabulary",
    passage: "Despite facing severe budget constraints, the city council took a pragmatic approach, focusing on repairing existing roads rather than launching ambitious new construction projects.",
    question: "As used in the sentence, the word 'pragmatic' most nearly means:",
    options: ["Idealistic", "Practical", "Hesitant", "Expensive"],
    correctIndex: 1,
    tutorContent: {
      hint: "The council focused on repairing existing roads due to a tight budget, which is a sensible, down-to-earth choice compared to building grand new projects.",
      explanation: "A 'pragmatic' approach is one guided by practical considerations and realistic constraints rather than theoretical ideas or idealism. Choosing to patch existing infrastructure within a budget rather than build new expensive projects is a practical action.",
      commonMistake: "Choosing 'Idealistic' is the exact opposite of pragmatic. Idealistic people chase perfect ideas, whereas pragmatic people deal with realities."
    }
  },
  {
    id: "read_inf_1",
    category: "Reading",
    subcategory: "Inference",
    passage: "Although honeybees are vital pollinators for many of the crops we eat, their populations have been in steep decline. Scientists point to a combination of pesticide exposure, habitat loss, and climate change. Some farmers have started planting wildflower borders around their fields to provide bees with a safe refuge and diverse food sources, resulting in a visible rebound in local hive health.",
    question: "Based on the passage, what can be reasonably inferred about wildflower borders?",
    options: [
      "They neutralize the toxic effects of chemical pesticides.",
      "They are more profitable for farmers to harvest than crops.",
      "They help mitigate some of the negative impacts of habitat loss.",
      "They prevent local bee populations from experiencing any climate-related stress."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Look at what wildflower borders provide: 'safe refuge and diverse food sources', and see how that connects to the causes of bee decline mentioned earlier.",
      explanation: "The passage notes that 'habitat loss' is one of the causes of bee decline. Farmers planting wildflower borders provide bees with 'safe refuge' and 'diverse food sources' (which are elements of a healthy habitat). Because hives rebounded, we can infer that these borders help offset some of the effects of habitat loss. \nIt does not say they neutralize chemical pesticides (Option 1) or completely stop climate stress (Option 4).",
      commonMistake: "Choosing Option 1 is common because pesticide exposure is mentioned, but the passage never states that flowers neutralize or destroy chemicals."
    }
  },
  {
    id: "read_det_1",
    category: "Reading",
    subcategory: "Reading Comprehension",
    passage: "Originally developed in the mid-19th century, the Chicago river reversal was an engineering marvel. Designers diverted the river's flow away from Lake Michigan, the city's source of drinking water, and directed it toward the Mississippi River basin to carry sewage away from the city. While it successfully prevented waterborne diseases, the reversal also introduced invasive species into new ecosystems.",
    question: "According to the passage, what was the primary reason the flow of the Chicago River was reversed?",
    options: [
      "To connect shipping channels between Chicago and the Mississippi River.",
      "To protect the city's drinking water from sewage contamination.",
      "To introduce new marine species to Lake Michigan.",
      "To create hydroelectric power for the developing city."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look closely at the phrase: 'diverted the river's flow away from Lake Michigan, the city's source of drinking water, and directed it... to carry sewage away'.",
      explanation: "The passage explicitly states that the designers diverted the flow away from Lake Michigan (which was the city's source of drinking water) to carry sewage away. This was done to prevent waterborne diseases, protecting the drinking water supply.",
      commonMistake: "Selecting Option 3 is a trap; the introduction of invasive species was an unintended negative consequence, not the reason they reversed the river."
    }
  },
  {
    id: "math_word_2",
    category: "Mathematics",
    subcategory: "Word Problems",
    question: "A store originally priced a bicycle at $200. They first discounted the price by 20%. A week later, they applied an additional 10% discount to the sale price. What is the final price of the bicycle?",
    options: ["$140", "$144", "$150", "$160"],
    correctIndex: 1,
    tutorContent: {
      hint: "Be careful! Discounts do not simply add up (20% + 10% = 30% is incorrect). Calculate the first discount, then apply the second discount to that new sale price.",
      explanation: "Let's perform the calculations sequentially:\n1. The original price is $200.\n2. The first discount is 20%. Since 20% of $200 is $40, the new price is:\n   $200 - $40 = $160.\n3. The second discount of 10% is applied to the sale price ($160).\n4. 10% of $160 is $16.\n5. Subtract $16 from the sale price:\n   $160 - $16 = $144.\nTherefore, the final price is $144.",
      commonMistake: "Choosing $140 is a very common mistake. It happens if you add the two percentages (20% + 10% = 30% off $200, which would be $60 off, leading to $140). Consecutive discounts are not additive!"
    }
  },
  {
    id: "math_prob_1",
    category: "Mathematics",
    subcategory: "Probability & Statistics",
    question: "A bag contains 4 red marbles, 5 blue marbles, and 6 green marbles. If Mia selects one marble at random, what is the probability that it is NOT red?",
    options: ["4/15", "11/15", "1/3", "3/5"],
    correctIndex: 1,
    tutorContent: {
      hint: "Find the total number of marbles first. Then, count how many marbles are NOT red, and divide that number by the total.",
      explanation: "Let's find the probability step-by-step:\n1. Find the total number of marbles: 4 red + 5 blue + 6 green = 15 marbles.\n2. Count the marbles that are NOT red: 5 blue + 6 green = 11 marbles.\n3. The probability of choosing a non-red marble is the number of non-red marbles divided by the total number: 11/15.\nTherefore, the correct answer is 11/15.",
      commonMistake: "Choosing 4/15 is a common mistake. 4/15 is the probability of selecting a red marble, but the question asks for the probability that it is NOT red!"
    }
  },
  {
    id: "math_frac_1",
    category: "Mathematics",
    subcategory: "Fractions, Decimals, & Percentages",
    question: "What is 3/8 expressed as a decimal and a percentage?",
    options: ["0.375 and 37.5%", "0.38 and 38%", "0.325 and 32.5%", "0.45 and 45%"],
    correctIndex: 0,
    tutorContent: {
      hint: "To convert a fraction to a decimal, divide the numerator by the denominator (3 ÷ 8). To get the percentage, multiply that decimal by 100.",
      explanation: "Let's perform the conversions:\n1. Divide 3 by 8: 3 ÷ 8 = 0.375.\n2. Multiply the decimal by 100 to get the percentage: 0.375 * 100 = 37.5%.\nTherefore, 3/8 is equal to 0.375 and 37.5%.",
      commonMistake: "Choosing 0.38 and 38% is a common mistake if you estimate based on the digits in the fraction (3 and 8) without doing the actual division."
    }
  },
  {
    id: "read_tone_1",
    category: "Reading",
    subcategory: "Tone, Style, & Purpose",
    passage: "The city's historic water tower has stood as a silent sentinel over the neighborhood for more than a century. While some modern developers view it as an obsolete obstacle to progress, to local residents it is a beloved monument, reminding them of the community's rich industrial heritage and enduring resilience.",
    question: "The author's tone in describing the water tower can best be described as:",
    options: ["Critical and dismissive", "Nostalgic and appreciative", "Scientific and objective", "Indifferent and neutral"],
    correctIndex: 1,
    tutorContent: {
      hint: "Pay attention to the positive terms the author uses, like 'silent sentinel', 'beloved monument', 'rich heritage', and 'resilience'. Does the author sound dismissive or affectionate?",
      explanation: "The author uses warm, positive imagery ('silent sentinel', 'beloved monument', 'rich heritage') when describing the water tower. This shows an appreciation for its history, creating a nostalgic and appreciative tone. It is not objective/scientific because it highlights emotional and historical value rather than technical specs.",
      commonMistake: "Choosing 'Critical and dismissive' is a trap because the passage mentions developers who view it as an obstacle, but the *author's* own perspective and language are nostalgic and protective."
    }
  },
  {
    id: "read_anal_1",
    category: "Reading",
    subcategory: "Textual Analysis",
    passage: "In 1915, the Eastland steamship disaster claimed 844 lives while docked in the Chicago River. Investigators found that the ship had recently been modified to carry additional lifeboats to comply with new federal safety laws. Ironically, the heavy lifeboats, mounted high on the decks, made the ship top-heavy and contributed directly to its rolling over in the shallow river.",
    question: "Based on the passage, the primary irony of the Eastland disaster was that:",
    options: [
      "The disaster occurred in a shallow river rather than the deep open lake.",
      "The safety modifications intended to save lives actually made the ship less stable and caused the tragedy.",
      "The ship rolled over while it was docked and tied to the wharf.",
      "The federal safety laws were enacted only after the disaster took place."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Irony is when the actual outcome is the opposite of what was intended. Look at the purpose of the modifications vs. their actual impact.",
      explanation: "The passage states that modifications were made 'to comply with new federal safety laws' by adding lifeboats. However, these lifeboats made the ship top-heavy and 'contributed directly to its rolling over'. The irony is that safety gear caused the fatal instability.",
      commonMistake: "Choosing Option 1 is common because rolling in a shallow river sounds unusual, but the text specifically highlights the irony of the safety-induced rolling."
    }
  },
  {
    id: "math_prob_2",
    category: "Mathematics",
    subcategory: "Probability & Statistics",
    question: "Mia has a standard six-sided die. What is the probability that she rolls a number greater than 4?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correctIndex: 1,
    tutorContent: {
      hint: "On a six-sided die, the possible outcomes are 1, 2, 3, 4, 5, and 6. Which of these numbers are strictly greater than 4?",
      explanation: "Let's count the outcomes:\n1. The total number of outcomes is 6.\n2. The outcomes greater than 4 are 5 and 6 (exactly 2 numbers).\n3. Probability = Favorable outcomes / Total outcomes = 2 / 6 = 1 / 3.\nTherefore, the probability is 1/3.",
      commonMistake: "Choosing 1/2 is a common mistake if you include 4 itself (rolling 4, 5, or 6 is 3/6 = 1/2). But the question says 'greater than 4', which excludes 4."
    }
  },
  {
    id: "read_tone_2",
    category: "Reading",
    subcategory: "Tone, Style, & Purpose",
    passage: "Superconductors represent a major leap in material science. By conducting electricity with absolutely zero resistance, these materials eliminate energy loss entirely. While currently requiring extreme refrigeration, the ongoing search for room-temperature superconductors holds the promise of rewriting the rules of electrical grids, transportation, and consumer electronics.",
    question: "The primary purpose of the passage is to:",
    options: [
      "Detail the history of energy grids in North America.",
      "Argue against the excessive cost of superconductor research.",
      "Explain the concept of superconductors and highlight their future potential.",
      "Provide instructions on how to refrigerate scientific materials."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Think about why the author wrote this text. Is it to complain about costs, tell a history story, explain a technology, or give instructions?",
      explanation: "The passage explains what superconductors are (materials with zero electrical resistance) and details their future applications (rewriting grids, transport, electronics). Thus, its primary purpose is explaining the concept and highlighting its potential.",
      commonMistake: "Choosing Option 4 is a trap. Although the text mentions that superconductors require 'extreme refrigeration', this is a current limitation, not the main topic or purpose of the passage."
    }
  }
];
