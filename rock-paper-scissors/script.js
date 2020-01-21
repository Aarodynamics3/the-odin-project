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
        playerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    } else {
        computerScore++;
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

// Runs 5 games of rps.
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors.");
        let computerSelection = computerPlay();
        console.log(playRound(computerSelection, playerSelection));
    }
    if (playerScore > computerScore) {
        console.log("Player wins with a score of " + playerScore + " to " + computerScore);
    } else if (computerScore > playerScore) {
        console.log("Computer wins with a score of " + computerScore + " to " + playerScore);
    } else {
        console.log("It is a tie with a score of " + playerScore + " to " + computerScore);
    }
}