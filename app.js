console.log("Hello, World!");

function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 1 / 3) return "rock";
  else if (choice > 1 / 3 && choice <= 2 / 3) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("make your choice").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

let round = 1;
while (humanScore < 5 && computerScore < 5) {
  console.log(`Round ${round}`);
  console.log(`Results:   Human - ${humanScore}   Computer - ${computerScore}`);
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("tie");
      continue;
    } else if (computerChoice == "scissors") {
      console.log("human won!");
      humanScore++;
      continue;
    } else {
      //computer chose paper
      console.log("computer won!");
      computerScore++;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("human won!");
      humanScore++;
      continue;
    } else if (computerChoice == "scissors") {
      console.log("computer won!");
      computerScore++;
      continue;
    } else {
      //computer chose paper
      console.log("tie");
    }
  } else {
    //human chose scissors
    if (computerChoice == "rock") {
      console.log("computer won!");
      computerScore++;
      continue;
    } else if (computerChoice == "scissors") {
      console.log("tie");
      continue;
    } else {
      //computer chose paper
      console.log("human won!");
      humanScore++;
    }
  }
  console.log("\n\n");
}

if (humanScore == 5) {
  alert("Human won!");
} else alert("Computer won!");
