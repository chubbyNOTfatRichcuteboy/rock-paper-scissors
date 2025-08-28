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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const div = document.querySelector("#gameplay");

    function playRound(humanChoice, computerChoice) {
        function check() {
            if (humanScore === 5 || computerScore === 5) {
                const win = document.querySelector('#win');
                div.remove();
                win.textContent = `Game over! Final score 
                    ${humanScore}:${computerScore}`;
        }}

        hc = humanChoice.toLowerCase();
        if (humanChoice.toLowerCase() === computerChoice) {
            return("tie");
        } else {
            if (hc === "rock" && computerChoice === "scissors") {
                humanScore++;
                check();
                return "win";
            } else if (hc === "paper" && computerChoice === "rock") {
                humanScore++;
                check();
                return "win";
            } else if (hc === "scissors" && computerChoice === "paper") {
                humanScore++;
                check();
                return "win";
            } else {
                computerScore++;
                check();
                return("lose");
            }
        }

    }

    const choices = document.querySelectorAll(".choice");
    const pscore = document.querySelector("#pscore");
    const cscore = document.querySelector("#cscore");
    const uC = document.querySelector("#userChoice");
    const cC = document.querySelector("#computerChoice");
    const roundWin = document.querySelector("#roundWin");

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            console.log(choice.id);
            let humanChoice = choice.id;
            let computerChoice = getComputerChoice();
            let roundResult = playRound(humanChoice, computerChoice);

            roundWin.textContent = `You ${roundResult}`;
            uC.textContent = `You chose ${humanChoice}`;
            cC.textContent = `The computer chose ${computerChoice}`;
            pscore.textContent = `Your score: ${humanScore}`;
            cscore.textContent = `Computer score: ${computerScore}`;
        })
    })
}

playGame();






