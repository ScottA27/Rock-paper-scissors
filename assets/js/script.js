/**
 * Declare constants for DOM elements and choices
 */
const buttons = document.getElementsByClassName('control');
const choices = ["rock", "paper", "scissors"];
let resultText = document.getElementById("result-text");
let briefRules = document.getElementById("brief-rules")
let playerImage = document.getElementById("player-image");
let computerImage = document.getElementById("computer-image");
let ruleButton = document.getElementById("rules");
let playerChoice;
let computerChoice;

document.getElementById('rock').disabled = false;
document.getElementById('paper').disabled = false;
document.getElementById('scissors').disabled = false;

ruleButton.addEventListener("click", function() {
    alert("The rules are as follows:\n-Rock blunts scissors\n-Scissors cuts paper\n-Paper covers rock\nFirst player to reach five points wins!");
})

/**
 * The game area. This adds event listeners to 
 * all buttons. It takes what the user has clicked
 * and the computers randomly generated choice to use as 
 * parameters in order to get a winner.
 */

    for (let button of buttons) {
        button.addEventListener("click", function () {
            playerChoice = +this.getAttribute("data-choice");
            computerRandomGenerator();
            playerImgDisplay();
            computerImgDisplay();
            checkWinner();
            checkScore();
        });
    }


/**
 * The random number generator. This takes a number between 0 and 2 
 * to make a choice for the computer.
 */
function computerRandomGenerator() {
    computerChoice = Math.floor(Math.random() * choices.length);

}

/**
 * Checks to see who has won, it takes both choices
 * from the player and computer, as parameters, to then
 * compare them
 */
function checkWinner() {
    if (playerChoice === 0 && computerChoice === 2) {
        resultText.innerHTML = "YOU WIN THIS ROUND!";
        playerScore();
    }
    else if (playerChoice === 1 && computerChoice === 0) {
        resultText.innerHTML = "YOU WIN THIS ROUND!";
        playerScore();
    }
    else if (playerChoice === 2 && computerChoice === 1) {
        resultText.innerHTML = "YOU WIN THIS ROUND!";
        playerScore();
    }
    else if (playerChoice === 0 && computerChoice === 1) {
        resultText.innerHTML = "YOU LOSE THIS ROUND!";
        computerScore();
    }
    else if (playerChoice === 1 && computerChoice === 2) {
        resultText.innerHTML = "YOU LOSE THIS ROUND!";
        computerScore();
    }
    else if (playerChoice === 2 && computerChoice === 0) {
        resultText.innerHTML = "YOU LOSE THIS ROUND!";
        computerScore();
    }
    else {
        resultText.innerHTML = "IT'S A DRAW!";
    }
}

/**
 * The playerImgDisplay function. This takes whatever option the
 * player has picked and displays it in the player image circle
 */
function playerImgDisplay() {
    if (playerChoice == 0) {
        playerImage.src = 'assets/images/rock-left.webp';
    } else if (playerChoice == 1) {
        playerImage.src = 'assets/images/paper-left.webp';
    } else if (playerChoice == 2) {
        playerImage.src = 'assets/images/scissors-left_1.webp';
    }
}

/**
 * The computerImgDisplay function. This takes the randomly generated
 * option from the computer and displays it in the computer image circle
 */
function computerImgDisplay() {
    if (computerChoice == 0) {
        computerImage.src = 'assets/images/rock-left.webp';
    } else if (computerChoice == 1) {
        computerImage.src = 'assets/images/paper-left.webp';
    } else if (computerChoice == 2) {
        computerImage.src = 'assets/images/scissors-left_1.webp';
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

/**
 * Restart button. Resets the values of the player and computers score.
 */
document.getElementById('restart').addEventListener('click', function() {
    location.reload();
});


/**
 * First to 5 function. This checks if one of the players have reached 
 * 5 wins, if so the game ends.
 */
function checkScore () {
    if (parseInt(document.getElementById('wins').innerText) === 5) {
        briefRules.innerHTML = ''
        resultText.innerHTML = 'Congratulations! You are the rock, paper, scissors champion! <br> Click the refresh button to play again!';
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    } else if (parseInt(document.getElementById('losses').innerText) === 5) {
        briefRules.innerHTML = ''
        resultText.innerHTML = 'Better luck next time! <br> Click the refresh button to play again!';
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
}