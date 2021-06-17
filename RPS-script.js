const gameWordsShow = document.querySelector("#gameWords");
const roundResult = document.querySelector("#round");
const roundScoreMe = document.querySelector("#roundScoreMe")
const roundScoreComputer = document.querySelector("#roundScoreComputer")
const finalResult = document.querySelector("#finalResult")
//const restartGame = document.querySelector("#resetGame")

const gameWords = ["rock", "paper", "scissors"];
const resetGame = ["reset"]

function decisions(e){
    const playerSelection = e.target.innerHTML
    const computerSelection = gameWords[Math.floor(Math.random() * gameWords.length)];
    playRound(playerSelection, computerSelection)
    totalGameScore()
}

gameWords.forEach(buttons);

function buttons (gameWord){
    const button = document.createElement("button")
    button.textContent = gameWord
    button.addEventListener("click", decisions)
    gameWordsShow.appendChild(button)
}

// RESET BUTTON TRIAL-> FAILED
// resetGame.forEach(finalButtonClick);

// function finalButtonClick (restartGameBtn){
//     const finalButton = document.createElement("finalButton")
//     finalButton.textContent = restartGame
//     finalButton.addEventListener("click", totalGameScore)
//     restartGame.appendChild(finalButton)
// }


let playerScore = 1
let computerScore = 1

function playRound(playerSelection, computerSelection) {     
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            roundResult.textContent = "Rock for both! Draw again."
        } else if (playerSelection === "paper") {
            roundScoreMe.textContent = playerScore++;
            roundResult.textContent = "Rock for the computer, paper for you, YOU WON THE ROUND!"
        } else if (playerSelection === "scissors") {
            roundScoreComputer.textContent = computerScore++
            roundResult.textContent = "Rock for the computer, scissors for you, YOU LOST THE ROUND..."
        };
    };
    if (computerSelection === "paper") {
        if (playerSelection === "paper") {
            roundResult.textContent = "Paper for both! Draw again."
        } else if (playerSelection === "rock") {
            roundScoreComputer.textContent = computerScore++
            roundResult.textContent = "Paper for the computer, rock for you, YOU LOST THE ROUND..."
        } else if (playerSelection === "scissors") {
            roundScoreMe.textContent = playerScore++
            roundResult.textContent = "Paper for the computer, scissors for you, YOU WON THE ROUND!"
        };
    }; 
    if (computerSelection === "scissors") {
        if (playerSelection === "scissors") {
            roundResult.textContent = "Scissors for both! Draw again."
        } else if (playerSelection === "paper") {
            roundScoreComputer.textContent = computerScore++
            roundResult.textContent = "Scissors for the computer, paper for you, YOU LOST THE ROUND..."
        } else if (playerSelection === "rock") {
            roundScoreMe.textContent = playerScore++
            roundResult.textContent = "Scissors for the computer, rock for you, YOU WON THE ROUND!"
        };
    };
};


function totalGameScore(){
    if (playerScore > 5) {
        finalResult.textContent = "You won the game!";
    } else if (computerScore > 5) {
        finalResult.textContent = "You lost, try again.";
    }
}
