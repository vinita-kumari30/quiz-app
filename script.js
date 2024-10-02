const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "Which element does 'O' represent on the periodic table?",
    options: ["Osmium", "Oxygen", "Oganesson", "Osmosis"],
    answer: "Oxygen"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  const question = quizData[currentQuestion];
  questionElement.textContent = question.question;
  options.forEach((option, index) => {
    option.textContent = question.options[index];
    option.style.backgroundColor = '#3498db';  // Reset the color for new question
    option.disabled = false;  // Enable the buttons for the next question
  });
}

function selectAnswer(optionId) {
  const selectedOption = document.getElementById(optionId);
  const selectedAnswer = selectedOption.textContent;
  const correctAnswer = quizData[currentQuestion].answer;
  
  if (selectedAnswer === correctAnswer) {
    selectedOption.style.backgroundColor = "#2ecc71";  // Green for correct answer
    score++;
  } else {
    selectedOption.style.backgroundColor = "#e74c3c";  // Red for wrong answer
  }

  // Disable all options after selecting an answer
  options.forEach(option => option.disabled = true);

  nextButton.style.display = 'block';  // Show the "Next" button after selecting an answer
}

function nextQuestion() {
  currentQuestion++;
  
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextButton.style.display = 'none';  // Hide the "Next" button for the next question
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.style.display = 'none';
  options.forEach(option => option.style.display = 'none');
  nextButton.style.display = 'none';

  scoreElement.textContent = `Your Score: ${score} / ${quizData.length}`;
  scoreElement.style.display = 'block';
}

// Load the first question when the page loads
window.onload = loadQuestion;
