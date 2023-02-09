let computerSelection;

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
    let playerCount = 0;
    let compCount = 0;
    let tieCount = 0;
        
    let result = playRound(playerSelection, getComputerChoice());
    
    if (result == "You Win!") {
        playerCount++;
    } else if (result == "You Lose!") {
        compCount++;
    } else if (result == "You Tied!") {
        tieCount++;
    }
    console.log("Wins: " + playerCount + ", Losses: " + compCount + ", Ties:" + tieCount);       
}

const btnRock = document.querySelector('#Rock');
btnRock.addEventListener('click', function(){game('Rock');});

const btnPaper = document.querySelector('#Paper');
btnPaper.addEventListener('click', function(){game('Paper');});

const btnScissors = document.querySelector('#Scissors');
btnScissors.addEventListener('click', function(){game('Scissors');});

const container = document.querySelector('#DisplayResults');
const singleResult = document.createElement('div');
let playerSelection = 'Paper';
let result = 'you win!';
singleResult.textContent = `Computer Chose: ${computerSelection}, Player Chose: ${playerSelection}.  ${result}`;
container.appendChild(singleResult);



