console.log("Hello World");

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
// Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        console.log("rock");
        return "rock";
    } else if (randomNumber === 2) {
        console.log("paper")
        return "paper"
    } else {
        console.log("scissors")
        return "scissors"
    }
};

// Step 3: Write the logic to get the human choice
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.

// function getHumanChoice () {
//     let choice = prompt("Please enter 'rock', 'paper' or 'scissors'.")

//     if (choice.toLowerCase() === "rock") {
//         console.log("rock")
//         return "rock"
//     } else if (choice.toLowerCase() === "paper") {
//         console.log("paper")
//         return "paper"
//     } else if (choice.toLowerCase() === "scissors") {
//         console.log("scissors")
//         return "scissors"
//     } else {
//         alert("That is not a valid option. Please choose again.")
//     }   
// };

// optimised version

function getHumanChoice() {
    let Choice = "";

    while(true) {
        Choice = prompt("Please enter 'rock', 'paper', or 'scissors'.").toLowerCase();
        if (Choice === "rock" || Choice === "paper" || Choice === "scissors") {
            return Choice
        }
        else {
            alert("That is not a valid option. Please choose again.");
        }
    }
}


// variables to keep track of score

let humanScore = 0;

let computerScore = 0;

let round = 0;

// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.



function playGame() {

    function playRound(humanChoice, computerChoice) {

        function youWin(humanChoice, computerChoice) {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore += 1;
            round += 1;
            console.log("Your score is " + humanScore + ". The computer's score is " + computerScore + ".");
        }

        function youLose(humanChoice, computerChoice) {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            computerScore += 1;
            round += 1;
            console.log("Your score is " + humanScore + ". The computer's score is " + computerScore + ".");
        }

        if (humanChoice === computerChoice) {
            console.log("That's a tie! No one gets the point.");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            youLose(humanChoice, computerChoice);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            youWin(humanChoice, computerChoice);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            youLose(humanChoice, computerChoice);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            youWin(humanChoice, computerChoice);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            youLose(humanChoice, computerChoice);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            youWin(humanChoice, computerChoice);
        }
    }

    while (round < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("-------------------------------------------------" + "\n" + "Game over. You win!")
    } else if (humanScore < computerScore) {
        console.log("-------------------------------------------------" + "\n" + "Game over. You lose!")
    } else {
        console.log("-------------------------------------------------" + "\n" + "Game over! It's a tie!")
    }

}


playGame();