window.questions = [
  // ==========================================
  // MATHEMATICS
  // ==========================================

  // --- Subcategory 1: Number Operations & Fractions ---
  {
    id: "math_num_1",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "What is the value of 3/4 + 5/6 - 2/3?",
    options: ["11/12", "7/12", "13/12", "5/6"],
    correctIndex: 0,
    tutorContent: {
      hint: "Find a common denominator for 4, 6, and 3. The least common multiple is 12.",
      explanation: "Convert all fractions to a denominator of 12:\n1. 3/4 = 9/12\n2. 5/6 = 10/12\n3. 2/3 = 8/12\nNow compute: 9/12 + 10/12 - 8/12 = 11/12.",
      commonMistake: "Simply adding the numerators and denominators directly (e.g. (3+5-2)/(4+6-3) = 6/7) is a common error when common denominators are forgotten."
    }
  },
  {
    id: "math_num_2",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "A number is multiplied by 3/5, and the result is 15. What is the original number?",
    options: ["9", "25", "30", "45"],
    correctIndex: 1,
    tutorContent: {
      hint: "Let the number be x. Set up the equation (3/5)x = 15, and solve for x by multiplying by the reciprocal.",
      explanation: "Set up equation: (3/5) * x = 15\nMultiply both sides by 5/3:\nx = 15 * (5/3)\nx = 5 * 5 = 25.\nThe number is 25.",
      commonMistake: "Multiplying 15 by 3/5 to get 9. This finds 3/5 OF 15, rather than finding the number whose 3/5 is 15."
    }
  },
  {
    id: "math_num_3",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "What is the prime factorization of 180?",
    options: ["2² * 3² * 5", "2 * 3³ * 5", "2³ * 3 * 5", "2² * 3 * 15"],
    correctIndex: 0,
    tutorContent: {
      hint: "Divide 180 by the smallest prime numbers repeatedly (2, 3, 5) until you get 1.",
      explanation: "Let's factor 180:\n1. 180 / 2 = 90\n2. 90 / 2 = 45\n3. 45 / 3 = 15\n4. 15 / 3 = 5\n5. 5 / 5 = 1\nSo 180 = 2 * 2 * 3 * 3 * 5 = 2² * 3² * 5.",
      commonMistake: "Selecting the option with 15 (2² * 3 * 15). 15 is not a prime number, and prime factorization must contain only prime factors."
    }
  },
  {
    id: "math_num_4",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "Which of the following has the greatest value?",
    options: ["0.65", "5/8", "60%", "2/3"],
    correctIndex: 3,
    tutorContent: {
      hint: "Convert all values into decimals to compare them easily.",
      explanation: "Convert each to a decimal:\n1. 0.65 = 0.650\n2. 5/8 = 0.625\n3. 60% = 0.600\n4. 2/3 = 0.666...\nComparing these, 0.666... (2/3) is the greatest.",
      commonMistake: "Choosing 5/8 thinking 5 and 8 are larger numbers, or choosing 0.65 without comparing the thousandths place."
    }
  },
  {
    id: "math_num_5",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "Evaluate the expression: 4² - 3 * (8 - 5) + 6 ÷ 2.",
    options: ["5", "10", "13", "16"],
    correctIndex: 1,
    tutorContent: {
      hint: "Follow the Order of Operations (PEMDAS): Parentheses, Exponents, Multiplication & Division (left to right), Addition & Subtraction (left to right).",
      explanation: "1. Parentheses: (8 - 5) = 3. Expression becomes: 4² - 3 * 3 + 6 ÷ 2\n2. Exponent: 4² = 16. Expression becomes: 16 - 3 * 3 + 6 ÷ 2\n3. Mult/Div: 3 * 3 = 9 and 6 ÷ 2 = 3. Expression becomes: 16 - 9 + 3\n4. Add/Sub (left to right): 16 - 9 = 7, then 7 + 3 = 10.",
      commonMistake: "Performing addition before subtraction (e.g. calculating 9 + 3 = 12, then 16 - 12 = 4) instead of working left to right."
    }
  },
  {
    id: "math_num_6",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "What is 15% of 80?",
    options: ["8", "12", "15", "18"],
    correctIndex: 1,
    tutorContent: {
      hint: "15% can be written as 0.15 or 15/100. Multiply this fraction by 80.",
      explanation: "Multiply: 0.15 * 80 = 12.\nAlternative way: 10% of 80 is 8, 5% of 80 is 4 (half of 10%). 8 + 4 = 12.",
      commonMistake: "Confusing 15% with 15 itself, or dividing 80 by 15."
    }
  },
  {
    id: "math_num_7",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "What is the value of (2³ * 2⁴) / 2⁵?",
    options: ["2", "4", "8", "16"],
    correctIndex: 1,
    tutorContent: {
      hint: "Recall exponent rules: a^m * a^n = a^(m+n), and a^m / a^n = a^(m-n).",
      explanation: "1. Numerator: 2³ * 2⁴ = 2^(3+4) = 2⁷.\n2. Divide: 2⁷ / 2⁵ = 2^(7-5) = 2².\n3. Evaluate: 2² = 4.",
      commonMistake: "Multiplying exponents in the numerator (e.g., 3 * 4 = 12, yielding 2¹² / 2⁵ = 2⁷ = 128)."
    }
  },
  {
    id: "math_num_8",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "If 1/3 of a number is 24, what is 1/4 of that same number?",
    options: ["6", "8", "18", "72"],
    correctIndex: 2,
    tutorContent: {
      hint: "First find the original number by multiplying 24 by 3. Then, find 1/4 of that number.",
      explanation: "1. Let the number be x. (1/3) * x = 24 => x = 24 * 3 = 72.\n2. Find 1/4 of 72: 72 / 4 = 18.",
      commonMistake: "Dividing 24 by 4 directly to get 6, failing to find the original number first."
    }
  },
  {
    id: "math_num_9",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "Which of the following is equivalent to 0.08?",
    options: ["8%", "80%", "0.8%", "4/5"],
    correctIndex: 0,
    tutorContent: {
      hint: "To convert a decimal to a percentage, multiply by 100 and add the % symbol.",
      explanation: "Compute: 0.08 * 100 = 8%.\nNote that 80% is 0.8, and 0.8% is 0.008.",
      commonMistake: "Choosing 80% because of the presence of the number 8, ignoring the position of the decimal point."
    }
  },
  {
    id: "math_num_10",
    category: "Mathematics",
    subcategory: "Number Operations & Fractions",
    question: "What is the greatest common factor (GCF) of 36 and 54?",
    options: ["6", "9", "18", "108"],
    correctIndex: 2,
    tutorContent: {
      hint: "List the factors of 36 and 54, or compare their prime factorizations: 36 = 2² * 3² and 54 = 2 * 3³.",
      explanation: "Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36.\nFactors of 54: 1, 2, 3, 6, 9, 18, 27, 54.\nThe largest factor they share is 18.",
      commonMistake: "Selecting 108, which is the Least Common Multiple (LCM), not the Greatest Common Factor (GCF)."
    }
  },

  // --- Subcategory 2: Algebraic Thinking ---
  {
    id: "math_alg_3",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "Solve the equation: 4x - 7 = 2x + 9.",
    options: ["x = 1", "x = 4", "x = 8", "x = 16"],
    correctIndex: 2,
    tutorContent: {
      hint: "Move all terms with x to one side and constants to the other side by using addition/subtraction.",
      explanation: "1. Subtract 2x from both sides: 2x - 7 = 9.\n2. Add 7 to both sides: 2x = 16.\n3. Divide by 2: x = 8.",
      commonMistake: "Adding the variables together (6x) or subtracting constants incorrectly to get x = 1."
    }
  },
  {
    id: "math_alg_4",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "If y = -3, what is the value of 2y² - 5y + 1?",
    options: ["4", "16", "22", "34"],
    correctIndex: 3,
    tutorContent: {
      hint: "Substitute -3 for y in the expression. Keep track of signs, especially when squaring a negative number.",
      explanation: "Substitute y = -3:\n2(-3)² - 5(-3) + 1\n= 2(9) + 15 + 1\n= 18 + 15 + 1 = 34.",
      commonMistake: "Squaring -3 to get -9, which leads to 2(-9) - 15 + 1 = -32, or making a sign error in the middle term."
    }
  },
  {
    id: "math_alg_5",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "Which of the following values makes the inequality 3 - 2x < -5 true?",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    correctIndex: 3,
    tutorContent: {
      hint: "Solve the inequality for x. Remember that dividing or multiplying by a negative flips the inequality sign.",
      explanation: "1. Subtract 3 from both sides: -2x < -8.\n2. Divide by -2 and flip the sign: x > 4.\n3. Among the options, only x = 5 is strictly greater than 4.",
      commonMistake: "Choosing x = 4 because solving -2x < -8 gives 4, but the inequality is strictly greater than 4."
    }
  },
  {
    id: "math_alg_6",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "Simplify the algebraic expression: 3(2a + 4b) - 2(a - 3b).",
    options: ["4a + 18b", "4a + 6b", "8a + 18b", "4a + 15b"],
    correctIndex: 0,
    tutorContent: {
      hint: "Distribute the 3 and the -2 to all terms inside their respective parentheses first, then combine like terms.",
      explanation: "1. Distribute 3: 6a + 12b.\n2. Distribute -2: -2a + 6b (note that -2 * -3b = +6b).\n3. Combine like terms: (6a - 2a) + (12b + 6b) = 4a + 18b.",
      commonMistake: "Distributing -2 to -3b and getting -6b, resulting in 4a + 6b."
    }
  },
  {
    id: "math_alg_7",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "If 5x/6 = 20, what is the value of x?",
    options: ["12", "18", "24", "30"],
    correctIndex: 2,
    tutorContent: {
      hint: "First multiply both sides by 6 to clear the fraction, then divide by 5.",
      explanation: "1. Multiply by 6: 5x = 120.\n2. Divide by 5: x = 24.",
      commonMistake: "Dividing 20 by 6 or multiplying 20 by 5/6 incorrectly."
    }
  },
  {
    id: "math_alg_8",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "Solve the system of equations for y:\nx + y = 10\n2x - y = 8",
    options: ["y = 2", "y = 4", "y = 6", "y = 8"],
    correctIndex: 1,
    tutorContent: {
      hint: "You can use elimination. Add the two equations together to eliminate y, solve for x, and then find y.",
      explanation: "1. Add the equations: (x + y) + (2x - y) = 10 + 8 => 3x = 18 => x = 6.\n2. Substitute x = 6 into first equation: 6 + y = 10 => y = 4.",
      commonMistake: "Solving for x = 6 and choosing option C (6) instead of solving for y."
    }
  },
  {
    id: "math_alg_9",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "Which expression represents 'five less than three times a number n'?",
    options: ["5 - 3n", "3n - 5", "3(n - 5)", "5 < 3n"],
    correctIndex: 1,
    tutorContent: {
      hint: "'Less than' indicates subtraction from a term. 'Five less than X' means X - 5.",
      explanation: "1. 'Three times a number n' is 3n.\n2. 'Five less than' means subtract 5 from that expression: 3n - 5.",
      commonMistake: "Choosing 5 - 3n. Writing the words in their literal order instead of adjusting for the 'less than' phrase."
    }
  },
  {
    id: "math_alg_10",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "If 3(2x - 1) = 15, what is the value of x?",
    options: ["2", "3", "4", "5"],
    correctIndex: 1,
    tutorContent: {
      hint: "Distribute the 3 first, or divide both sides by 3 to simplify the equation.",
      explanation: "Dividing both sides by 3 is faster:\n2x - 1 = 5.\nAdd 1 to both sides: 2x = 6.\nDivide by 2: x = 3.",
      commonMistake: "Forgetting to distribute the 3 to the -1 (e.g. writing 6x - 1 = 15)."
    }
  },
  {
    id: "math_alg_11",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "If a/b = 4 and b/c = 3, what is the value of a/c?",
    options: ["7", "12", "4/3", "3/4"],
    correctIndex: 1,
    tutorContent: {
      hint: "Note that (a/b) * (b/c) = a/c. Multiply the two given fractions.",
      explanation: "Multiply: (a/b) * (b/c) = 4 * 3 = 12.\nThe b's cancel out, leaving a/c = 12.",
      commonMistake: "Adding the fractions (4 + 3 = 7) instead of multiplying."
    }
  },
  {
    id: "math_alg_12",
    category: "Mathematics",
    subcategory: "Algebraic Thinking",
    question: "Find the value of x that makes the expression (x - 2)/4 = (x + 1)/5 true.",
    options: ["x = 10", "x = 12", "x = 14", "x = 16"],
    correctIndex: 2,
    tutorContent: {
      hint: "Cross-multiply to eliminate the denominators: 5(x - 2) = 4(x + 1).",
      explanation: "1. Cross-multiply: 5(x - 2) = 4(x + 1).\n2. Distribute: 5x - 10 = 4x + 4.\n3. Subtract 4x from both sides: x - 10 = 4.\n4. Add 10: x = 14.",
      commonMistake: "Only multiplying the numerator terms by their denominators without distributing (e.g. 5x - 2 = 4x + 1)."
    }
  },

  // --- Subcategory 3: Geometry & Measurement ---
  {
    id: "math_geo_3",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "What is the area of a triangle with a base of 12 cm and a height of 8 cm?",
    options: ["20 cm²", "48 cm²", "96 cm²", "100 cm²"],
    correctIndex: 1,
    tutorContent: {
      hint: "Use the area formula for a triangle: Area = (1/2) * base * height.",
      explanation: "Area = (1/2) * 12 * 8 = 6 * 8 = 48 cm².",
      commonMistake: "Multiplying base times height without dividing by 2 (yielding 96 cm²)."
    }
  },
  {
    id: "math_geo_4",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "A right triangle has legs of length 6 inches and 8 inches. What is the length of the hypotenuse?",
    options: ["10 inches", "12 inches", "14 inches", "20 inches"],
    correctIndex: 0,
    tutorContent: {
      hint: "Use the Pythagorean theorem: a² + b² = c², where c is the hypotenuse.",
      explanation: "6² + 8² = c²\n36 + 64 = c²\n100 = c²\nc = 10 inches.",
      commonMistake: "Adding the legs together (6 + 8 = 14) or calculating arithmetic squares incorrectly."
    }
  },
  {
    id: "math_geo_5",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "What is the circumference of a circle with a radius of 7 cm? (Use 22/7 for π)",
    options: ["22 cm", "44 cm", "154 cm", "198 cm"],
    correctIndex: 1,
    tutorContent: {
      hint: "The formula for the circumference is C = 2πr.",
      explanation: "C = 2 * (22/7) * 7 = 2 * 22 = 44 cm.",
      commonMistake: "Using the area formula (πr² = 154 cm²) instead of the circumference formula."
    }
  },
  {
    id: "math_geo_6",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "The measures of two angles of a triangle are 35° and 85°. What is the measure of the third angle?",
    options: ["50°", "60°", "70°", "80°"],
    correctIndex: 1,
    tutorContent: {
      hint: "Recall that the sum of the angles in any triangle is always 180°.",
      explanation: "Sum of angles: 35° + 85° + x = 180°\n120° + x = 180°\nx = 60°.",
      commonMistake: "Adding 35 and 85 to get 120 and selecting a wrong subtractive value."
    }
  },
  {
    id: "math_geo_7",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "A cube has a volume of 64 cubic inches. What is the surface area of the cube in square inches?",
    options: ["16", "64", "96", "144"],
    correctIndex: 2,
    tutorContent: {
      hint: "First find the side length of the cube. The volume of a cube is s³. Once you have s, surface area is 6 * s².",
      explanation: "1. side³ = 64 => side = 4 inches.\n2. Surface area of one face: 4 * 4 = 16 sq in.\n3. Total surface area (6 faces): 6 * 16 = 96 sq in.",
      commonMistake: "Selecting 64 because the volume and surface area happen to match in magnitude for some shapes, or calculating 4 * side²."
    }
  },
  {
    id: "math_geo_8",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "The length of a rectangle is twice its width. If the area is 72 sq meters, what is the length of the rectangle?",
    options: ["6 meters", "12 meters", "18 meters", "24 meters"],
    correctIndex: 1,
    tutorContent: {
      hint: "Let width be w. Length is 2w. Area is w * 2w = 2w² = 72.",
      explanation: "2w² = 72 => w² = 36 => w = 6 meters.\nSince w = 6, length = 2w = 12 meters.",
      commonMistake: "Choosing w = 6 (the width) instead of the length (12)."
    }
  },
  {
    id: "math_geo_9",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "In coordinate geometry, what is the distance between points (1, 2) and (4, 6)?",
    options: ["3", "4", "5", "7"],
    correctIndex: 2,
    tutorContent: {
      hint: "Use the distance formula: d = √((x₂ - x₁)² + (y₂ - y₁)²).",
      explanation: "d = √((4 - 1)² + (6 - 2)²)\nd = √(3² + 4²) = √(9 + 16) = √25 = 5.",
      commonMistake: "Adding the coordinates directly or subtracting in the wrong order."
    }
  },
  {
    id: "math_geo_10",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "An isosceles triangle has two sides of length 10 cm and a base of 12 cm. What is the area of the triangle?",
    options: ["48 cm²", "60 cm²", "96 cm²", "120 cm²"],
    correctIndex: 0,
    tutorContent: {
      hint: "Draw an altitude from the vertex to the base. This splits the base in half (6 cm each) and creates two right triangles.",
      explanation: "1. Half-base is 6 cm. Legs of right triangle are 6 and altitude (h), hypotenuse is 10.\n2. By Pythagorean theorem: 6² + h² = 10² => 36 + h² = 100 => h = 8 cm.\n3. Find area: Area = (1/2) * base * height = (1/2) * 12 * 8 = 48 cm².",
      commonMistake: "Using 10 as the height (Area = 1/2 * 12 * 10 = 60 cm²), which is incorrect because the side length is slanted."
    }
  },
  {
    id: "math_geo_11",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "What is the sum of the interior angles of a hexagon (6-sided polygon)?",
    options: ["360°", "540°", "720°", "900°"],
    correctIndex: 2,
    tutorContent: {
      hint: "Use the formula for the sum of interior angles: Sum = (n - 2) * 180°, where n is the number of sides.",
      explanation: "n = 6.\nSum = (6 - 2) * 180° = 4 * 180° = 720°.",
      commonMistake: "Choosing 360° (which is the sum of exterior angles for any polygon, or the interior angles of a quadrilateral)."
    }
  },
  {
    id: "math_geo_12",
    category: "Mathematics",
    subcategory: "Geometry & Measurement",
    question: "A cylinder has a radius of 3 cm and a height of 10 cm. What is its volume? (Leave in terms of π)",
    options: ["30π cm³", "60π cm³", "90π cm³", "120π cm³"],
    correctIndex: 2,
    tutorContent: {
      hint: "The volume formula for a cylinder is V = πr²h.",
      explanation: "V = π * 3² * 10 = π * 9 * 10 = 90π cm³.",
      commonMistake: "Forgetting to square the radius (using V = πrh = 30π)."
    }
  },

  // --- Subcategory 4: Data & Probability ---
  {
    id: "math_data_1",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "What is the median of the following set of scores: 18, 12, 24, 15, 21, 14, 19?",
    options: ["15", "18", "19", "21"],
    correctIndex: 1,
    tutorContent: {
      hint: "To find the median, first arrange the numbers in ascending order and find the middle number.",
      explanation: "1. Order the list: 12, 14, 15, 18, 19, 21, 24.\n2. Since there are 7 numbers, the 4th number is the middle: 18.",
      commonMistake: "Choosing the middle number in the original unordered list (which would be 15)."
    }
  },
  {
    id: "math_data_2",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "A box contains 3 green, 4 blue, and 5 yellow markers. If one marker is chosen at random, what is the probability it is blue?",
    options: ["1/4", "1/3", "5/12", "7/12"],
    correctIndex: 1,
    tutorContent: {
      hint: "Probability is the number of target outcomes divided by the total number of outcomes.",
      explanation: "1. Total markers: 3 + 4 + 5 = 12.\n2. Blue markers: 4.\n3. Probability: 4 / 12 = 1 / 3.",
      commonMistake: "Writing the probability as 4/8 (blue vs non-blue ratio) instead of blue out of total."
    }
  },
  {
    id: "math_data_3",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "The mean of five numbers is 12. If four of the numbers are 8, 15, 10, and 14, what is the fifth number?",
    options: ["11", "12", "13", "15"],
    correctIndex: 2,
    tutorContent: {
      hint: "Since the mean of 5 numbers is 12, the sum of all 5 numbers must be 5 * 12 = 60.",
      explanation: "1. Total sum required: 5 * 12 = 60.\n2. Sum of the four known numbers: 8 + 15 + 10 + 14 = 47.\n3. Fifth number: 60 - 47 = 13.",
      commonMistake: "Assuming the fifth number must be 12 (matching the mean)."
    }
  },
  {
    id: "math_data_4",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "You roll a standard six-sided die twice. What is the probability of rolling a 4 on both rolls?",
    options: ["1/6", "1/12", "1/18", "1/36"],
    correctIndex: 3,
    tutorContent: {
      hint: "For independent events, multiply the probability of the first event by the probability of the second event.",
      explanation: "1. Probability of a 4 on roll 1: 1/6.\n2. Probability of a 4 on roll 2: 1/6.\n3. Total probability: 1/6 * 1/6 = 1/36.",
      commonMistake: "Adding the probabilities (1/6 + 1/6 = 2/6 = 1/3)."
    }
  },
  {
    id: "math_data_5",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "If the range of a set of numbers is 22 and the smallest number in the set is 9, what is the largest number in the set?",
    options: ["13", "22", "31", "40"],
    correctIndex: 2,
    tutorContent: {
      hint: "Recall that Range = Largest Value - Smallest Value.",
      explanation: "Range = Max - Min => 22 = Max - 9 => Max = 22 + 9 = 31.",
      commonMistake: "Subtracting 9 from 22 to get 13."
    }
  },
  {
    id: "math_data_6",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "A spinner is divided into 8 equal sections numbered 1 through 8. What is the probability of spinning a prime number?",
    options: ["1/4", "3/8", "1/2", "5/8"],
    correctIndex: 2,
    tutorContent: {
      hint: "Identify all the prime numbers between 1 and 8. Note: 1 is not a prime number.",
      explanation: "1. Primes between 1 and 8: 2, 3, 5, 7 (total of 4 numbers).\n2. Total sections: 8.\n3. Probability: 4 / 8 = 1 / 2.",
      commonMistake: "Including 1 as a prime number, yielding 5/8."
    }
  },
  {
    id: "math_data_7",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "The following list shows student heights: 140, 142, 140, 145, 148, 140, 142. What is the mode of these heights?",
    options: ["140", "142", "143", "145"],
    correctIndex: 0,
    tutorContent: {
      hint: "The mode is the number that occurs most frequently in the data set.",
      explanation: "Frequency count:\n- 140: 3 times\n- 142: 2 times\n- 145: 1 time\n- 148: 1 time\n140 is the mode.",
      commonMistake: "Confusing mode with median or mean."
    }
  },
  {
    id: "math_data_8",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "If a coin is flipped 3 times, what is the probability of getting exactly 2 heads and 1 tail?",
    options: ["1/8", "3/8", "1/2", "3/4"],
    correctIndex: 1,
    tutorContent: {
      hint: "List the entire sample space of 8 possible outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.",
      explanation: "1. Total outcomes = 8.\n2. Outcomes with exactly 2 heads: HHT, HTH, THH (3 outcomes).\n3. Probability: 3/8.",
      commonMistake: "Assuming it's 1/2 because each flip is 1/2, or selecting 1/8."
    }
  },
  {
    id: "math_data_9",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "A student scored 80, 85, and 90 on their first three exams. What score do they need on the fourth exam to have a mean score of 87?",
    options: ["91", "93", "95", "97"],
    correctIndex: 1,
    tutorContent: {
      hint: "Set up the average equation: (80 + 85 + 90 + x) / 4 = 87.",
      explanation: "1. Sum needed: 4 * 87 = 348.\n2. Sum of current exams: 80 + 85 + 90 = 255.\n3. Score needed: 348 - 255 = 93.",
      commonMistake: "Guessing a number near 90 without doing the summation logic."
    }
  },
  {
    id: "math_data_10",
    category: "Mathematics",
    subcategory: "Data & Probability",
    question: "A bag contains 6 red cards and 4 black cards. If you draw two cards without replacement, what is the probability that both are red?",
    options: ["1/3", "9/25", "1/2", "1/15"],
    correctIndex: 0,
    tutorContent: {
      hint: "Calculate the probability of drawing a red card first. Then, update the card counts for the second draw.",
      explanation: "1. First draw: 6 red out of 10 total = 6/10 = 3/5.\n2. Second draw (no replacement): 5 red out of 9 total = 5/9.\n3. Multiply: (6/10) * (5/9) = 30/90 = 1/3.",
      commonMistake: "Calculating with replacement (6/10 * 6/10 = 36/100 = 9/25)."
    }
  },

  // --- Subcategory 5: Quantitative Word Problems ---
  {
    id: "math_word_3",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "A runner covers 6 miles in 45 minutes. What is their average speed in miles per hour?",
    options: ["6 mph", "8 mph", "9 mph", "10 mph"],
    correctIndex: 1,
    tutorContent: {
      hint: "Convert 45 minutes to hours. 45 minutes is 45/60 = 0.75 hours (or 3/4 of an hour).",
      explanation: "Speed = Distance / Time\nSpeed = 6 miles / (0.75 hours) = 8 mph.",
      commonMistake: "Dividing 45 by 6, yielding 7.5, which is not correct since time must be in hours."
    }
  },
  {
    id: "math_word_4",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "In a class, the ratio of boys to girls is 3:5. If there are 32 students in total, how many girls are in the class?",
    options: ["12", "15", "20", "24"],
    correctIndex: 2,
    tutorContent: {
      hint: "A ratio of 3:5 means there are 3 parts boys and 5 parts girls, for a total of 8 parts.",
      explanation: "1. 3 + 5 = 8 parts.\n2. Divide total students by parts: 32 / 8 = 4 students per part.\n3. Girls = 5 parts * 4 = 20 girls.",
      commonMistake: "Finding the number of boys (3 parts * 4 = 12) and selecting it instead of the number of girls."
    }
  },
  {
    id: "math_word_5",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "Machine A can print 100 shirts in 2 hours, and Machine B can print 100 shirts in 3 hours. How many hours will it take both machines working together to print 100 shirts?",
    options: ["1.2 hours", "1.5 hours", "2.5 hours", "5 hours"],
    correctIndex: 0,
    tutorContent: {
      hint: "Find the work rates of both machines. Machine A prints 50 shirts/hr. Machine B prints 33.3 shirts/hr.",
      explanation: "1. Rate of A = 1/2 of the job per hour.\n2. Rate of B = 1/3 of the job per hour.\n3. Combined rate = 1/2 + 1/3 = 5/6 of the job per hour.\n4. Time for 1 job: 1 / (5/6) = 6/5 = 1.2 hours.",
      commonMistake: "Adding the times together (2 + 3 = 5 hours) or averaging them (2.5 hours)."
    }
  },
  {
    id: "math_word_6",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "An electronics store sells a laptop for $450. If this price represents a 25% markup over the wholesale cost, what was the wholesale cost of the laptop?",
    options: ["$337.50", "$360", "$375", "$400"],
    correctIndex: 1,
    tutorContent: {
      hint: "Let wholesale cost be C. The selling price is C + 0.25C = 1.25C = 450.",
      explanation: "1.25 * C = 450\nC = 450 / 1.25\nC = 360.",
      commonMistake: "Calculating 25% of $450 ($112.50) and subtracting it from $450 to get $337.50. Markups are calculated relative to the wholesale cost, not the final price."
    }
  },
  {
    id: "math_word_7",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "A piggy bank contains 30 coins, consisting only of dimes ($0.10) and quarters ($0.25). If the total value of the coins is $5.10, how many quarters are in the bank?",
    options: ["10", "12", "14", "16"],
    correctIndex: 2,
    tutorContent: {
      hint: "Set up a system of equations: d + q = 30 and 10d + 25q = 510.",
      explanation: "1. Let d be dimes, q be quarters: d = 30 - q.\n2. Value equation: 10(30 - q) + 25q = 510\n3. 300 - 10q + 25q = 510\n4. 15q = 210\n5. q = 14. There are 14 quarters.",
      commonMistake: "Assuming there are 15 of each coin, which would total only $5.25."
    }
  },
  {
    id: "math_word_8",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "A worker earns $15 per hour for the first 40 hours worked in a week, and 'time-and-a-half' ($22.50) for any hours over 40. If they earned $690 last week, how many total hours did they work?",
    options: ["44", "45", "46", "48"],
    correctIndex: 1,
    tutorContent: {
      hint: "First find the base earnings for the first 40 hours, subtract that from the total, and solve for overtime hours.",
      explanation: "1. Base pay: 40 hours * $15/hr = $600.\n2. Overtime earnings: $690 - $600 = $90.\n3. Overtime hours: $90 / $22.50/hr = 4 hours.\n4. Total hours: 40 + 4 = 44 hours.",
      commonMistake: "Dividing the entire $690 by $15 to get 46 hours."
    }
  },
  {
    id: "math_word_9",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "Two positive numbers have a difference of 4 and a product of 45. What is the sum of these two numbers?",
    options: ["12", "14", "16", "18"],
    correctIndex: 1,
    tutorContent: {
      hint: "Let the numbers be x and y. x - y = 4 and x * y = 45. Find factors of 45 whose difference is 4.",
      explanation: "Factors of 45 are: (1, 45), (3, 15), (5, 9).\nThe pair (5, 9) has a difference of 4.\nSum = 9 + 5 = 14.",
      commonMistake: "Choosing 9 or 5 directly, or calculating the product wrong."
    }
  },
  {
    id: "math_word_10",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "A pool is filled by a pipe at a rate of 120 gallons per hour. If the pool holds 1,800 gallons and is already 20% full, how many hours will it take to fill the rest of the pool?",
    options: ["10 hours", "12 hours", "15 hours", "18 hours"],
    correctIndex: 1,
    tutorContent: {
      hint: "First find how many gallons are left to fill. The pool is 80% empty.",
      explanation: "1. Gallons left: 1,800 * 0.80 = 1,440 gallons.\n2. Time: 1,440 / 120 = 12 hours.",
      commonMistake: "Calculating the time to fill the entire pool: 1,800 / 120 = 15 hours, ignoring that it is already 20% full."
    }
  },
  {
    id: "math_word_11",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "If 4 workers can build a fence in 3 days, how many days would it take 6 workers to build the same fence, assuming they all work at the same rate?",
    options: ["2 days", "3 days", "4.5 days", "6 days"],
    correctIndex: 0,
    tutorContent: {
      hint: "This is an inverse relationship. More workers mean fewer days. Work = workers * days.",
      explanation: "1. Total work needed = 4 workers * 3 days = 12 worker-days.\n2. For 6 workers: 12 worker-days / 6 workers = 2 days.",
      commonMistake: "Setting up a direct proportion (4/3 = 6/x => x = 4.5 days), which would mean more workers take longer, which makes no sense."
    }
  },
  {
    id: "math_word_12",
    category: "Mathematics",
    subcategory: "Quantitative Word Problems",
    question: "A recipe requires 2 cups of sugar for every 3 cups of flour. If a baker uses 12 cups of flour, how many cups of sugar do they need?",
    options: ["6", "8", "9", "18"],
    correctIndex: 1,
    tutorContent: {
      hint: "Set up a proportion: Sugar/Flour = 2/3 = S/12.",
      explanation: "2/3 = S/12\n3S = 24\nS = 8 cups.",
      commonMistake: "Inverting the ratio and getting 18 cups."
    }
  },

  // ==========================================
  // READING
  // ==========================================

  // --- Subcategory 6: Key Ideas & Details ---
  {
    id: "read_key_1",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "NASA's Voyager 1 spacecraft, launched in 1977, was designed to study the outer planets. However, it surpassed all expectations when it crossed the heliopause in 2012, becoming the first human-made object to enter interstellar space. Voyager 1 continues to transmit data back to Earth, though its electrical power is expected to run out completely by 2030.",
    question: "According to the passage, what major milestone did Voyager 1 achieve in 2012?",
    options: [
      "It was launched into Earth's orbit.",
      "It completed its study of Jupiter and Saturn.",
      "It became the first human-made object to enter interstellar space.",
      "Its electrical power ran out completely."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Look for the specific event tied to the date 2012 in the passage text.",
      explanation: "The text states that Voyager 1 'crossed the heliopause in 2012, becoming the first human-made object to enter interstellar space.'",
      commonMistake: "Choosing Option 4, but the text states power is expected to run out by 2030, not 2012."
    }
  },
  {
    id: "read_key_2",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "The green iguana is an invasive species in Florida. Originally imported as pets, many escaped or were released into the wild. Because Florida's warm climate is ideal for them and they have no natural predators there, their populations have boomed, causing extensive damage to native vegetation and infrastructure.",
    question: "Based on the passage, why did the green iguana population grow so rapidly in Florida?",
    options: [
      "They were deliberately bred by state wildlife agencies.",
      "They adapted to cold weather conditions.",
      "Florida has a warm climate and they lack natural predators there.",
      "They feed exclusively on agricultural insects."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Search the text for causes of the iguana population boom.",
      explanation: "The passage notes that 'Florida's warm climate is ideal for them and they have no natural predators there,' which caused their populations to boom.",
      commonMistake: "Selecting B, but the text mentions Florida's warm climate, not an adaptation to cold."
    }
  },
  {
    id: "read_key_3",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "The Great Barrier Reef, located off the coast of Queensland, Australia, is the world's largest coral reef system. It is composed of over 2,900 individual reefs and 900 islands. In recent years, rising ocean temperatures have caused mass coral bleaching events, threatening the structural integrity and biodiversity of this vital ecosystem.",
    question: "What is the primary threat to the Great Barrier Reef mentioned in the passage?",
    options: [
      "Increased tourism and shipping traffic.",
      "Invasive marine predators.",
      "Rising ocean temperatures causing coral bleaching.",
      "Chemical runoff from agricultural fields."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Locate the sentence beginning with 'In recent years...' to find the threat described.",
      explanation: "The text says 'rising ocean temperatures have caused mass coral bleaching events, threatening the structural integrity...'",
      commonMistake: "Selecting options like tourism or chemicals which might be threats in real life, but are not mentioned in this specific text."
    }
  },
  {
    id: "read_key_4",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "Fungi are distinct from plants in that they do not produce their own food through photosynthesis. Instead, they secrete enzymes to break down organic matter in their surroundings and absorb the nutrients. This makes them crucial decomposers in many forest ecosystems.",
    question: "According to the passage, how do fungi obtain nutrients?",
    options: [
      "By absorbing sunlight through photosynthesis.",
      "By consuming insects and small invertebrates.",
      "By secreting enzymes to decompose organic matter.",
      "By absorbing mineral nutrients directly from rainwater."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Look for the sentence detailing how fungi get food instead of using photosynthesis.",
      explanation: "The text states: 'Instead, they secrete enzymes to break down organic matter in their surroundings and absorb the nutrients.'",
      commonMistake: "Choosing Option 1, which the text explicitly states is a trait of plants, not fungi."
    }
  },
  {
    id: "read_key_5",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "The Code of Hammurabi, created around 1750 BCE in ancient Babylon, is one of the earliest written legal codes in history. Engraved on a giant black stone stele, it contains 282 laws detailing standards for commerce, property rights, and family disputes, famously establishing the principle of 'an eye for an eye.'",
    question: "Which of the following is true of the Code of Hammurabi according to the text?",
    options: [
      "It was discovered in ancient Rome.",
      "It contains exactly 100 laws.",
      "It is one of the earliest written legal codes in history.",
      "It banned all forms of commercial trade."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Compare each option directly with the facts stated in the passage.",
      explanation: "The text explicitly states that the Code of Hammurabi 'is one of the earliest written legal codes in history.'",
      commonMistake: "Selecting B, but the text says it has 282 laws, not 100."
    }
  },
  {
    id: "read_key_6",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "In 1928, Alexander Fleming noticed that a mold named Penicillium notatum had contaminated a petri dish of bacteria. He observed that the bacteria immediately surrounding the mold had been destroyed. This accidental discovery led directly to the development of penicillin, the world's first modern antibiotic.",
    question: "What did Alexander Fleming observe in his petri dish that led to the discovery of penicillin?",
    options: [
      "The bacteria had grown resistant to the mold.",
      "The mold had turned into a chemical liquid.",
      "Bacteria immediately surrounding the mold had been destroyed.",
      "The mold was reproducing faster than the bacteria."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Locate the sentence detailing Fleming's specific observation about the bacteria near the mold.",
      explanation: "The text states: 'He observed that the bacteria immediately surrounding the mold had been destroyed.'",
      commonMistake: "Choosing A, which describes bacterial resistance, whereas Fleming observed the destruction of the bacteria."
    }
  },
  {
    id: "read_key_7",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "The construction of the Transcontinental Railroad in the 1860s transformed the United States. It connected the Atlantic and Pacific coasts, reducing travel times across the continent from months to under a week. While it stimulated economic growth, it also led to the rapid displacement of Native American tribes.",
    question: "According to the passage, what was a major transportation impact of the Transcontinental Railroad?",
    options: [
      "It halted all shipping traffic along rivers.",
      "It reduced cross-country travel time from months to under a week.",
      "It made train travel free for all citizens.",
      "It caused a decline in trade between the US and Europe."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Focus on the sentences describing the physical impact on travel or transit times.",
      explanation: "The text explicitly notes it was 'reducing travel times across the continent from months to under a week.'",
      commonMistake: "Choosing trade with Europe, which is not mentioned in the passage."
    }
  },
  {
    id: "read_key_8",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "Unlike most mammals, platypuses do not give birth to live young. Instead, they are monotremes, meaning they lay eggs. After the eggs hatch, the female platypus secretes milk from specialized sweat glands on her abdomen for the young to lap up, as they do not have teats.",
    question: "According to the passage, what makes the platypus reproductive process unusual for mammals?",
    options: [
      "They lay eggs instead of giving birth to live young.",
      "They do not nurse their young with milk.",
      "They give birth to fully independent offspring.",
      "They carry their young in external abdominal pouches."
    ],
    correctIndex: 0,
    tutorContent: {
      hint: "Look at the first two sentences explaining how platypuses differ from other mammals.",
      explanation: "The text states: 'Unlike most mammals, platypuses do not give birth to live young. Instead, they are monotremes, meaning they lay eggs.'",
      commonMistake: "Choosing B, but they do nurse their young; they just secrete milk from sweat glands rather than teats."
    }
  },
  {
    id: "read_key_9",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "The Rosetta Stone, discovered in Egypt in 1799, was key to deciphering ancient Egyptian hieroglyphs. It featured a decree written in three scripts: Hieroglyphic, Demotic, and Ancient Greek. Because scholars could read the Greek text, they were able to compare it to the hieroglyphs and decode the language.",
    question: "Why was the Rosetta Stone so useful for deciphering hieroglyphs?",
    options: [
      "It was written entirely in ancient codes.",
      "It contained a bilingual dictionary of Egypt.",
      "It featured the same decree written in three different scripts, including Ancient Greek.",
      "It explained the rules of grammar in simple terms."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Look at the explanation of why scholars were able to use the Greek text to decode the stone.",
      explanation: "The text explains it 'featured a decree written in three scripts... Because scholars could read the Greek text, they were able to compare it to the hieroglyphs...'",
      commonMistake: "Choosing B. While it functioned conceptually like a key, it was a single decree in three scripts, not a formal dictionary."
    }
  },
  {
    id: "read_key_10",
    category: "Reading",
    subcategory: "Key Ideas & Details",
    passage: "Solar panels convert sunlight into electricity using photovoltaic cells. When sunlight hits the semiconductor material in the cells, it knocks electrons loose, creating an electric current. This direct current (DC) is then converted into alternating current (AC) by an inverter for home use.",
    question: "According to the passage, what is the role of an inverter in a solar power system?",
    options: [
      "It stores excess electricity for nighttime use.",
      "It knocks electrons loose using thermal heat.",
      "It converts direct current (DC) into alternating current (AC).",
      "It tracks the movement of the sun across the sky."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Locate the word 'inverter' in the text and identify the action linked to it.",
      explanation: "The text states: 'This direct current (DC) is then converted into alternating current (AC) by an inverter...'",
      commonMistake: "Selecting A (battery storage), which is a common component but not the function of the inverter described in the text."
    }
  },

  // --- Subcategory 7: Vocabulary in Context ---
  {
    id: "read_voc_3",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "Although the manager tried to appear confident, her erratic decisions during the crisis revealed her growing panic.",
    question: "As used in the sentence, the word 'erratic' most nearly means:",
    options: ["Bold and decisive", "Unpredictable and inconsistent", "Slow and deliberate", "Highly cooperative"],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the context: the erratic decisions are paired with 'growing panic,' implying they lacked order or consistency.",
      explanation: "Erratic means lacking a regular course or pattern; unpredictable. Inconsistent decisions are typical of panic.",
      commonMistake: "Choosing C. Panic usually causes fast, unstable behavior, not slow and deliberate choices."
    }
  },
  {
    id: "read_voc_4",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "The editor cut several paragraphs from the manuscript, advising the author that the text was too redundant.",
    question: "As used in the sentence, the word 'redundant' most nearly means:",
    options: ["Stylistically creative", "Unnecessarily repetitive", "Factually inaccurate", "Difficult to read"],
    correctIndex: 1,
    tutorContent: {
      hint: "Why would an editor cut paragraphs? The author is told they are 'redundant,' which suggests they repeat information already stated.",
      explanation: "Redundant means exceeding what is necessary or natural; superfluous, especially by repetition.",
      commonMistake: "Choosing C, but editors cut repetitive text even if it is completely factually accurate."
    }
  },
  {
    id: "read_voc_5",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "The defense attorney argued that the prosecution's evidence was purely circumstantial, lacking any direct link to the suspect.",
    question: "As used in the sentence, the word 'circumstantial' most nearly means:",
    options: ["Incontrovertible", "Detailed and thorough", "Indirect and inferential", "Scientifically proven"],
    correctIndex: 2,
    tutorContent: {
      hint: "Look at the contrast: 'lacking any direct link to the suspect'. This implies the evidence is indirect.",
      explanation: "Circumstantial evidence is evidence that points to a fact indirectly by inference, rather than proving it directly.",
      commonMistake: "Choosing A. Incontrovertible means indisputable, which is the opposite of circumstantial evidence."
    }
  },
  {
    id: "read_voc_6",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "Rather than taking sides, the mediator remained completely objective, listening patiently to both parties.",
    question: "As used in the sentence, the word 'objective' most nearly means:",
    options: ["Biased", "Unbiased and impartial", "Hostile", "Indifferent"],
    correctIndex: 1,
    tutorContent: {
      hint: "The mediator did not 'take sides' and listened to 'both parties,' indicating fairness.",
      explanation: "Objective means not influenced by personal feelings or opinions; representing facts. This equates to being unbiased.",
      commonMistake: "Choosing D (indifferent). An indifferent person doesn't care, whereas an objective mediator care about fairness without bias."
    }
  },
  {
    id: "read_voc_7",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "The team's win was transitory; they lost the very next game and were eliminated from the tournament.",
    question: "As used in the sentence, the word 'transitory' most nearly means:",
    options: ["Long-lasting", "Temporary and brief", "Historical", "Unexpected"],
    correctIndex: 1,
    tutorContent: {
      hint: "They won, but 'lost the very next game,' which shows their joy or status as winners did not last long.",
      explanation: "Transitory means not permanent; brief or temporary.",
      commonMistake: "Choosing D. While losing might be disappointing, the context specifically contrasts the win with its brief duration before the loss."
    }
  },
  {
    id: "read_voc_8",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "The old steam engine was obsolete, replaced by modern electric trains that were twice as fast and far cleaner.",
    question: "As used in the sentence, the word 'obsolete' most nearly means:",
    options: ["Out of date and no longer useful", "Highly efficient", "Dangerous to operate", "Valuable and rare"],
    correctIndex: 0,
    tutorContent: {
      hint: "It was 'replaced by modern' technology, indicating it was outdated.",
      explanation: "Obsolete means no longer produced or used; out of date.",
      commonMistake: "Choosing C. Obsolete things may be safe, they are just outdated and inefficient compared to modern replacements."
    }
  },
  {
    id: "read_voc_9",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "The new laws were designed to mitigate the effects of inflation by providing subsidies to low-income families.",
    question: "As used in the sentence, the word 'mitigate' most nearly means:",
    options: ["Increase or accelerate", "Make less severe", "Ignore completely", "Investigate"],
    correctIndex: 1,
    tutorContent: {
      hint: "How would subsidies affect the pain of inflation? They make the financial burden lighter or less severe.",
      explanation: "Mitigate means to make less severe, serious, or painful.",
      commonMistake: "Choosing A. Mitigate is the opposite of aggravate or increase."
    }
  },
  {
    id: "read_voc_10",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "Her meticulous notes during the lecture helped her score a perfect mark on the final exam.",
    question: "As used in the sentence, the word 'meticulous' most nearly means:",
    options: ["Sloppy and careless", "Extremely precise and detailed", "Short and summarized", "Confusing"],
    correctIndex: 1,
    tutorContent: {
      hint: "Meticulous notes led to a 'perfect mark.' This suggests they were very thorough and carefully written.",
      explanation: "Meticulous means showing great attention to detail; very careful and precise.",
      commonMistake: "Choosing C. Summarized notes can be good, but meticulous refers specifically to precision and care."
    }
  },
  {
    id: "read_voc_11",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "His response was ambiguous; we could not tell if he was agreeing to join the committee or declining.",
    question: "As used in the sentence, the word 'ambiguous' most nearly means:",
    options: ["Clear and obvious", "Unclear or open to multiple interpretations", "Rude and offensive", "Enthusiastic"],
    correctIndex: 1,
    tutorContent: {
      hint: "If they 'could not tell' if he was agreeing or declining, his statement was not clear and had multiple possible meanings.",
      explanation: "Ambiguous means open to more than one interpretation; having a double meaning.",
      commonMistake: "Choosing A, which is the antonym (opposite) of ambiguous."
    }
  },
  {
    id: "read_voc_12",
    category: "Reading",
    subcategory: "Vocabulary in Context",
    passage: "The volcano had been dormant for centuries, but scientists warned that it was beginning to show signs of activity.",
    question: "As used in the sentence, the word 'dormant' most nearly means:",
    options: ["Explosive", "Inactive or asleep", "Visible", "Extinct"],
    correctIndex: 1,
    tutorContent: {
      hint: "It was dormant 'for centuries' but is now 'beginning to show signs of activity'. This implies it was resting or inactive.",
      explanation: "Dormant means having normal physical functions suspended or slowed down for a period; temporarily inactive.",
      commonMistake: "Choosing D (extinct). An extinct volcano will never erupt again, whereas a dormant one is just sleeping."
    }
  },

  // --- Subcategory 8: Craft, Style & Tone ---
  {
    id: "read_craft_1",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "The old library was a sanctuary. Outside its thick stone walls, the city roared with traffic, construction, and the constant hum of sirens. But inside, the air was cool and still, smelling of aged paper and leather bindings. The only sound was the occasional, comforting rustle of a turning page.",
    question: "How does the author create a contrast between the library and the city?",
    options: [
      "By explaining the rules of the library.",
      "By comparing the costs of living in the city.",
      "By using loud auditory details for the outside and quiet, sensory details for the inside.",
      "By describing the library's catalog system."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Look at the words describing the city (roared, hum of sirens) vs the library (cool, still, aged paper, rustle of a page).",
      explanation: "The author contrasts the noisy city ('roared', 'hum of sirens') with the sensory quiet of the library ('cool and still', 'smelling of aged paper', 'rustle of a turning page').",
      commonMistake: "Choosing A. While the library is quiet, no library rules are actually discussed in the passage."
    }
  },
  {
    id: "read_craft_2",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "Electric vehicles are often promoted as the ultimate green technology. However, we must consider the environmental impact of mining lithium and cobalt for their batteries. If the electricity grid powering these cars relies on burning coal, we are simply shifting the location of greenhouse emissions rather than eliminating them.",
    question: "What is the author's primary purpose in writing this passage?",
    options: [
      "To encourage readers to purchase electric cars.",
      "To explain the chemical composition of lithium-ion batteries.",
      "To urge a more critical, balanced evaluation of electric vehicles' environmental benefits.",
      "To advocate for the reopening of coal-fired power plants."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Look at the word 'However' and the critique about mining and the grid. The author wants to temper the 'ultimate green' hype.",
      explanation: "The author points out hidden environmental costs of electric vehicles, urging readers to look beyond the basic promotional claims and evaluate their total lifecycle impact.",
      commonMistake: "Choosing D. The author mentions coal as a negative factor, not to support it, but to show that coal-reliant grids weaken the benefits of EVs."
    }
  },
  {
    id: "read_craft_3",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "Look at those birds! They soar on the thermal currents like tiny paper airplanes caught in a gentle summer breeze. Their flight is effortless, a beautiful dance across the sky.",
    question: "The author's tone in this passage can best be described as:",
    options: ["Scientific and analytical", "Anxious and fearful", "Admiring and poetic", "Sarcastic and mocking"],
    correctIndex: 2,
    tutorContent: {
      hint: "Look at the words the author uses: 'soar', 'gentle summer breeze', 'effortless', 'beautiful dance'.",
      explanation: "The author uses romantic imagery ('tiny paper airplanes', 'beautiful dance') and words expressing appreciation, creating a poetic, admiring tone.",
      commonMistake: "Choosing A. There are no scientific terms, metrics, or biological explanations here, so it is not analytical."
    }
  },
  {
    id: "read_craft_4",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "The introduction of smartphones has turned us into digital ghosts. We sit at dinner tables staring at screens, exchanging face-to-face conversation for social media updates. We are physically present, yet entirely absent, connected to the world but isolated from the people sitting right next to us.",
    question: "What is the function of the phrase 'digital ghosts' in the passage?",
    options: [
      "To describe a new technology trend in filmmaking.",
      "To emphasize the loss of real, present human connection due to device use.",
      "To explain how cellular networks transmit data.",
      "To suggest that phone screens cause physical eye strain."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the context immediately following the phrase: staring at screens, physically present but absent, connected but isolated.",
      explanation: "The metaphor 'digital ghosts' highlights how phone users are physically there but mentally absent, losing connection with real life.",
      commonMistake: "Selecting D. While eye strain is a screen issue, it is not what 'digital ghosts' refers to in this paragraph."
    }
  },
  {
    id: "read_craft_5",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "For decades, space exploration was driven by national pride and military competition between superpowers. Today, however, a new era has emerged. Private companies now launch satellites, shuttle astronauts, and plan future mars missions. The driving force is no longer just political prestige, but economic opportunity and commercial enterprise.",
    question: "How does the author structure the information in this passage?",
    options: [
      "By listing the steps to become an astronaut.",
      "By comparing the costs of launching different satellites.",
      "By contrasting the historical motivations for space travel with modern commercial motivations.",
      "By presenting the biography of a space flight pioneer."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Look at the time indicators: 'For decades...' vs 'Today, however...'. What changes between these periods?",
      explanation: "The author structures the text chronologically, contrasting the old government-led, nationalistic space race with the modern, private commercial space era.",
      commonMistake: "Selecting B, as the text mentions commercial enterprise but does not compare specific numbers or costs."
    }
  },
  {
    id: "read_craft_6",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "We must act now to save the local wetlands. These marshes are not useless swamps; they are nature's sponge, absorbing floodwaters and filtering pollutants before they reach our drinking supply. If we allow developers to pave over them, we invite environmental disaster upon our community.",
    question: "The author's tone in this passage is best described as:",
    options: ["Objective and detached", "Urgent and persuasive", "Nostalgic and wistful", "Humorous and lighthearted"],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the call to action: 'We must act now', and the warning: 'we invite environmental disaster'.",
      explanation: "The author uses strong, emotional appeal and warnings ('must act now', 'environmental disaster') to persuade the audience, creating an urgent tone.",
      commonMistake: "Choosing A. The author is deeply invested and taking a strong side, which is the opposite of objective or detached."
    }
  },
  {
    id: "read_craft_7",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "The clock on the wall ticked loudly, each strike sounding like a heavy hammer falling on iron. Maria stared at the exam paper. The letters swam before her eyes, blurring into a dark, incomprehensible fog. The temperature in the room had plummeted, leaving her hands stiff and trembling.",
    question: "How does the author use figurative language and sensory details to convey Maria's state of mind?",
    options: [
      "To show she is calm and prepared for the test.",
      "To build a sense of anxiety and stress during the exam.",
      "To explain the physics of sound and temperature.",
      "To describe the architectural layout of the classroom."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the analogies: clock ticking like a 'heavy hammer', letters 'swimming' and 'blurring', hands 'stiff and trembling'. Do these feel peaceful or stressful?",
      explanation: "The author uses oppressive sensory details and metaphors to illustrate Maria's test anxiety and rising panic.",
      commonMistake: "Choosing C. Although temperature and sound are mentioned, they are used as literary metaphors, not for scientific explanation."
    }
  },
  {
    id: "read_craft_8",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "Classical music is often viewed as an elite art form, locked away in concert halls for wealthy audiences. However, this perception ignores its roots. Many classical pieces were inspired by simple folk dances and street songs, written not to exclude the masses, but to capture the vibrant spirit of everyday life.",
    question: "What is the author's primary goal in this passage?",
    options: [
      "To criticize wealthy patrons of the arts.",
      "To explain the rules of composing classical symphonies.",
      "To challenge the idea that classical music is inherently exclusive or elite.",
      "To argue that folk music is superior to classical music."
    ],
    correctIndex: 2,
    tutorContent: {
      hint: "Look at the sentence starting with 'However, this perception ignores...'. The author is refuting the elite stereotype.",
      explanation: "The author argues against the stereotype of classical music by highlighting its humble, folk-inspired origins.",
      commonMistake: "Choosing A. The author mentions wealthy audiences to describe a perception, not to launch a critique against them."
    }
  },
  {
    id: "read_craft_9",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "The novel's plot is a labyrinth, winding through secret histories, false leads, and unexpected alliances. Readers who enjoy a straightforward story will likely find themselves lost, but those who appreciate complexity will relish the challenge of navigating its twists.",
    question: "The word 'labyrinth' as used in this passage is a metaphor for a plot that is:",
    options: ["Predictable", "Highly complex and confusing", "Boring", "Short and direct"],
    correctIndex: 1,
    tutorContent: {
      hint: "A labyrinth is a maze. The author mentions 'winding', 'false leads', 'lost', and 'complexity'.",
      explanation: "The labyrinth metaphor describes a plot that is complicated, winding, and hard to navigate.",
      commonMistake: "Choosing A, which is the exact opposite of what a labyrinth represents."
    }
  },
  {
    id: "read_craft_10",
    category: "Reading",
    subcategory: "Craft, Style & Tone",
    passage: "The new city hall is a monument of concrete and glass. Its stark, angular design looms over the older brick buildings, a symbol of progress to some, but a cold, imposing eyesore to others.",
    question: "The author's tone toward the new city hall is best described as:",
    options: ["Enthusiastically supportive", "Balanced and neutral", "Deeply critical", "Sarcastic"],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the balance in the description: 'progress to some, but a cold, imposing eyesore to others.' The author shows both sides without choosing one.",
      explanation: "The author presents both the positive ('progress to some') and negative ('cold, imposing eyesore to others') perspectives neutrally, without taking a side.",
      commonMistake: "Choosing C. While 'eyesore' is critical, the author attributes it to 'others' and balances it with 'progress to some'."
    }
  },

  // --- Subcategory 9: Inferences & Generalizations ---
  {
    id: "read_inf_2",
    category: "Reading",
    subcategory: "Inferences & Generalizations",
    passage: "Studies show that cities with extensive public transit systems have lower rates of respiratory illnesses compared to cities reliant on private cars. Researchers point to the reduction in tailpipe emissions as the primary cause. When public transit is affordable and reliable, residents readily choose it over driving.",
    question: "Based on the passage, what can be reasonably inferred about public transit?",
    options: [
      "Making public transit free will cure all respiratory illnesses.",
      "Reliability and cost are key factors in whether people choose public transit over driving.",
      "Building subway systems always increases a city's tax revenue.",
      "Most car owners dislike driving in heavy traffic."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the final sentence: 'When public transit is affordable and reliable, residents readily choose it...'.",
      explanation: "The text indicates that affordability and reliability lead residents to choose public transit, implying these factors drive adoption.",
      commonMistake: "Choosing Option 1. The text says it reduces rates of illnesses, but it does not claim it will cure all of them."
    }
  },
  {
    id: "read_inf_3",
    category: "Reading",
    subcategory: "Inferences & Generalizations",
    passage: "Although gray wolves were reintroduced to Yellowstone National Park to control the elk population, the impact was wider than expected. With fewer elk eating young willow and aspen trees along riverbanks, these trees grew taller. This allowed songbirds to return, and provided beavers with wood to build dams, creating wetlands that attracted fish and frogs.",
    question: "Based on the passage, what can be reasonably inferred about beavers in Yellowstone?",
    options: [
      "They were brought to the park by scientists at the same time as the wolves.",
      "They benefited indirectly from the wolves' impact on the elk population.",
      "They are the primary prey of gray wolves.",
      "They helped wolves hunt elk along the riverbanks."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Trace the chain of events: Wolves reduced elk -> trees grew taller along riverbanks -> beavers got wood for dams.",
      explanation: "The wolves controlled the elk, allowing trees to grow, which provided beavers with the wood they needed. This is an indirect ecological benefit.",
      commonMistake: "Choosing A. The text notes the wolves were reintroduced, but does not state beavers were imported by scientists."
    }
  },
  {
    id: "read_inf_4",
    category: "Reading",
    subcategory: "Inferences & Generalizations",
    passage: "Historically, standard sizes in clothing manufacturing were based on body measurements collected in the 1940s from a small, non-representative sample of military volunteers. Today, retailers are using 3D body scanners to collect measurements from thousands of diverse shoppers, resulting in new fit profiles.",
    question: "Based on the passage, what can be reasonably inferred about 1940s clothing sizes?",
    options: [
      "They were more accurate for the average modern shopper than modern sizes.",
      "They did not reflect the diverse body shapes of the general population.",
      "They were designed primarily for formal wear.",
      "They were created using advanced digital algorithms."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the description of the 1940s sample: 'small, non-representative sample of military volunteers'.",
      explanation: "A 'non-representative sample' implies it did not accurately reflect the diversity of the entire population.",
      commonMistake: "Choosing A. The text implies the old measurements are outdated and less accurate for diverse shoppers."
    }
  },
  {
    id: "read_inf_5",
    category: "Reading",
    subcategory: "Inferences & Generalizations",
    passage: "Many desert plants have thick, waxy leaves that prevent water loss through evaporation. In addition, some species have shallow, wide-spreading root systems that can capture water from light rains, while others have deep taproots that reach underground water tables.",
    question: "Based on the passage, what can be inferred about desert plants' root systems?",
    options: [
      "Plants with deep taproots grow faster than those with shallow roots.",
      "Root structures are adapted to target different sources of water.",
      "Waxy leaves are only found on plants with shallow roots.",
      "Desert plants do not require soil nutrients to survive."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Compare the two root types described: shallow roots capture light surface rain, while deep taproots reach underground water tables.",
      explanation: "The text describes different root systems targeting different water sources (surface rain vs deep tables).",
      commonMistake: "Choosing A. The text describes how they get water, but does not compare their growth speeds."
    }
  },
  {
    id: "read_inf_6",
    category: "Reading",
    subcategory: "Inferences & Generalizations",
    passage: "When researchers placed warning signs near a park's flowerbeds, the number of people stepping on the flowers did not change. However, when they placed signs showing a drawing of a sad cartoon flower, damage to the flowerbeds dropped by 40%.",
    question: "What can be reasonably inferred from this experiment?",
    options: [
      "People in the park could not read the text on the warning signs.",
      "Emotional appeals are sometimes more effective at changing behavior than simple warnings.",
      "Cartoon drawings are only effective for children.",
      "Park visitors prefer roses over other types of flowers."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Contrast the results: normal warning sign (no change) vs emotional cartoon sign (40% reduction).",
      explanation: "The sad cartoon flower appealed to emotions, which proved more effective at preventing damage than the standard warning.",
      commonMistake: "Choosing A. The text does not say people couldn't read; it suggests the warnings were simply ignored."
    }
  },
  {
    id: "read_inf_7",
    category: "Reading",
    subcategory: "Inferences & Generalizations",
    passage: "In areas where sea otters are healthy, kelp forests flourish. Sea otters feed on sea urchins, which graze heavily on the roots of kelp. In regions where sea otters have declined due to hunting, urchin populations have exploded, leaving underwater areas barren of kelp.",
    question: "Based on the passage, what can be reasonably inferred about sea urchins?",
    options: [
      "They are the primary food source for fish in kelp forests.",
      "Their population is kept in check by sea otters.",
      "They grow faster in warm water.",
      "They protect kelp forests from ocean storms."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the relationship: Otters eat urchins. When otters decline, urchin populations explode.",
      explanation: "Because the decline of otters leads to an explosion of urchins, we can infer that otters regulate the urchin population.",
      commonMistake: "Choosing D, which is incorrect because urchins destroy kelp by grazing on their roots."
    }
  },
  {
    id: "read_inf_8",
    category: "Reading",
    subcategory: "Inferences & Generalizations",
    passage: "Traditional agricultural methods require vast fields and huge amounts of water. In contrast, vertical farming grows crops in stacked layers indoors, using nutrient-rich water solutions instead of soil. This method uses 95% less water and can be set up inside abandoned urban warehouses.",
    question: "Based on the passage, what is a potential benefit of vertical farming for cities?",
    options: [
      "It allows food to be grown locally in urban environments.",
      "It requires more manual labor than traditional farming.",
      "It eliminates the need for electricity.",
      "It produces crops that taste sweeter than soil-grown crops."
    ],
    correctIndex: 0,
    tutorContent: {
      hint: "Look at where vertical farms can be set up: 'inside abandoned urban warehouses'. How does this connect to cities?",
      explanation: "Setting up farms in urban warehouses allows food production to occur directly inside cities, reducing shipping needs.",
      commonMistake: "Choosing C. Indoor farming requires artificial lights, meaning it relies heavily on electricity, not eliminates it."
    }
  },
  {
    id: "read_inf_9",
    category: "Reading",
    subcategory: "Inferences & Generalizations",
    passage: "A study of ancient pottery shards from the Mediterranean revealed traces of beeswax, olive oil, and wine. The pots were manufactured in different regions, indicating that these goods were transported across the sea for trade.",
    question: "Based on the passage, what can be reasonably inferred about ancient Mediterranean civilizations?",
    options: [
      "They did not know how to cultivate olive trees.",
      "They engaged in maritime trade networks.",
      "They only used pottery for religious rituals.",
      "They preferred wine over water."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the conclusion: goods were 'transported across the sea for trade'. What does this imply about their shipping?",
      explanation: "Transporting goods across the sea for trade implies they had active maritime trade networks.",
      commonMistake: "Choosing C. Trace elements show they stored food and trade goods in them, not just ritual items."
    }
  },
  {
    id: "read_inf_10",
    category: "Reading",
    subcategory: "Inferences & Generalizations",
    passage: "Modern electric grids must match power supply with demand in real time. Because wind and solar power depend on weather conditions, their output varies. As a result, grids incorporating high percentages of renewable energy require large-scale battery storage to maintain stability.",
    question: "Based on the passage, why do renewable energy grids need battery storage?",
    options: [
      "Batteries generate green electricity from chemical acids.",
      "To store energy when wind and solar output is high and release it when output is low.",
      "To reduce the cost of building solar panels.",
      "Batteries prevent lightning strikes from damaging the electrical lines."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Why does output varying due to weather cause stability issues? Batteries act as a buffer.",
      explanation: "Batteries store excess power when the sun/wind is active and supply it when weather conditions reduce generation, stabilizing the grid.",
      commonMistake: "Choosing A. Batteries store electricity; they do not generate it from scratch."
    }
  },

  // --- Subcategory 10: Comparative & Rhetorical Analysis ---
  {
    id: "read_anal_2",
    category: "Reading",
    subcategory: "Comparative & Rhetorical Analysis",
    passage: "Passage A: Standardized tests are objective measures of academic ability. They offer a uniform scale to evaluate students from different schools, eliminating subjective biases from grading.\n\nPassage B: Standardized tests measure test-taking skills and socioeconomic status more than intelligence. A student with access to expensive tutoring will always score higher than an equally capable student without such resources.",
    question: "Which of the following best describes the relationship between the two passages?",
    options: [
      "Passage A details the history of testing, while Passage B focuses on modern test questions.",
      "Passage B challenges the claim of objectivity and fairness made in Passage A.",
      "Both passages argue that standardized tests should be completely abolished.",
      "Passage A focus on elementary school testing, while Passage B focus on college admissions."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the core arguments. Passage A says tests are 'objective' and 'eliminate bias.' Passage B says they favor wealthy students and 'measure test-taking skills.'",
      explanation: "Passage B directly opposes Passage A's claim of objectivity by pointing out biases related to wealth and tutoring resources.",
      commonMistake: "Choosing C. Passage A is supportive of tests, so both passages do not want to abolish them."
    }
  },
  {
    id: "read_anal_3",
    category: "Reading",
    subcategory: "Comparative & Rhetorical Analysis",
    passage: "To prepare for a marathon, some trainers advocate for high-mileage runs at a slow, steady pace to build aerobic capacity. Conversely, other coaches recommend interval training—shorter, high-intensity sprints—to improve oxygen efficiency and muscle power without causing the joint strain associated with long runs.",
    question: "Which rhetorical strategy does the author use to present these training methods?",
    options: [
      "A chronological narrative of a specific marathon race.",
      "A comparison of two opposing training philosophies.",
      "An emotional appeal to convince readers to run marathons.",
      "A list of statistical data on runner injuries."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the word 'Conversely' and how the text balances the two approaches.",
      explanation: "The author compares and contrasts two distinct training methods (slow high-mileage vs high-intensity intervals) objectively.",
      commonMistake: "Choosing D. While joint strain is mentioned, no statistical data or numbers are provided."
    }
  },
  {
    id: "read_anal_4",
    category: "Reading",
    subcategory: "Comparative & Rhetorical Analysis",
    passage: "Historically, standard business strategy prioritized market share expansion above all else. Today, however, many modern startups focus on unit economics—ensuring that each individual transaction is profitable from day one, even if it limits rapid growth.",
    question: "What is the primary transition in business strategy described in the passage?",
    options: [
      "From focusing on rapid market expansion to prioritizing individual transaction profitability.",
      "From hiring local workers to outsourcing labor globally.",
      "From relying on physical retail stores to launching online e-commerce platforms.",
      "From seeking venture capital to relying entirely on bank loans."
    ],
    correctIndex: 0,
    tutorContent: {
      hint: "Compare the historical strategy ('market share expansion') with the modern startup strategy ('unit economics' / 'transaction profitable').",
      explanation: "The text contrasts the old goal of rapid market share growth with the new goal of transaction-level profitability (unit economics).",
      commonMistake: "Selecting C. While online retail is common, it is not mentioned in this passage."
    }
  },
  {
    id: "read_anal_5",
    category: "Reading",
    subcategory: "Comparative & Rhetorical Analysis",
    passage: "We have spent millions building seawalls to protect our beaches from erosion. Ironically, these hard structures interfere with the natural movement of sand, causing the beaches just past the walls to erode twice as fast as they would have naturally.",
    question: "What is the primary irony described in the passage?",
    options: [
      "Seawalls are cheaper to build than expected.",
      "The walls built to prevent beach erosion actually caused faster erosion further down the beach.",
      "Local residents prefer concrete walls over sandy beaches.",
      "Seawalls attract tourists who damage the local ecosystem."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Irony is when an action has the opposite effect of what was intended. Look at the purpose of the seawall vs the actual outcome.",
      explanation: "The wall meant to stop erosion actually ended up accelerating erosion nearby due to sand disruption.",
      commonMistake: "Choosing C. This might be true for some, but it does not address the cause-and-effect irony of the seawall."
    }
  },
  {
    id: "read_anal_6",
    category: "Reading",
    subcategory: "Comparative & Rhetorical Analysis",
    passage: "Passage A: Virtual reality classroom tools will revolutionize education, allowing students to explore historic ruins and cellular structures in immersive 3D environments.\n\nPassage B: Virtual reality is an expensive distraction for schools. Funds spent on VR headsets would be far better spent hiring teachers and buying textbooks, which have proven educational value.",
    question: "On which point do the authors of the two passages disagree?",
    options: [
      "Whether 3D environments can simulate real structures.",
      "The value and priority of spending school funds on virtual reality technology.",
      "Whether schools should have textbooks.",
      "The historical timeline of classroom technology."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Passage A promotes VR as a revolutionary tool. Passage B calls it an 'expensive distraction' and says funds should go elsewhere.",
      explanation: "The authors disagree on the financial wisdom and educational priority of purchasing VR technology.",
      commonMistake: "Choosing C. Passage B supports textbooks, but Passage A does not say they want to get rid of them."
    }
  },
  {
    id: "read_anal_7",
    category: "Reading",
    subcategory: "Comparative & Rhetorical Analysis",
    passage: "The city's recycling program was hailed as a green victory. However, because there is no local market for recycled glass, the city has been quietly transporting the collected bottles to a standard landfill, spending double the fuel of normal trash trucks in the process.",
    question: "What makes the recycling program ironical according to the text?",
    options: [
      "Residents refuse to separate glass from paper.",
      "The green program actually consumes more fuel and ends up dumping the glass in a landfill anyway.",
      "Landfills are more profitable than recycling plants.",
      "Glass bottles are heavier than plastic ones."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the mismatch: the program is called a 'green victory,' but it wastes fuel and dumps the items anyway.",
      explanation: "The irony is that a program meant to save the environment consumes extra fossil fuel only to landfill the glass anyway.",
      commonMistake: "Choosing A. The text says the city collects the sorted bottles, implying residents are separating them."
    }
  },
  {
    id: "read_anal_8",
    category: "Reading",
    subcategory: "Comparative & Rhetorical Analysis",
    passage: "Advocates of remote work emphasize the elimination of commutes, which reduces stress and lowers carbon footprints. On the other hand, critics point out that remote work weakens company culture and leads to longer working hours as the boundary between home and office blurs.",
    question: "How does the author balance the arguments in this passage?",
    options: [
      "By arguing that remote work is always superior.",
      "By presenting both the benefits (commute reduction) and drawbacks (culture loss, blurred boundaries) of remote work.",
      "By listing statistics on carbon emissions.",
      "By interviewing a specific remote worker."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Look at the transition 'On the other hand' and see if the author takes a side or represents both.",
      explanation: "The author presents a balanced view by outlining positive factors (no commute, less stress) and negative factors (blurred lines, culture loss).",
      commonMistake: "Choosing A. The author does not pick a side, but presents a balanced summary of both arguments."
    }
  },
  {
    id: "read_anal_9",
    category: "Reading",
    subcategory: "Comparative & Rhetorical Analysis",
    passage: "The state park service banned campfires to protect the forest from wildfires. Ironically, the lack of small, controlled fires has allowed dry brush and dead wood to accumulate on the forest floor, setting the stage for a catastrophic, uncontrollable megafire.",
    question: "What is the primary irony described in this passage?",
    options: [
      "Controlled fires are easy to put out.",
      "The ban on campfires intended to prevent fires actually created conditions for a worse, uncontrollable fire.",
      "Campfires are popular among park visitors.",
      "Wildfires are natural parts of forest lifecycles."
    ],
    correctIndex: 1,
    tutorContent: {
      hint: "Contrast the intent of the ban (prevent fires) with the outcome (sets stage for a megafire).",
      explanation: "Banning small fires to prevent damage accumulated dry fuel, making a massive, catastrophic fire more likely.",
      commonMistake: "Choosing D. While true in science, it does not explain the specific irony of the park's campfire ban policy."
    }
  },
  {
    id: "read_anal_10",
    category: "Reading",
    subcategory: "Comparative & Rhetorical Analysis",
    passage: "Passage A: Genetically modified crops are essential to feeding the world's growing population. They can be engineered to resist pests and survive droughts, increasing crop yields.\n\nPassage B: The long-term environmental impacts of genetically modified crops are unknown. They may cross-pollinate with wild species, creating uncontrollable 'superweeds' and disrupting local ecosystems.",
    question: "Which of the following best describes the relationship between the two passages?",
    options: [
      "Passage A highlights the technological benefits of GM crops, while Passage B warns of ecological risks.",
      "Both passages argue that GM crops are unsafe and should be banned.",
      "Passage B provides a history of farming, while Passage A explains genetic splicing methods.",
      "Passage A focuses on vegetables, while Passage B focuses on grains."
    ],
    correctIndex: 0,
    tutorContent: {
      hint: "Look at the core focus. Passage A details the benefits (pest resistance, drought survival). Passage B details the risks (superweeds, ecological disruption).",
      explanation: "Passage A presents the arguments in favor of GM crops (productivity), while Passage B presents the arguments against them (unpredictable ecological damage).",
      commonMistake: "Choosing B. Passage A is highly positive about GM crops, so it does not support a ban."
    }
  }
];
