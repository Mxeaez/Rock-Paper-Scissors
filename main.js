let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let random = Math.random();
    let computerChoice = "";
    if(random < .33)
        computerChoice = "rock";
    else if(random < .66)
        computerChoice = "paper";
    else
        computerChoice = "scissors";

    return computerChoice;
}

function playRound(humanChoice)
{
    computerChoice = getComputerChoice();
    if(humanChoice == "rock")
    {
        if(computerChoice == "paper")
            computerScore++;
        else if(computerChoice == "scissors")
            humanScore++;
        else
            console.log("Tie!");
    }
    else if(humanChoice == "paper")
    {
        if(computerChoice == "scissors")
            computerScore++;
        else if(computerChoice == "rock")
            humanScore++;
        else
            console.log("Tie!");
    }
    else
    {
        if(computerChoice == "rock")
            computerScore++;
        else if(computerChoice == "paper")
            humanScore++;
        else
            console.log("Tie!");
    }

    let humanScoreElement = document.querySelector('#human-score');
    let computerScoreElement = document.querySelector('#computer-score');
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.textContent);
    });
});