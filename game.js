// Rock Paper Scissors Game

function getComputerChoice() {
    const compPicks = ["rock", "paper", "scissors"]
    compPick = compPicks[Math.random()*(3-1)+1]
    console.log(compPick)
}