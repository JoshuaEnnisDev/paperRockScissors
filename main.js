
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

function playRound()
{   
    const choices = ["Paper", "Rock", "Scissors", "Lizard", "Spock"];

    do{
        player = prompt("Let's play paper rock scissors lizard spock!\nPlease enter your choice.");
        player = formatString(player);
        if(!choices.includes(player))
        {
            alert("Please check your spelling");
        }
    } while (!choices.includes(player));
    
    computer = getComputerChoice();
    
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

    
    if (win)
    {
        return `Computer chose ${computer}. You win! ${player} ${str} ${computer}.`;
    }
    else if (!win)
    {
        return `Computer chose ${computer}. You lose! ${computer} ${str} ${player}.`
    }
}

function game()
{
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++)
    {
        result = playRound();
        console.log(result);

        if (result.includes("win!"))
        {
            playerCount ++;
        }
        if (result.includes("lose!"))
        {
            computerCount ++;
        }
        console.log(`Computer score: ${computerCount}`);
        console.log(`PlayerScore: ${playerCount}`);
    }

    if (playerCount > computerCount)
    {
        console.log("You won the game.");
        
    }
    else if (computerCount > playerCount)
    {
        console.log("You lost. Try again.");
    }
    else{
        console.log("You tied.");
    }
    return;
}