console.log("Hello World");

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

let humanScore = 0;

let computerScore = 0;

let round = 0;


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;

    const results = document.querySelector("#results");
    results.innerHTML = "";

    document.querySelector("#rock").disabled = false;
    document.querySelector("#paper").disabled = false;
    document.querySelector("#scissors").disabled = false;

    const welcome = document.createElement("p");
    welcome.textContent = "Game reset. Ready to play again!";
    results.appendChild(welcome);
}


function playRound(humanChoice, computerChoice) {
    const results = document.querySelector("#results")

    function addMessageToResults(text) {
        const p = document.createElement("p");
        p.textContent = text;
        results.appendChild(p);
    }

    function youWin(humanChoice, computerChoice) {
        addMessageToResults(`You win! ${humanChoice} beats ${computerChoice}!`)
        humanScore += 1;
        round += 1;
        addMessageToResults(`Your score is ${humanScore}. The computer's score is ${computerScore}.`)
    }

    function youLose(humanChoice, computerChoice) {
        addMessageToResults(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
        round += 1;
        addMessageToResults(`Your score is ${humanScore}. The computer's score is ${computerScore}.`)
    }

    function tie(humanChoice, computerChoice) {
        addMessageToResults(`It's a tie!`);
        addMessageToResults(`Your score is ${humanScore}. The computer's score is ${computerScore}.`)
    }

    if (humanChoice === computerChoice) {
        tie(humanChoice, computerChoice);
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

    if (humanScore === 5 || computerScore === 5) {
        addMessageToResults(`-------------------------------------------------`);
        if (humanScore > computerScore) {
            addMessageToResults(`Game over. You win!`);
        } else if (humanScore < computerScore) {
            addMessageToResults(`Game over. You lose!`);
        } else {
            addMessageToResults(`Game over. It's a tie!`);
        }
    }

};

document.querySelector("#rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.querySelector("#paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
document.querySelector("#restart").addEventListener("click", resetGame);