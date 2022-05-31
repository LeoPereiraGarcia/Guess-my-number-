'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 10;

document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 10;
*/

// NOW WE ARE GOING TO STAR DEVELOPING THE APP STEP BY STEP

// 1- The first scenario it's always to assume there is no input and so respond to that(in this case with a message in the console)-->First 'if'

// 2- Implementing the game logic(how the game works), we have 3 scenarios: correct number, too low, too high. First we need to define the secret number

// After setting the secret number we have to compare it with the user's guess.

//3- Everytime you guess a wrong number, your score has to decrease

//4- When the score hits 0 game should end(if inside another if checking when score hits 0)

//Math.random gives you a random number between 0 and 1, we multiply times 20 and sum 1 so it gives a random number between 1 and 20. Math.trunc eliminates decimals of Math.random
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //it's a let because this number will decrease each time the guess is wrong(either too high or to low)

let highscore = 0;

//When there is too many duplicate codes (in our case "document.querySelector('.message').textContent" is repeated 5 times troughout the code we can create a function to condense it all and then just call it when we need to-->DRY principle)

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //We store the input value so we can then compare it with the secret number
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input:
  if (!guess) {
    //document.querySelector('.message').textContent = 'Not a number 🚫';

    displayMessage('Not a number 🚫');

    //When players wins:
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct number 🏆';
    displayMessage('Correct number 🏆');
    document.querySelector('.number').textContent = secretNumber;

    //Manipulate CSS style:
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Check if your score is higher than the previous one, then it will be your new 'highscore'

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      highscore = highscore;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Refactoring the code(see below original code with the logic, here we "clean" it in order to apply the DRY principle, we condense two very similar codes in just one)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too high 🙁 ' : 'Too low 🙁';
      displayMessage(guess > secretNumber ? 'Too high 🙁 ' : 'Too low 🙁');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'GAME OVER ❌';
      displayMessage('GAME OVER ❌');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// //When guess is too high:

// }else if (guess > secretNumber) {
//     if (score > 1) {
//       //greater than 1, otherwise at 0 you still have another chance to guess
//       document.querySelector('.message').textContent = 'Too high 😱';
//       score--; //decrease the score by one
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER ❌';
//       document.querySelector('.score').textContent = 0; //without this score remains on 1 even after you loss
//     }

//     //When guess is too low:
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low 🙁 ';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER ❌';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

//Implementing "again" button  functionality(coding challenge #1)

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
});
