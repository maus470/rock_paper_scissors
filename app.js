let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let choice = Math.random();

    if (choice <= 1 / 3) return "rock";
    else if (choice > 1 / 3 && choice <= 2 / 3) return "paper";
    else return "scissors";
}

let output = document.querySelector(".output");
let score = document.querySelector(".score");

function updateText(result) {
    switch (result) {
        case "human":
            output.textContent = "Human won!";
            break;
        case "computer":
            output.textContent = "Computer won!";
            break;
        case "tie":
            output.textContent = "It was a tie!";
            break;
        default:
            output.textContent = "error";
    }
    score.textContent = `Round: ${round}   Results:   Human - ${humanScore}   Computer - ${computerScore}`;
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", e => {
    let target = e.target;
    switch (target.id) {
        case "rock":
            updateText(play("rock"));
            break;
        case "paper":
            updateText(play("paper"));
            break;
        case "scissors":
            updateText(play("scissors"));
            break;
    }
});

function play(humanChoice) {
    round++;

    let computerChoice = getComputerChoice();
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            return "tie";
        } else if (computerChoice == "scissors") {
            humanScore++;
            return "human";
        } else {
            //computer chose paper
            computerScore++;
            return "computer";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            return "human";
        } else if (computerChoice == "scissors") {
            computerScore++;
            return "computer";
        } else {
            //computer chose paper
            return "tie";
        }
    } else {
        //human chose scissors
        if (computerChoice == "rock") {
            computerScore++;
            return "computer";
        } else if (computerChoice == "scissors") {
            return "tie";
        } else {
            //computer chose paper
            humanScore++;
            return "human";
        }
    }
}
