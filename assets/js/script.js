/**
 * Declare constants for DOM elements and choices
 */
const buttons = document.getElementsByClassName('control');
const totalWins = document.getElementById('wins');
const totalLosses = document.getElementById('losses');
const choices = ["rock", "paper", "scissors"];
let resultText = document.getElementById("result-text");

let playerChoice;
let computerChoice;

/**
 * The game area. This adds event listeners to 
 * all buttons. It takes what the user has clicked
 * and the computers randomly generated choice to use as 
 * parameters in order to get a winner.
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        playerChoice = this.getAttribute("data-choice");
        computerRandomGenerator();
        checkWinner();
    });
}

/**
 * The game area function. Takes the option from data-choice
 * and its given parameter
 */
function computerRandomGenerator() {
    computerChoice = Math.floor(Math.random() * 3);

}

/**
 * Checks to see who has won, it takes both choices
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
    else {
        resultText.innerHTML == "IT'S A TIE!"
    }
}


/**
 * The playerScore function. If the player wins the 
 * game a point will be added to their tally. This 
 * is based on Code Insitute's Love Maths increment 
 * score function
 */
function playerScore() {
    let oldScore = parseInt(document.getElementById('wins').innerText);
    document.getElementById('wins').innerText = ++oldScore;
}

/**
 * The computerScore function. If the computer wins
 * the game a point will be added to their tally. This 
 * is based on Code Insitute's Love Maths increment 
 * score function
 */
function computerScore() {
    let oldScore = parseInt(document.getElementById('losses').innerText);
    document.getElementById('losses').innerText = ++oldScore;
}