document.addEventListener('DOMContentLoaded', function() {
  const getComputerChoice = () =>  {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  const playRound = (playerChoice, cpuChoice) => {
    const playerChoiceLowerCase = playerChoice.toLowerCase();
    const cpuChoiceLowerCase = cpuChoice.toLowerCase();
  
    if (playerChoiceLowerCase === cpuChoiceLowerCase) {
      return "It's a tie";
    } else if (
      (playerChoiceLowerCase === "rock" && cpuChoiceLowerCase === "scissors") ||
      (playerChoiceLowerCase === "paper" && cpuChoiceLowerCase === "rock") ||
      (playerChoiceLowerCase === "scissors" && cpuChoiceLowerCase === "paper")
    ) {
      return `You win! ${playerChoice} beats ${cpuChoice}`;
    } else {
      return `You lose! ${cpuChoice} beats ${playerChoice}`;
    }
  }
  

  const buttons = document.querySelectorAll('button');
  const resultsDiv = document.querySelector('#results');
  const scoreDiv = document.querySelector('#score');

  let playerScore = 0;
  let cpuScore = 0;

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const playerChoice = button.textContent.toLowerCase();
      const cpuChoice = getComputerChoice();
      const winner = playRound(playerChoice, cpuChoice);

      if (winner.includes('win')) {
        playerScore++;
      } else if (winner.includes('lose')) {
        cpuScore++;
      }

      resultsDiv.textContent = `You chose ${playerChoice}. CPU chose ${cpuChoice}. ${winner}`;
      scoreDiv.textContent = `Player: ${playerScore} - CPU: ${cpuScore}`;

      if (playerScore === 5 || cpuScore === 5) {
        const gameWinner = playerScore === 5 ? 'Player' : 'CPU';
        resultsDiv.textContent = `${gameWinner} wins the game!`;
        buttons.forEach(button => button.disabled = true); // Disable buttons to prevent further gameplay
      }
    });
  });
});


