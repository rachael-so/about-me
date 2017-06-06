'use strict';

var username = prompt('Please enter a username');
console.log('when prompted for username, user entered' + username);

confirm('Hi ' + username + '! The next five questions will ask you to guess whether the following statements about myself are true or false. If they are true enter "YES" if they are false enter "NO"');
console.log('the user confirmed the rules... the game will now begin');

//Question 1
var answer1 = prompt('I was born in Korea.').toUpperCase();
switch (answer1) {
  case 'YES':
    alert('Incorrect! I am Korean but I was born and raised in the beautiful state of Washington.');
    console.log('user responded "YES" to question 1: Incorrect');
    break;

  case 'NO':
    alert('Correct! I am Korean but I was born and raised in the beautiful state of Washington.');
    console.log('user responded "NO" to question 1: Correct');
    break;

  default: alert('ERROR! Make sure to enter either "YES" or "NO"');
}

//Question 2
var answer2 = prompt('I am currently a student at Georgetown University.').toUpperCase();
switch (answer2) {
  case 'YES':
    alert('Correct! I just completed my 1st year at GU.');
    console.log('user responded "YES" to question 2: Correct');
    break;

  case 'NO':
    alert('Incorrect! I just completed my 1st year at GU.');
    console.log('user responded "NO" to question 2: Incorrect');
    break;

  default: alert('ERROR! Make sure to enter either "YES" or "NO"');
}

//Question 3
var answer3 = prompt('I have a dog named Happy!').toUpperCase();
switch (answer3) {
  case 'YES':
    alert('Correct! My dad got Happy for me when I was in 3rd grade after I persistently asked for a dog.');
    console.log('user responded "YES" to question 3: Correct');
    break;

  case 'NO':
  alert('Incorrect! My dad got Happy for me when I was in 3rd grade after I persistently asked for a dog.');
  console.log('user responded "NO" to question 3: Incorrect');
    break;

  default: alert('ERROR! Make sure to enter either "YES" or "NO"');
}

//Question 4
var answer4 = prompt('I have visited Japan, Australia, France, and Italy').toUpperCase();
switch (answer4) {
  case 'YES':
  alert('Incorrect! These are all places I really want to visit.');
  console.log('user responded "YES" to question 4: Incorrect');
    break;

  case 'NO':
  alert('Correct! These are all places I really want to visit.');
  console.log('user responded "NO" to question 4: Correct');
    break;

  default: alert('ERROR! Make sure to enter either "YES" or "NO"');
}

//Question 5
var answer5 = prompt('I am very excited to work in computer science one day!').toUpperCase();
switch (answer5) {
  case 'YES':
  alert('Correct! I really want to become a good coder and use my skills to do something useful.');
  console.log('user responded "YES" to question 5: Correct');
    break;

  case 'NO':
  alert('Incorrect! Of course I am excited! I really want to become a good coder and use my skills to do something useful.');
  console.log('user responded "NO" to question 5: Incorrect')
    break;

  default: alert('ERROR! Make sure to enter either "YES" or "NO"');
}

//THE END
alert('You have completed the quiz. Thank you ' + username + ' for getting to know me! Maybe next time I can get to know you!')
