let currentQuestionIndex = 0;
// console.log(questions);
let time = questions.length * 15;

let startBtn = document.querySelector("#start");
let questionsElement = document.querySelector("#questions");
let timeElement = document.querySelector("#time");
let questionChoices = document.querySelector("#choices");

function startQuiz() {
  let startScreen = document.querySelector("#start");
  startScreen.setAttribute("class", "hide");
  questionsElement.removeAttribute("class", "hide");
  getCurrentQuestion();
}

function getCurrentQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let titleElement = document.querySelector("#question-title");
  titleElement.textContent = currentQuestion.question;
  console.log(currentQuestion);
}

startBtn.onclick = startQuiz;
