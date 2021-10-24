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
}
computerPlay();

function gameAnalysis() {
  
}

function gameRun() {

}