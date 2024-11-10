const words = ['JOKES', 'HOUSE', 'SUGAR', 'STARS', 'BOOKS', 'ALBUM', 'BOARD', 'COVER', 'CRAFT', 'TASTE'];
let currentWord = '';
let displayedWord = [];
let attemptsLeft = 5;
let gameActive = true;

function initializeGame() {
    attemptsLeft = 5;
    gameActive = true;
    document.getElementById('attempts-left').textContent = attemptsLeft;
    document.getElementById('new-game').style.display = 'none';
    
    currentWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = Array(currentWord.length).fill('_');
    
    let revealedCount = 0;
    while (revealedCount < 2) {
        const randomIndex = Math.floor(Math.random() * currentWord.length);
        if (displayedWord[randomIndex] === '_') {
            displayedWord[randomIndex] = currentWord[randomIndex];
            revealedCount++;
        }
    }
    
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';
    displayedWord.forEach(letter => {
        const letterBox = document.createElement('div');
        letterBox.className = 'letter-box';
        letterBox.textContent = letter;
        wordContainer.appendChild(letterBox);
    });
}

function updateDisplay() {
    const boxes = document.querySelectorAll('.letter-box');
    boxes.forEach((box, index) => {
        box.textContent = displayedWord[index];
    });
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'block';
    document.getElementById('new-game').style.display = 'block';
}

document.getElementById('check-button').addEventListener('click', () => {
    if (!gameActive) return;
    
    const input = document.getElementById('letter-input');
    const letter = input.value.toUpperCase();
    input.value = '';
    
    if (!letter) return;
    
    let letterFound = false;
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter && displayedWord[i] === '_') {
            displayedWord[i] = letter;
            letterFound = true;
        }
    }
    
    if (!letterFound) {
        attemptsLeft--;
        document.getElementById('attempts-left').textContent = attemptsLeft;
    }
    
    updateDisplay();
    
    if (!displayedWord.includes('_')) {
        gameActive = false;
        showPopup('CONGRATULATION. You have guessed the correct word!');
    } else if (attemptsLeft === 0) {
        gameActive = false;
        showPopup(`GAME OVER. The correct word was: ${currentWord}`);
    }
});

document.getElementById('popup-close').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('new-game').addEventListener('click', initializeGame);

document.addEventListener('DOMContentLoaded', initializeGame);

document.getElementById('letter-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('check-button').click();
    }
});
window.addEventListener("load", start, false);