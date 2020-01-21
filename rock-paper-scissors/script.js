let playerScore = 0;
let computerScore = 0;

// Randomly returns "rock," "paper," or "scissors."
function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    switch(rand) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }   
}

// Simulates a round of rock paper scissors.
function playRound(computerSelection, playerSelection) {
    playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    // Error handling.
    if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        alert("Incorrect input.");
        return;
    }

    if (computerSelection == playerSelection) {
        return "It's a tie!";
    } else if (doesCompWin(computerSelection, playerSelection)) {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    } else {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }
}

// Returns true if computer wins.
function doesCompWin(cInp, pInp) {
    if ((cInp == "Rock" && pInp == "Scissors")
        || (cInp == "Scissors" && pInp == "Paper")
        || (cInp == "Paper" && pInp == "Rock")) {
            return true;
    } 
    return false;
}

const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
let temp_results;
let game_score;
let temp_results_text;
let game_score_text;

// Iterate through each button.
buttons.forEach((button) => {

    // Listen for each button being clicked.
    button.addEventListener('click', (e) => {

        if (document.getElementById("temporary-results") == null
            && document.getElementById("game-scores") == null) {
                temp_results = document.createElement("div");
                game_score = document.createElement("div");
                temp_results.id = 'temporary-results';
                game_score.id = 'game-scores';
                results.appendChild(temp_results);
                results.appendChild(game_score);
                temp_results_text = document.createElement('p');
                game_score_text = document.createElement('p');
                temp_results_text.style = 'text-align: center';
                game_score_text.style = 'text-align: center';
                temp_results.appendChild(temp_results_text);
                game_score.appendChild(game_score_text);
        }
        let player_choice = button.id;
        temp_results_text.textContent = playRound(computerPlay(), player_choice);
        game_score_text.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;

        if (playerScore == 5 || computerScore == 5) {
            if (playerScore == 5) {
                alert('You win! Click ok to play again.');
            } else {
                alert('You lose! Click ok to try again.');
            }
            temp_results_text.textContent = '';
            game_score_text.textContent = '';
            playerScore = 0;
            computerScore = 0;
        }
    });

});