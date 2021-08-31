let currentQuestionIndex = 0;
// console.log(questions);
let time = questions.length * 15;
let timerId;

let startBtn = document.querySelector("#start");
let questionsElement = document.querySelector("#questions");
let timeElement = document.querySelector("#time");
let questionChoices = document.querySelector("#choices");
let timerEl = document.getElementById("time");

function startQuiz() {
  let startScreen = document.querySelector("#start");
  startScreen.setAttribute("class", "hide");
  questionsElement.removeAttribute("class", "hide");
  timerId = setInterval(keepTime, 1000);
  timerEl.textContent = time;
  getCurrentQuestion();
}

function getCurrentQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let titleElement = document.querySelector("#question-title");
  titleElement.textContent = currentQuestion.question;

  questionChoices.innerHTML = "";

  console.log(currentQuestion);
  for (let i = 0; i < currentQuestion.choice.length; i++) {
    let userChoice = document.createElement("button");
    userChoice.setAttribute("class", "choices");
    userChoice.setAttribute("value", currentQuestion.choice[i]);
    userChoice.textContent = i + 1 + ". " + currentQuestion.choice[i];

    // adding listener to question choices
    userChoice.onclick = questionClick;

    // displaying the questions
    questionChoices.appendChild(userChoice);
  }
}

function questionClick() {
  // checking if they answered wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 5;

    // If the timer penalty puts the clock below 0 seconds
    if (time <= 0) {
      time = 0;
    }
    // display time again
    timerEl.textContent = time;
  }

  // Moving on to next question
  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    getCurrentQuestion();
  }
}

function endQuiz() {
  clearInterval(timerId);

  let endScreenEl = document.querySelector("#end-screen");
  endScreenEl.removeAttribute("class");

  let finalScoreEl = document.querySelector("#final-score");
  finalScoreEl.textContent = time;

  questionsElement.setAttribute("class", "hide");
}

function keepTime() {
  time--;
  timerEl.textContent = time;

  if ((time = 0)) {
    endQuiz();
  }
}

// start button for quiz
startBtn.onclick = startQuiz;
