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

function getHumanChoice()
{
    return prompt("Enter input").toLowerCase();
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == "rock")
    {
        if(computerChoice == "paper")
            console.log("Computer wins");
        else if(computerChoice == "scissors")
            console.log("Human Wins");
        else
            console.log("Tie!");
    }
    else if(humanChoice == "paper")
    {
        if(computerChoice == "scissors")
            console.log("Computer wins");
        else if(computerChoice == "rock")
            console.log("Human Wins");
        else
            console.log("Tie!");
    }
    else
    {
        if(computerChoice == "rock")
            console.log("Computer wins");
        else if(computerChoice == "paper")
            console.log("Human Wins");
        else
            console.log("Tie!");
    }
}

playRound(getHumanChoice(), getComputerChoice());