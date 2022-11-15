/**
 * Declare constants for DOM elements and choices
 */
const buttons = document.getElementsByClassName('control');
const totalWins = document.getElementById('wins');
const totalLosses = document.getElementById('losses');
const choices = ["rock", "paper", "scissors"];
const resultText = document.getElementsByClassName('result-text');

/**
 * Add event listeners to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * The game area function. Takes the option from data-choice
 * and its given parameter
 */
function playGame(playerChoice) {
    let computerChoice = Math.floor(Math.random() * choices.length);

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);

    updateScores(result);
}

/**
 * Checks to see who has won, it takes both the strings
 * from the player and computer, as parameters, to then
 * compare them
 */
function checkWinner(choices, playerChoice, computerChoice) {
    // Tie
    if (playerChoice === computerChoice) {
        return resultText.innerHTML = "IT'S A TIE!";
    }

    // Rock 
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            return resultText.innerHTML = "YOU WIN!";
        } else {
            return resultText.innerHTML = "YOU LOSE!";
        }
    }

    // Scissors
    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            return resultText.innerHTML = "YOU WIN!";
        } else {
            return resultText.innerHTML = "YOU LOSE!";
        }
    }

    // Paper 
    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return resultText.innerHTML = "YOU WIN!";
        } else {
            return resultText.innerHTML = "YOU LOSE!";
        }
    }
}


/**
 * The update scores function. Takes whoever won the game
 * and adds a point to their score tally
 */
function updateScores()