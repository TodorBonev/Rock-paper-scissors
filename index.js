document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons');
    const humanScore = document.getElementById('humanScore');
    const computerScore = document.getElementById('computerScore');
    const draws = document.getElementById('draws');
    const againButton = document.getElementById('again');
    const countLabel = document.getElementById('countLabel');
    let humanWins = 0;
    let computerWins = 0;
    let drawCount = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(humanChoice, computerChoice);
            updateScore(result);
            displayMessage(`You chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`);
        });
    });

    againButton.addEventListener('click', resetGame);

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(human, computer) {
        if (human === computer) {
            return 'It\'s a draw!';
        } else if (
            (human === 'rock' && computer === 'scissors') ||
            (human === 'paper' && computer === 'rock') ||
            (human === 'scissors' && computer === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function updateScore(result) {
        if (result === 'You win!') {
            humanWins++;
            humanScore.innerHTML = `<b>Wins: ${humanWins}</b>`;
        } else if (result === 'You lose!') {
            computerWins++;
            computerScore.innerHTML = `<b>Losses: ${computerWins}</b>`;
        } else {
            drawCount++;
            draws.innerHTML = `<b>Draws: ${drawCount}</b>`;
        }
    }

    function displayMessage(message) {
        countLabel.innerHTML = message;
    }

    function resetGame() {
        buttons.forEach(btn => btn.classList.remove('selected'));
        countLabel.textContent = '';
        humanWins = 0;
        computerWins = 0;
        drawCount = 0;
        humanScore.innerHTML = `<b>Wins: ${humanWins}</b>`;
        computerScore.innerHTML = `<b>Losses: ${computerWins}</b>`;
        draws.innerHTML = `<b>Draws: ${drawCount}</b>`;
    }
});












