

function getComputerChoice() {
    let x = Math.floor(Math.random()*3);
    if(x == 0) return "rock";
    if(x == 1) return "paper";
    return "scissors";
}

function playRound(playerSelection, computerSelection) {
      if(playerSelection == "rock") {
          if(computerSelection == "paper") return "You Lose! Paper beats Rock";
          if(computerSelection == "rock") return "It's a draw";
          else return "You Win! Rock beats scissors";
      }
      else if(playerSelection == "paper"){
        if(computerSelection == "paper") return "It's a draw";
        if(computerSelection == "rock") return "You Win! Paper beats Rock";
        else return "You Lose! Rock beats Paper";
      }
      else {
        if(computerSelection == "paper") return "You Win! Scissors beats Paper";
        if(computerSelection == "rock") return "You Lose! Rock beats Scissors";
        else return "It's a draw";
      }
  }

function game(){
    let cnt1=0, cnt2=0;
    for(let i=0; i<5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter your choice: ").toLowerCase();
        const decision=playRound(playerSelection, computerSelection);
        if(decision.substring(4, 7)=="Win") cnt1++;
        if(decision.substring(4, 8)=="Lose") cnt2++;
        console.log(decision);
    }
    if(cnt1>cnt2) console.log("You won the entire game");
    else if(cnt1==cnt2) console.log("The entire game was a draw");
    else console.log("You lost the entire game");
}
  
  //console.log(getComputerChoice());
   game();
