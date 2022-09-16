'use strict';
/************************************************************************************************************ 
//manipulating DOM

document.querySelector('.message').textContent = 'correct number';
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 23;
//value property for input element
console.log(document.querySelector('.guess').value);
*/

//click events, code will react to something that happens in the DOM
//event listener, event -> that happens on the page, with a function called event handler
// here we pass function value as an argument to another function just like any other value like string, number
// JS engine will call the function as soon as the event happens,
// whenever we get something from a UI like an input field, it usually is a string.

let number = Math.trunc(Math.random() * 20) + 1; // Math is an object provided by JS with methods and properties
// number is also state variable of our application
let score = 20; // state variable
//state is the current condition of the site
/*By adding a state variable we have removed a check of the DOM. We have abstracted the behavior out of the HTML so our JavaScript is more flexible */
let highscore = 0;
const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('no number');
  } else if (guess === number) {
    document.querySelector('.number').textContent = number; // now showing the secret number
    // document.querySelector('.message').textContent = 'correct number';
    displayMessage('correct number');

    document.querySelector('body').style.backgroundColor = '#60b347'; //style property then css property
    document.querySelector('.number').style.width = '30rem'; // unit also in sring
    // update the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'too high' : 'too low');
      // ternary operator will return a value
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //reassign to the state variable , not create a new variable
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score; // referencing to the score variable
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; // value of an input is always a string
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  /*now we can play tha game again without restoring th browser without executing the whole code again, this will allow us to preserve the highscore throughout the different rounds */
});

// refactored the code with functions and eliminating the duplicate code
//************************************************************************************************************
