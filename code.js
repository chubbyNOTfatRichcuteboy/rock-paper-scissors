function getComputerChoice() {
    const num = Math.random() * 100;
    let choice;
    if (num < 33.3) {
        choice = "rock";
    } else if (num < 66.6) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    console.log(choice);
    return(choice);
}

function getHumanChoice() {
    let input = prompt("Choose either rock, paper, or scissors: ");
    return(input);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        hc = humanChoice.toLowerCase()
        if (humanChoice.toLowerCase() === computerChoice) {
            console.log("Tie");
        } else {
            if (hc === "rock" && computerChoice === "scissors") {
                humanScore++;
                console.log("You win");
            } else if (hc === "paper" && computerChoice === "rock") {
                humanScore++;
                console.log("You win");
            } else if (hc === "scissors" && computerChoice === "paper") {
                humanScore++;
                console.log("You win");
            } else {
                computerScore++;
                console.log("You lose");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}


playGame()