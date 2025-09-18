const prompt = require("prompt");

// Start the prompt
prompt.start();

// Ask the user for ROCK, PAPER, or SCISSORS
prompt.get(["userSelection"], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  let userSelection = result.userSelection.toUpperCase();
  console.log("User chose:", userSelection);

  // Generate computer selection
  let randomNum = Math.random();
  let computerSelection = "";

  if (randomNum <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNum <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  console.log("Computer chose:", computerSelection);

  // Determine winner
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
});
