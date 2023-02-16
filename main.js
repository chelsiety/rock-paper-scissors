

const result_h3 = document.querySelector('#display-info');

const selectionButtons= document.querySelectorAll('.button-img');

game();

function game(){
    let scoreLimit = 5;
    let playerScore = 0;
    let computerScore = 0;

    // Event listener
    selectionButtons.forEach(button => button.addEventListener('click', playGame));

    function playGame(buttonClicked){
        const playerChoice = buttonClicked.target.id;
        displayPlayerChoice();

        const computerChoice = getComputerChoice();
        displayComputerChoice();

        

        const roundWinner = playRound(playerChoice, computerChoice);

    //  const roundWinnerInfo = 
        displayRoundWinner(roundWinner);




        // Increment score and display scoreboard
        const playerScoreBoard_span = document.querySelector('#display-player-score');
        const computerScoreBoard_span = document.querySelector('#display-computer-score');
        if (roundWinner === 'playerWin'){
            ++ playerScore;
            playerScoreBoard_span.textContent = playerScore;
        }
        else if (roundWinner === 'computerWin'){
            ++ computerScore;
            computerScoreBoard_span.textContent = computerScore;
        }
        
        // Show the final game results when one player reaches the score limit
        if (playerScore === scoreLimit || computerScore === scoreLimit){
            checkOverAllWinner()
        }



    function checkOverAllWinner(){
        if (playerScore === scoreLimit || computerScore === scoreLimit){
            // MODAL -- css html
            /* IF PLAYERSCORE > COMPUTERSCORE {
                innerText MESSAGE 1 - Congratulations!
                INNTERTEXT MESSAGE 2 - You won the match
            }
            IF COMPUTERSCORE > PLAYERSCORE
                INNERTEXT MESSAGE 1 - GAME OVER!
                INNTERTEXT MESSAGE 2 - You won the match
            
            play again button 
            window.location.reload
            */
        }

    }

    function displayPlayerChoice(){
        let playerChoiceImage = document.querySelector('#display-player-img');
        playerChoiceImage.src = `images/display-img-${playerChoice}.svg`;

        // Change image display property to block
        playerChoiceImage.style.display = 'block';
        
    }

    function displayComputerChoice(){
        let computerChoiceImage = document.querySelector('#display-computer-img');
        computerChoiceImage.src = `images/display-img-${computerChoice}.svg`;

        // Change image display property to block
        computerChoiceImage.style.display = 'block';
    }



    function displayRoundWinner(roundWinner){

        const info = document.querySelector('#info');
        info.classList.add('result');

        if (roundWinner === 'draw'){
            info.textContent = "DRAW";
        }
        else if (roundWinner === 'playerWin'){
            info.textContent = "YOU WIN";
    
        
        } else if (roundWinner === 'computerWin'){
            info.textContent = "YOU LOSE";        
        } 
    }

    function getComputerChoice(){
        const moveList = ['rock', 'paper', 'scissors'];
        // Get random index value to be used to access array element
        const randomIndex = Math.floor(Math.random() * moveList.length);
        // Get random item from the moveList array
        const computerSelection = moveList[randomIndex];
        return computerSelection;
    };


    function playRound(playerSelection, computerSelection){
        if (playerSelection === computerSelection){
            return 'draw';
        } 
        // playerSelection Rock scenarios
        else if (playerSelection === 'rock'){
            if (computerSelection === 'scissors'){
                return 'playerWin';
            } else if (computerSelection === 'paper'){
                return 'computerWin';
            }
        }
        // playerSelection Paper scenarios
        else if (playerSelection === 'paper'){
            if(computerSelection === 'rock'){
                return 'playerWin';
            } else if (computerSelection === 'scissors'){
                return 'computerWin';
            }
        }
        // playerSelection Scissors scenarios
        else if (playerSelection === 'scissors'){
            if (computerSelection === 'paper'){
                return 'playerWin';
            } else if (computerSelection === 'rock'){
                return 'computerWin';
            }
        }
    }

    }
}


/*
function game(e){

    let scoreLimit = 5;  
    let playerScore = 0;
    let computerScore = 0;

    let playingGame = true; 

    while (playingGame){

        if (playerScore < scoreLimit && computerScore < scoreLimit) {
            const playerChoice = e.target.id;
            const computerChoice = getComputerChoice();

   
            const roundWinner = playRound(playerChoice, computerChoice);


            const info = document.querySelector('#info');
            info.classList.add('result');

            console.log('player:' + playerChoice)
            console.log('computer:' +computerChoice)
        
            if (roundWinner === 'draw'){
                info.textContent = "DRAW";
            }
            else if (roundWinner === 'playerWin'){
                ++ playerScore;
                info.textContent = "YOU WIN";
            
            } else if (roundWinner === 'computerWin'){
                ++ computerScore;
                info.textContent = "YOU LOSE";
        
            } 

        }
        else if (playerScore === scoreLimit){
            playingGame = false;
        }
        else if (computerScore === scoreLimit){
            playingGame = false;
        }
       
    }

    
}

function getComputerChoice(){
    const moveList = ['rock', 'paper', 'scissors'];
    // Get random index value to be used to access array element
    const randomIndex = Math.floor(Math.random() * moveList.length);
    // Get random item from the moveList array
    const computerSelection = moveList[randomIndex];
    return computerSelection;
};

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'draw';
    } 
    // playerSelection Rock scenarios
    else if (playerSelection === 'rock'){
        if (computerSelection === 'scissors'){
            return 'playerWin';
        } else if (computerSelection === 'paper'){
            return 'computerWin';
        }
    }
    // playerSelection Paper scenarios
    else if (playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            return 'playerWin';
        } else if (computerSelection === 'scissors'){
            return 'computerWin';
        }
    }
    // playerSelection Scissors scenarios
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'paper'){
            return 'playerWin';
        } else if (computerSelection === 'rock'){
            return 'computerWin';
        }
    }
}



*/

/*
function game(){

  
    let playingGame = true;
    while (playingGame){
        
        if (playerScore < scoreLimit && computerScore < scoreLimit){

            let playerChoice = getPlayerChoice();  // call getPlayerChoice function
            let computerChoice = getComputerChoice();  // call getComputerChoice function
            let roundResult = playRound(playerChoice, computerChoice); // call playRound function
            
         
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




function askPlayAgain(){

let playAgain = prompt(`
Do you want to play again? 
Press Y to play again 
Press any other key to stop playing`);

// .startswith("Y") returns Boolean value True if input starts with "Y"
let playAgainAnswer = playAgain.toUpperCase().startsWith("Y");
return playAgainAnswer;
}

*/


// game()
