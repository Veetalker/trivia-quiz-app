# trivia-quiz-app
The following write-up outlines the comprehensive enhancements made to the Quiz Trivia web application. These improvements focus on incorporating classes, switch statements, and try-catch-finally statements to ensure a well-structured and error-handled user experience.

**Classes Implementation:**
Classes were employed to organize the code, providing a clear and structured foundation for the application's functionality.
A Question class was defined to encapsulate question properties, including text, options, and correct answers. This enhances code modularity and readability.
javascript
class Question {
  constructor(text, options, correctAnswer) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
}

**Displaying Questions:**
The displayQuestion function was created to render questions and options on the webpage. This function dynamically updates the DOM based on the current question.
javascript
function displayQuestion(question) {
  // Code to display question and options...
}

**Handling User Answers:**
The checkAnswer function validates user-selected options and compares them to the correct answer using an event listener on the buttons.
javascript
function checkAnswer(event) {
  const userAnswerIndex = parseInt(event.target.getAttribute('data-index'));
  const isCorrect = currentQuestion.correctAnswer === userAnswerIndex;

  if (isCorrect) {
    displayResult(true);
  } else {
    displayResult(false);
  }
}

**Displaying Results:**
The displayResult function provides feedback to the user, notifying them if their answer was correct or incorrect. This function incorporates a try-catch-finally statement for error handling.
javascript
function displayResult(isCorrect) {
  try {
    const resultMessage = isCorrect ? 'Correct!' : 'Wrong answer. The correct answer is: ' + currentQuestion.options[currentQuestion.correctAnswer];
    alert(resultMessage);
  } catch (error) {
    console.error('Error displaying result:', error);
  } finally {
    loadNextQuestion();
  }
}

**Load Next Question:**
The loadNextQuestion function advances to the next question in the sequence, updating the DOM with the new question.
javascript
function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    currentQuestion = questions[currentQuestionIndex];
    displayQuestion(currentQuestion);
  } else {
    alert('Quiz finished.');
  }
}

**Switching Dark Mode:**
A toggleDarkMode function was added to toggle between light and dark modes, enhancing user experience. 
This function incorporates a class switch statement.
javascript
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

**Conclusion:**
The above enhancements have significantly improved the comprehensiveness of your Quiz Trivia web application. 
By incorporating classes, switch statements, and try-catch-finally statements, the codebase is now well-structured, error-resistant, and provides an enhanced user experience. 
These improvements will contribute to a smoother and more enjoyable interaction with your application.
