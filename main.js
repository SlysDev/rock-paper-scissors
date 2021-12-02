// Selectors
let display = document.querySelector('#info-display');
let container = document.querySelector('#main-container');
let rockButton = document.querySelector('#rockbtn');
let paperButton = document.querySelector('#paperbtn');
let scissorsButton = document.querySelector('#scissorsbtn');
let scoreDisplay = document.querySelector('#score-display');
let replayContainer = document.querySelector('#replay-container');
let replayNo = document.createElement('button');
let replayYes = document.createElement('button');
body = document.querySelector('body');
// Variables

let playerValue; // puts the player's input into a variable

let score = 0;

let computerValue; // puts the computer's input into a variable

// Functions

// function player() {
//   display.textContent = 'playing...')
//   playerValue = prompt('Please type "rock", "paper", or "scissor"');
//   return playerValue; // returns 'rock', 'paper', or 'scissor' depending on the player's input
// }

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
  
  // Creating elements
  body.appendChild(container);
  
  // player(); // runs the player function
  computerPlay(); // runs the computer function
  
  
  let gameOutcome = gameStatus(); // puts the game status into a variable

  display.textContent = gameOutcome; // game dialogue
  if (gameOutcome == 'win') {
    score++;
    setTimeout(() => {
      display.textContent = `You win a point with ${playerValue}!`;
    }, 1000);
    
    
  } else if (gameOutcome == 'tie') {
    setTimeout(() => {
      display.textContent = `The game is tied at ${computerValue}!`;
    }, 1000);
    
    
  } else {
    score--;
    setTimeout(() => {
      display.textContent = `Oops... the computer won a point with ${computerValue}.`;
    }, 1000);
    
    
  }
  scoreDisplay.textContent = 'Score: ' + score;
  
  
  if (score <= -5) {
    setTimeout(() => {
      display.textContent = 'You lost to the computer!';
    }, 1000);
    replayGame();
  } else if (score >= 5) {
    setTimeout(() => {
      display.textContent = 'You WON - Congratulations!';
    }, 1000);
    replayGame();
  }
  
  
}

function replayGame() {
  body.removeChild(container);
  setTimeout(() => {
    display.textContent = 'Would you like to play again?';
  }, 1000); // prompts the player to play again
  
  replayYes.textContent = 'Yes';
  
  replayNo.textContent = 'No';
  replayContainer.appendChild(replayYes);
  replayContainer.appendChild(replayNo);
}


// Event Listeners

rockButton.addEventListener('click', function() {
  playerValue = 'rock';
  gameRun();
});

paperButton.addEventListener('click', function() {
  playerValue = 'paper';
  gameRun();
});


scissorsButton.addEventListener('click', function() {
  playerValue = 'scissor';
  gameRun();
});

replayYes.addEventListener('click', function() {
  score = 0;
  body.removeChild(replayContainer);
  body.appendChild(container);
  display.textContent = '';
});

replayNo.addEventListener('click', function() {
  score = null;
  
  display.textContent = 'OK...';
  setTimeout(() => {
    display.textContent = 'Thanks for playing!';
  }, 1000);
  
})


// Running the Game