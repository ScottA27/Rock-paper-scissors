/**
 * Declare constants for DOM elements and choices
 */
const buttons = document.querySelectorAll('data-choice');
const totalWins = document.getElementById('wins');
const totalLosses = document.getElementById('losses');
const choices = ["rock", "paper", "scissors"];
const resultText = document.getElementById('result-text');

let playerChoice;
let computerChoice;

/**
 * Add event listeners to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * The game area function. Takes the option from data-choice
 * and its given parameter
 */
function playGame(playerChoice) {
    computerChoice = Math.floor(Math.random() * 3);
    
    checkWinner();

}

/**
 * Checks to see who has won, it takes both the strings
 * from the player and computer, as parameters, to then
 * compare them
 */
function checkWinner() {
    if (playerChoice == '0' && computerChoice == '2') {
        resultText.innerHTML = "YOU WIN!";
        playerScore();
    }
    else if (playerChoice == '1' && computerChoice == '0') {
        resultText.innerHTML = "YOU WIN!";
        playerScore();
    }
    else if (playerChoice == '2' && computerChoice == '2') {
        resultText.innerHTML == "YOU WIN!";
        playerScore();
    }
    else if (playerChoice == '0' && computerChoice == '1') {
        resultText.innerHTML == "YOU LOSE!";
        computerScore();
    }
    else if (playerChoice == '1' && computerChoice == '2') {
        resultText.innerHTML == "YOU LOSE!";
        computerScore();
    }
    else if (playerChoice == '2' && computerChoice == '0') {
        resultText.innerHTML == "YOU LOSE!";
        computerScore();
    }
}


/**
 * The playerScore function. If the player wins the 
 * game a point will be added to their tally. This 
 * is based on Code Insitute's Love Maths increment 
 * score function
 */
function playerScore() {

}

/**
 * The computerScore function. If the computer wins
 * the game a point will be added to their tally. This 
 * is based on Code Insitute's Love Maths increment 
 * score function
 */
function computerScore() {

}