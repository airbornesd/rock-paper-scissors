const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerOption = [rock, paper, scissors];
const computerOption = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let moves = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  }
  
  function getPlayerChoice() {
    // let moves = ["Rock", "Paper", "Scissors"];
    // let randomIndex = Math.floor(Math.random() * moves.length);
    // return moves[randomIndex];
    
  }
  
  function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection == "Rock" && computerSelection == "Scissors") ||
      (playerSelection == "Paper" && computerSelection == "Rock") ||
      (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
      return "It's a tie!";
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let round = 0; round < 5; round++) {
      let computerSelection = getComputerChoice();
      let playerSelection = getPlayerChoice();
    
      let result = playRound(playerSelection, computerSelection);
    
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
      console.log(`Round ${round}: ${result}`);
    }
  
    if (playerScore > computerScore) {
      console.log(`You Win the Game! with a Score: ${playerScore}`);
    } else if (playerScore < computerScore) {
      console.log(`You Lose the Game! with a Score: ${playerScore}`);
    } else {
      console.log(`It's a Tie! and the Score is: ${playerScore}`); 
    }
  }
  
  console.log(game());

/*
 rock wins over scissors

 scissors win over paper

 paper wins over rock
*/