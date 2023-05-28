let cnt1=0, cnt2=0;
const yourMove = document.querySelector(".your-status");
const computerMove = document.querySelector(".computer-status");
const yourScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");

function getComputerChoice() {
  let x = Math.floor(Math.random()*3);
  if(x == 0) return "rock";
  if(x == 1) return "paper";
  return "scissors";
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection + " " + computerSelection);
  if(playerSelection == "rock") {
      if(computerSelection == "paper") cnt2++;
      if(computerSelection == "scissors") cnt1++;
  }
  else if(playerSelection == "paper"){
    if(computerSelection == "scissors") cnt2++;
    if(computerSelection == "rock") cnt1++;
  }
  else {
    if(computerSelection == "rock") cnt2++;
    if(computerSelection == "paper") cnt1++;
  }

  yourMove.textContent = "Your move: " + playerSelection;
  computerMove.textContent = "Computer's move: " + computerSelection;
  yourScore.textContent = "Your score: " + cnt1;
  computerScore.textContent = "Computer's score: " + cnt2;
  if(cnt1==5 || cnt2==5){
    const content = document.querySelector("body");
    content.replaceChildren();
    const box = document.createElement("div");
    //box.style.cssText = 'display: flex; justify-content: center; align-items: center;';   
    if(cnt1==5) box.textContent = "You Won!!!!";
    else box.textContent = "You Lost!!!!";
    content.append(box);
  }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));