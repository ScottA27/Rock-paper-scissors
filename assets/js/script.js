/**
 * Declare constants for DOM elements and choices
 */
const buttons = document.getElementsByClassName('control');
const totalWins = document.getElementById('wins');
const totalLosses = document.getElementById('losses');
const choices = ["rock", "paper", "scissors"];
const result = document.getElementsByClassName('result')

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
    let computerChoice = Math.floor(Math.random() * 3);

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);

    updateScores(result)
}

/**
 * Checks to see who has won, it takes both the strings
 * from the player and computer, as parameters, to then
 * compare them
 */
function checkWinner(choices)


/**
 * The update scores function. Takes whoever won the game
 * and adds a point to their score tally
 */
function updateScores()