const choice = document.getElementById("ur-choice");
const allButton = document.querySelectorAll("button");
const compChoice = document.getElementById("cp-choice");
const resultDis = document.getElementById("result");

let userChoice;
let cpChoice;

const clickEvent = (e) => {
  userChoice = e.target.id;
  choice.innerHTML = userChoice;

  generateCompChoice();
  getResult();
};

allButton.forEach(function (getAllButtons) {
  getAllButtons.addEventListener("click", clickEvent);
});

function generateCompChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);

  if (randomNum === 1) {
    cpChoice = "rock";
  }
  if (randomNum === 2) {
    cpChoice = "paper";
  }
  if (randomNum === 3) {
    cpChoice = "scissors";
  }
  compChoice.innerHTML = cpChoice;
}

function getResult() {
  if (cpChoice == userChoice) {
    result = "tie";
  }

  if (cpChoice === "rock" && userChoice === "paper") {
    result = "WIN!!";
  }
  if (cpChoice === "rock" && userChoice === "scissors") {
    result = "LOOSE!!";
  }
  if (cpChoice === "paper" && userChoice === "rock") {
    result = "LOOSE!!";
  }
  if (cpChoice === "paper" && userChoice === "scissors") {
    result = "LOOSE!!";
  }
  if (cpChoice === "scissors" && userChoice === "paper") {
    result = "LOOSE!!";
  }
  if (cpChoice === "scissors" && userChoice === "rock") {
    result = "LOOSE!!";
  }

  resultDis.innerText = result;
}
