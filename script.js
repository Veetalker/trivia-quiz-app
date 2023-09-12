class Question {
  constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
  }
}

function displayQuestion(question) {
  const questionElement = document.getElementById('question');
  questionElement.textContent = question.text;

  const optionsElement = document.getElementById('options');
  optionsElement.innerHTML = '';

  question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.setAttribute('data-index', index);
      button.addEventListener('click', checkAnswer); // Added event listener here
      optionsElement.appendChild(button);
  });
}

function checkAnswer(event) {
  const userAnswerIndex = parseInt(event.target.getAttribute('data-index'));
  const isCorrect = currentQuestion.correctAnswer === userAnswerIndex;

  if (isCorrect) {
      displayResult(true);
  } else {
      displayResult(false);
  }
}

function displayResult(isCorrect) {
  const resultMessage = isCorrect ? 'Correct!' : 'Wrong answer. The correct answer is: ' + currentQuestion.options[currentQuestion.correctAnswer];
  alert(resultMessage);
  loadNextQuestion();
}

function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      currentQuestion = questions[currentQuestionIndex];
      displayQuestion(currentQuestion);
  } else {
      alert('Quiz finished.');
  }
}

const questions = [
  new Question("What is the capital of France?", ["London", "Paris", "Berlin"], 1),
  new Question("Is the earth flat?", ["True", "False"], 1),
  new Question("What is 2 + 2?", ["3", "4", "5"], 1),
  new Question("What is the powerhouse of the cell?", ["Nucleus", "Mitochondria", "Ribosome"], 1),
];

let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
displayQuestion(currentQuestion);
