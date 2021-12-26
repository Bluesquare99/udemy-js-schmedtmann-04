'use strict';

/*
console.log(document.querySelector('.message').textContent);
console.log();
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If there wasn't a guess, it'll register as 0 or otherwise as a falsy value
  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high or too low
  } else if (guess > secretNumber || guess < secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        displayMessage('📈 Too high!');
      } else if (guess < secretNumber) {
        displayMessage('📉 Too low!');
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  // Restore initial values of the score and secretnumber variables
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // Restore initial conditions of message, number, score, and guess input fields
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Restore original background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
