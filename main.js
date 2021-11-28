let playerValue; // puts the player's input into a variable

let computerValue; // puts the computer's input into a variable

// Variables

let param = document.getElementById('param'); // irrelevant code
  


// Functions

function player() {
  console.log('playing...')
  playerValue = prompt('Please type "rock", "paper", or "scissor"');
  return playerValue; // returns 'rock', 'paper', or 'scissor' depending on the player's input
}

function computerPlay() {
  let computerNum;
  computerNum = Math.ceil(Math.random() * 3); // generates a random number between 1 and 3
  if (computerNum == 1) {
    computerValue = 'rock';
  } else if (computerNum == 2) {
    computerValue = 'paper';
  } else {
    computerValue = 'scissor';
  }
  
  return computerValue; // returns 'rock', 'paper', or 'scissor' depending on the computer's random number
}

function gameStatus() {
  if (playerValue == computerValue) {
    return 'tie';
  } else if (playerValue == 'rock' && computerValue == 'paper') {
    return 'loss';
  } else if (playerValue == 'rock' && computerValue == 'scissor') {
    return 'win';
  } else if (playerValue == 'paper' && computerValue == 'rock') {
    return 'win';
  } else if (playerValue == 'paper' && computerValue == 'scissor') {
    return 'loss';
  } else if (playerValue == 'scissor' && computerValue == 'paper') {
    return 'win';
  } else if (playerValue == 'scissor' && computerValue == 'rock') {
    return 'loss';
  } // returns 'win' or 'loss' depending on the status of the game
}



function gameRun() {
  
  player(); // runs the player function
  computerPlay(); // runs the computer function
  
  
  let gameOutcome = gameStatus(); // puts the game status into a variable


  console.log('rock');
  console.log('paper');
  console.log('scissor');
  console.log('SHOOT');
  console.log(gameOutcome); // game dialogue
  if (gameOutcome == 'win') {
    console.log(`You win with ${playerValue}!`);
    replayGame(); // runs the game again
  } else if (gameOutcome == 'tie') {
    console.log(`The game is tied at ${computerValue}!`);
    replayGame(); // ...
  } else {
    console.log(`Oops... the computer won with ${computerValue}.`);
    replayGame(); // ...
  }
}

function replayGame() {
  let replay = prompt('Would you like to play again? (y/n)'); // prompts the player to play again
  if (replay == 'y') {
    gameRun(); // runs the game again
  } else {
    console.log('Thank you for playing!'); // end of game cycle dialogue
  }
}

gameRun(); // runs the game