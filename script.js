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
    new Question("What is the largest planet in our solar system?", ["Mars", "Jupiter", "Venus"], 1),
    new Question("Who wrote 'Romeo and Juliet'?", ["Charles Dickens", "Jane Austen", "William Shakespeare"], 2),
    new Question("What is the chemical symbol for water?", ["O2", "H2O", "CO2"], 1),
    new Question("What is the fastest land animal?", ["Lion", "Cheetah", "Giraffe"], 1),
    new Question("What is the smallest prime number?", ["0", "1", "2"], 2),
    new Question("What is the freezing point of water in Celsius?", ["0", "100", "-10"], 0)
  ];
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

  let currentQuestionIndex = 0;
  let currentQuestion = questions[currentQuestionIndex];
  displayQuestion(currentQuestion);
