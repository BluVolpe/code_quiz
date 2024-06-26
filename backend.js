let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

const startBtn = document.querySelector("#start");
const questionsElement = document.querySelector("#questions");
const timeElement = document.querySelector("#time");
const questionChoices = document.querySelector("#choices");

// Clicking "start quiz" button will start the quiz & timer
function startQuiz() {
  const startScreen = document.querySelector("#start-screen");
  startScreen.setAttribute("class", "hide");
  questionsElement.removeAttribute("class", "hide");
  timerId = setInterval(keepTime, 1000);
  timeElement.textContent = time;
  getCurrentQuestion();
}

// Will cycle through questions array and present them one by one on screen
function getCurrentQuestion() {
  if (!questions || questions.length === 0) return;

  const currentQuestion = questions[currentQuestionIndex];
  const titleElement = document.querySelector("#question-title");
  titleElement.textContent = currentQuestion.question;

  questionChoices.innerHTML = "";

  currentQuestion.choice.forEach((choice, index) => {
    const userChoice = document.createElement("button");
    userChoice.setAttribute("class", "choice");
    userChoice.setAttribute("value", choice);
    userChoice.textContent = `${index + 1}. ${choice}`;

    // adding listener to question choices
    userChoice.onclick = questionClick;

    // displaying the questions
    questionChoices.appendChild(userChoice);
  });
}

// function to move on to next question on button click
function questionClick() {
  // checking if they answered wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;

    // If the timer penalty puts the clock below 0 seconds
    if (time <= 0) {
      time = 0;
    }
    // display time again
    timeElement.textContent = time;
  }

  // Moving on to next question
  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    getCurrentQuestion();
  }
}

// Ends quiz and brings up "Finished" page
function endQuiz() {
  clearInterval(timerId);

  const endScreenEl = document.querySelector("#end-screen");
  endScreenEl.removeAttribute("class");

  const finalScoreEl = document.querySelector("#final-score");
  finalScoreEl.textContent = time;

  questionsElement.setAttribute("class", "hide");
}

// Timer counting down
function keepTime() {
  time--;
  timeElement.textContent = time;

  if (time <= 0) {
    endQuiz();
  }
}

// start button for quiz
startBtn.onclick = startQuiz;
