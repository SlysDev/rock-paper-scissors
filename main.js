// Variables

let playerSelection = player();

let computerSelection = computerPlay();

// Functions

function player() {
  let playerValue = prompt('Please type "rock", "paper", or "scissors"');
  return playerValue;
}

function computerPlay() {
  let computerValue = Math.ceil(Math.random() * 3);
  console.log(computerValue);
  if (computerValue == 1) {
    computerValue == 'rock';
  } else if (computerValue == 2) {
    computerValue == 'paper';
  } else {
    computerValue == 'scissor';
  }
  
  return computerValue;
}

function gameStatus() {
  if (playerSelection == 'rock' && computerSelection == 'rock') {
    return 'tie';
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 'loss';
  } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
    return 'win';
  }
}

function gameRun() {

}