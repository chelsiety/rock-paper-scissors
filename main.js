function game(){

    let scoreLimit = 5;
    let playerScore = 0;
    let computerScore = 0;

    console.log("Rock Paper Scissors Game");
    console.log(`First to reach ${scoreLimit} points wins`);
    console.log('');
  
    let playingGame = true;
    while (playingGame){
        
        if (playerScore < scoreLimit && computerScore < scoreLimit){

            let playerChoice = getPlayerChoice();  // call getPlayerChoice function
            let computerChoice = getComputerChoice();  // call getComputerChoice function
            let roundResult = playRound(playerChoice, computerChoice); // call playRound function
            
            if (roundResult === 'playerWin'){
                ++ playerScore;
            } else if (roundResult === 'computerWin'){
                ++ computerScore;
            }

            console.log(`Player Score: ${playerScore}`);
            console.log(`Computer Score: ${computerScore}`);
            console.log('');
        }
        else if (playerScore === scoreLimit){
            console.log(`Congratulations! You win the match!`)
            playingGame = false;
        }
        else if (computerScore === scoreLimit){
            console.log(`Game over! Computer wins the match!`);
            playingGame = false;
        }

    }

    let play = askPlayAgain(); // call askPlayAgain function

    if (play){ 
        console.log("Restarting match. New round");
        game();
    } else {
        console.log("Ending game. Thank you for playing!");
    }
}

function getPlayerChoice(){

    let playerChoicePrompt = prompt("Type your move: ");

    // Makes the input string with only the first letter capitalized 
    let playerSelection= playerChoicePrompt.charAt(0).toUpperCase() + playerChoicePrompt.slice(1).toLowerCase(); 

    return playerSelection;
}

function getComputerChoice(){

    const moveList = ['Rock', 'Paper', 'Scissors'];

    // Get random index value to be used to access array element
    const randomIndex = Math.floor(Math.random() * moveList.length);

    // Get random item from the moveList array
    const computerSelection = moveList[randomIndex];

    return computerSelection;
}

function playRound(playerSelection, computerSelection){
   
    console.log(`Player's move: ${playerSelection}`);
    console.log(`Computer's move: ${computerSelection}`);

    if (playerSelection === computerSelection){
        console.log("It's a draw!");
        return 'tie';
    }
    // playerSelection Rock scenarios
    else if (playerSelection === 'Rock'){

        if (computerSelection === 'Scissors'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return 'playerWin';
        } else if (computerSelection === 'Paper'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            return 'computerWin';
        }
    }
    // playerSelection Paper scenarios
    else if (playerSelection === 'Paper'){

        if(computerSelection === 'Rock'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return 'playerWin';
        } else if (computerSelection === 'Scissors'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            return 'computerWin';
        }
    }
    // playerSelection Scissors scenarios
    else if (playerSelection === 'Scissors'){

        if (computerSelection === 'Paper'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return 'playerWin';
        } else if (computerSelection === 'Rock'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            return 'computerWin';
        }
    }
}

function askPlayAgain(){

let playAgain = prompt(`
Do you want to play again? 
Press Y to play again 
Press any other key to stop playing`);

// .startswith("Y") returns Boolean value True if input starts with "Y"
let playAgainAnswer = playAgain.toUpperCase().startsWith("Y");
return playAgainAnswer;
}

// game()