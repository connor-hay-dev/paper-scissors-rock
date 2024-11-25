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

getComputerChoice();

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
    let choice = "";

    while(true) {
        choice = prompt("Please enter 'rock', 'paper', or 'scissors'.").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            console.log(choice)
            return choice
        }
        else {
            alert("That is not a valid option. Please choose again.");
        }
    }
}

getHumanChoice();
