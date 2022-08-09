let roundInfo = {
    playerChoice:"",
    computerChoice: "",
    results:"",
    playerScore:0,
    computerScore:0,
}
//returns number between 1 and upper
function random(upper)
{
    return Math.floor(Math.random() * upper) + 1;
}

function formatString(str)
{
    char = str[0].toUpperCase();
    let rest = str.slice(1,str.length).toLowerCase();
    return char + rest;
     
}

function getComputerChoice()
{
    let choice = random(5);

    switch(choice) {
        case 1:
            return "Paper"
        case 2: 
            return "Rock"
        case 3:
            return "Scissors"
        case 4:
            return "Lizard"
        case 5:
            return "Spock"
    }
}

function playRound(player)
{  
    
    let computer = getComputerChoice();
    
    let str;
    let win = false;

    if(player === computer)
        return "Tie!";

    switch(player)
    {
        case "Paper":
        switch(computer){
            case "Rock":
                str = "covers";
                win = true;
                break;
            case "Scissors":
                str = "cuts";
                win = false;
                break;
            case "Lizard":
                str = "eats"
                win = false;
                break;
            case "Spock":
                str = "disproves"
                win = true;
                break;
        }
    break;
        case "Rock":
        switch(computer){
            case "Paper":
                str = "covers";
                win = false;
                break;
            case "Scissors":
                str = "crushes";
                win = true;
                break;
            case "Lizard":
                str = "crushes"
                win = true;
                break;
            case "Spock":
                str = "vaporizes"
                win = false;
                break;
        }
    break;
        case "Scissors":
        switch(computer){
            case "Paper":
                str = "cuts";
                win = true;
                break;
            case "Rock":
                str = "crushes"
                win = false;
                break;
            case "Lizard":
                str = "cuts"
                win = true;
                break;
            case "Spock":
                str = "smashes"
                win = false;
                break;
        }
    break;
        case "Lizard":
        switch(computer){
            case "Paper":
                str = "eats";
                win = true;
                break;
            case "Rock":
                str = "crushes"
                win = false;
                break;
            case "Scissors":
                str = "cuts"
                win = true;
                break;
            case "Spock":
                str = "poisons"
                win = true;
                break;
        }
    break;
        case "Spock":
        switch(computer){
            case "Paper":
                str = "disproves";
                win = false;
                break;
            case "Rock":
                str = "vaporizes"
                win = true;
                break;
            case "Scissors":
                str = "smashes"
                win = true;
                break;
            case "Lizard":
                str = "poisons"
                win = false;
                break;
        }
    }
    roundInfo.playerChoice = `You chose ${player}.`;
    roundInfo.computerChoice = `Computer chose ${computer}.`;
   
    
    if (win)
    {
        roundInfo.results = `You win! ${player} ${str} ${computer}.`; 
        roundInfo.playerScore++;
        return roundInfo; 
    }
    else if (!win)
    {
        roundInfo.results = `You lose! ${computer} ${str} ${player}.`
        roundInfo.computerScore++;
        return roundInfo;
    }
}

    let player = document.querySelector(".player");
    let computer = document.querySelector(".computer");
    let results = document.querySelector(".roundResults");
    let playerScore = document.querySelector(".playerScore");
    let computerScore = document.querySelector(".computerScore");
    let game = document.querySelector(".gameResults");

function playGame()
{
    const buttons = document.querySelectorAll('.playBtn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            resetButton.innerHTML = "";
            playRound(button.name);
            player.textContent = roundInfo.playerChoice;
            computer.textContent = roundInfo.computerChoice;
            results.textContent = roundInfo.results;
            playerScore.textContent = `Your Score: ${roundInfo.playerScore}`;
            computerScore.textContent = `Computer Score: ${roundInfo.computerScore}`;
            

            if (roundInfo.playerScore >= 5){
                game.textContent = "You won the game! Press reset to play again.";   
                resetButton.innerHTML = "Reset";

            }
            else if (roundInfo.computerScore >= 5)
            {
                game.textContent = "Sorry. You lost. Press reset to try again.";
                resetButton.innerHTML = "Reset";
            }
        })
    });
    
}

const resetButton = document.querySelector(".resetBtn");

resetButton.addEventListener('click', () => {
    player.textContent = "";
    computer.textContent = "";
    results.textContent = "";
    roundInfo.playerScore = 0;
    roundInfo.computerScore = 0;
    playerScore.textContent = "";
    computerScore.textContent = "";
    game.textContent = "";
    resetButton.innerHTML = "";
});

playGame();






