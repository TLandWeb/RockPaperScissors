let computerSelection;
let playerCount = 0;
let compCount = 0;
let tieCount = 0;

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {
        computerSelection = "Rock";
        return computerSelection;
    } else if (number == 1) {
        computerSelection = "Paper";
        return computerSelection;
    } else {
         computerSelection = "Scissors";
         return computerSelection;
    }
}

function playRound(play, comp){
    if (comp == play) {
        let result = "You Tied!";
        return result;
    } else if (play == "Rock") {
        if (comp == "Scissors") {
            let result = "You Win!";
            return result;
        } else {
            let result = "You Lose!";
            return result;
        }
    } else if (play == "Paper"){
        if (comp == "Rock") {
            let result = "You Win!";
            return result;
        } else {
            let result = "You Lose!";
            return result;
        }
    } else if (play == "Scissors") {
        if (comp == "Paper") {
            let result = "You Win!";
            return result;
        } else {
            let result = "You Lose!";
            return result;
        }
    }
}

function game(playerSelection){
    let result = playRound(playerSelection, getComputerChoice());
    const singleResult = document.createElement('div');
    singleResult.textContent = `${playerSelection} VS ${computerSelection}! ${result}`;
    container.appendChild(singleResult);
    
    if (result == "You Win!") {
        playerCount++;
    } else if (result == "You Lose!") {
        compCount++;
    } else if (result == "You Tied!") {
        tieCount++;
    }

    winResults.textContent = `Wins: ${playerCount}, Losses: ${compCount}, Ties: ${tieCount}`;   

    if (playerCount == 5 || compCount == 5){
        const finalWinner = document.createElement('div');
        if (playerCount == 5){
            finalWinner.textContent = "5 Time Winner, Chicken Dinner!";
        } else {
            finalWinner.textContent = "5 Time Loser, What a Hooser!"
        }
        winResults.appendChild(finalWinner);
    }
}

const btnRock = document.querySelector('#Rock');
btnRock.addEventListener('click', function(){game('Rock');});

const btnPaper = document.querySelector('#Paper');
btnPaper.addEventListener('click', function(){game('Paper');});

const btnScissors = document.querySelector('#Scissors');
btnScissors.addEventListener('click', function(){game('Scissors');});

const container = document.querySelector('#DisplayResults');

const winResults = document.querySelector('#WinCount');



