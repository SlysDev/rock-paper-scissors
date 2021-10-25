// Variables

let param = document.getElementById('param');

let playerSelection = player();

let computerSelection = computerPlay();

// Functions

function player() {
  let playerValue = prompt('Please type "rock", "paper", or "scissor"');
  return playerValue;
}

function computerPlay() {
  let computerValue = Math.ceil(Math.random() * 3);
  console.log(computerValue);
  if (computerValue == 1) {
    computerChoice = 'rock';
  } else if (computerValue == 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissor';
  }
  
  return computerChoice;
}

function gameStatus() {
  if (playerSelection == computerSelection) {
    return 'tie';
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 'loss';
  } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
    return 'win';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'win';
  } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
    return 'loss';
  } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
    return 'win';
  } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
    return 'loss';
  }
}



function gameRun() {
  let gameOutcome = gameStatus();
  console.log('rock');
  console.log('paper');
  console.log('scissor');
  console.log('SHOOT');
  if (gameOutcome == 'win') {
    console.log(`You win with ${playerSelection}!`);
  } else if (gameOutcome == 'tie') {
    console.log(`The game is tied at ${computerSelection}!`);
  } else {
    console.log(`Oops... the computer won with ${computerSelection}.`);
    
  }
}

gameRun();