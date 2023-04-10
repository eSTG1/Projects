'use strict';

/////////// Game LOGIC //////

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//  console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number! ⛔️';
    displayMessage('No number! ⛔️');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Corect Number! 🎉';
    displayMessage('Corect Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      // IMPLEMENTARE HIGHSCORE
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? 'Your number is too high! 📈'
      //     : 'Your number is too low! 📉';
      displayMessage(
        guess > secretNumber
          ? 'Your number is too high! 📈'
          : 'Your number is too low! 📉'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game 😞 ';
      displayMessage('You lost the game 😞 ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//MAKING AGAIN BUTTON

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
