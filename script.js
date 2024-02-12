const getComputerChoice = () =>  {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const playRound = (playerChoice, cpuChoice) => {
  if (playerChoice === cpuChoice) {
    return "It's a tie";
  } else if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "paper" && cpuChoice === "rock") ||
    (playerChoice === "scissors" && cpuChoice === "paper")
  ) {
    return `You win! ${playerChoice} beats ${cpuChoice}`;
  } else {
    return `You lose! ${cpuChoice} beats ${playerChoice}`;
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerPrompt = prompt('Rock, paper, or scissors?');
    
    while (playerPrompt.toLowerCase() !== 'rock' && playerPrompt.toLowerCase() !== 'paper' && playerPrompt.toLowerCase() !== 'scissors') {
      alert('Invalid choice! Please enter rock, paper, or scissors.');
      playerPrompt = prompt('Rock, paper, or scissors?');
    }

    const playerChoice = playerPrompt.toLowerCase();
    const cpuChoice = getComputerChoice().toLowerCase();

    console.log(playRound(playerChoice, cpuChoice));
  }
}

game();

