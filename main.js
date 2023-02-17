
const selectionButtons= document.querySelectorAll('.button-img');


game();

function game(){
    let scoreLimit = 5;
    let playerScore = 0;
    let computerScore = 0;

    // Event listeners
    selectionButtons.forEach(button => button.addEventListener('click', playGame));

    function playGame(buttonClicked){
        const playerChoice = buttonClicked.target.id;
        displayPlayerChoice();

        const computerChoice = getComputerChoice();
        displayComputerChoice();

        

        const roundWinner = playRound(playerChoice, computerChoice);
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
        const endGameModal = document.querySelector('.modal');
        const gameOverText = document.querySelector('#game-over-text');
        const resultText = document.querySelector('#result-text');

        if (playerScore === scoreLimit || computerScore === scoreLimit){
            if (playerScore > computerScore){
                gameOverText.textContent = "Congratulations!";
                resultText.textContent = "You won the match";
                endGameModal.style.display = 'block';
            } else {
                gameOverText.textContent = "Game over!";
                resultText.textContent = "You lost the match";
                endGameModal.style.display = 'block';
            }
 
        }
        
        const playAgainButton = document.querySelector('#modal-play-again-button')
        playAgainButton.addEventListener('click', restartGame);

        function restartGame(){
            playerScore = 0;
            computerScore = 0;

            playerScoreBoard_span.textContent = playerScore;
            computerScoreBoard_span.textContent = computerScore;

          
            info.textContent = "First to 5 points wins the game";
            endGameModal.style.display = 'none';


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
