// Rock Paper Scissors Game

function getComputerChoice() {
    const compPicks = ["Rock", "Paper", "Scissors"]
    let compPick = compPicks[Math.floor(Math.random()*(3))]
    console.log(compPick)
}

function playGame(playerChoice, compChoice) {
    const pChoice = playerChoice.toLowerCase()
    const cChoice = compChoice.toLowerCase()
    if (pChoice === cChoice) {
        console.log(`You Tie! ${playerChoice} ties with ${compChoice}`)
    } else if (pChoice === "rock") {
        if (cChoice === "scissors") {
            console.log(`You Win! ${playerChoice} beats ${compChoice}`)
        } else {
            console.log(`You Lose! ${compChoice} beats ${playerChoice}`)
        }
    } else if (pChoice === "paper") {
        if (cChoice === "rock") {
            console.log(`You Win! ${playerChoice} beats ${compChoice}`)
        } else {
            console.log(`You Lose! ${compChoice} beats ${playerChoice}`)
        }
    } else if (pChoice === "scissors") {
        if (cChoice === "paper") {
            console.log(`You Win! ${playerChoice} beats ${compChoice}`)
        } else {
            console.log(`You Lose! ${compChoice} beats ${playerChoice}`)
        }
    }
}