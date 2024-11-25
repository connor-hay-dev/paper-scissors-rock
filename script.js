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
}

getComputerChoice();

