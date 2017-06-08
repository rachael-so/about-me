'use strict';

var correctCount = 0;

var username = prompt('Please enter a username');
console.log('when prompted for username, user entered ' + username);

//start game
confirm('Hi ' + username + '! Welcome to my About Me page. Let\'s start out with a quick quiz about myself');
console.log('start game');

//Question 1
function question1(){
  var answer1 = prompt('My favorite color is purple.').toUpperCase();
  if (answer1 === 'YES' || answer1 === 'Y') {
    alert('Incorrect! Although I like the color purple, my favorite color is actually brown.');
    console.log('user responded "YES" to question 1: Incorrect');
  } else if (answer1 === 'NO' || answer1 === 'N') {
    alert('Correct! Although I like the color purple, my favorite color is actually brown.');
    correctCount++;
    console.log('user responded "NO" to question 1: Correct');
  } else {
    alert('ERROR! Make sure to enter either "YES" or "NO"');
  }
}

//Question 2
function question2(){
  var answer2 = prompt('I really like circles.').toUpperCase();
  if (answer2 === 'YES' || answer2 === 'Y') {
    alert('Correct! Circles are my favorite shape. I love sitting in circles.');
    correctCount++;
    console.log('user responded "YES" to question 2: Correct');
  } else if (answer2 === 'NO' || answer2 === 'N') {
    alert('Incorrect! Circles are my favorite shape. I love sitting in circles.');
    console.log('user responded "NO" to question 2: Incorrect');
  } else {
    alert('ERROR! Make sure to enter either "YES" or "NO"');
  }
}

//Question 3
function question3(){
  var answer3 = prompt('I have a dog named Happy!').toUpperCase();
  if (answer3 === 'YES' || answer3 === 'Y') {
    alert('Correct! My dad got Happy for me when I was in 3rd grade after I persistently asked for a dog.');
    correctCount++;
    console.log('user responded "YES" to question 3: Correct');
  } else if (answer3 === 'NO' || answer3 === 'N') {
    alert('Incorrect! My dad got Happy for me when I was in 3rd grade after I persistently asked for a dog.');
    console.log('user responded "NO" to question 3: Incorrect');
  } else {
    alert('ERROR! Make sure to enter either "YES" or "NO"');
  }
}

//Question 4
function question4(){
  var answer4 = prompt('I have visited Japan, Australia, France, and Italy').toUpperCase();
  if (answer4 === 'YES' || answer4 === 'Y') {
    alert('Incorrect! These are all places I really want to visit.');
    console.log('user responded "YES" to question 4: Incorrect');
  } else if (answer4 === 'NO' || answer4 === 'N') {
    alert('Correct! These are all places I really want to visit.');
    correctCount++;
    console.log('user responded "NO" to question 4: Correct');
  } else {
    alert('ERROR! Make sure to enter either "YES" or "NO"');
  }
}

//Question 5
function question5(){
  var answer5 = prompt('I am very excited to work in computer science one day!').toUpperCase();
  if (answer5 === 'YES' || answer5 === 'Y') {
    alert('Correct! I really want to become a good coder and use my skills to do something useful.');
    correctCount++;
    console.log('user responded "YES" to question 5: Correct');
  } else if (answer5 === 'NO' || answer5 == 'N') {
    alert('Incorrect! Of course I am excited! I really want to become a good coder and use my skills to do something useful.');
    console.log('user responded "NO" to question 5: Incorrect');
  } else {
    alert('ERROR! Make sure to enter either "YES" or "NO"');
  }
}

//Question 6
function question6(){
  for (var i = 0; i < 4; i++) {
    var answer6 = prompt('Can you guess how old I am? *use integers (4 tries)').toUpperCase();
    if (answer6 === '19') {
      alert('Correct! I was born in 1998.');
      i = 4;
      correctCount++;
      console.log('user correctly responded "19" to question 6: Correct');
    } else {
      if (i === 3) {
        alert('Incorrect! I was born in 1998');
      } else {
        if (answer6 < 19)
          alert('Your guess is too low!');
        if (answer6 > 19)
          alert('Your guess is too high!');
      }
      console.log('user responded "' + answer6 + '" to question 6: Incorrect');
    } //end big if/else statment
  } //end for loop
}

//Question 7
function question7(){
  var correctBreeds = ['YELLOW LABRADOR RETRIEVER', 'LABRADOR RETRIEVER', 'YELLOW LAB', 'LABRADOR', 'RETRIEVER', 'LAB', 'BICHON FRISE', 'MALTESE'];
  for (var i = 0; i < 6; i++) {
    var answer7 = prompt('Can you guess the breed of one of the dogs I have owned?').toUpperCase();
    for (var j = 0; j < correctBreeds.length; j++) {
      if (answer7 === correctBreeds[j]) {
        alert('Correct! I have had two dogs: a yellow labrador retriever and a bichon frise, maltese mix.');
        i = 6;
        correctCount++;
        console.log('user responded "' + answer7 + '" to question 7: Correct');
      }
    }
    if (i === 5) {
      alert('Incorrect! I have had two dogs: a yellow labrador retriever and a bichon frise, maltese mix.');
    } else if (i < 5) {
      alert('Incorrect! try again');
    }
    console.log('user incorrectly responded "' + answer7 + '" to question 7: Correct');
  } //end big for loop
}

//part 1 of game
confirm('We will start with five questions that will ask you to guess whether the following statements about myself are true or false. If they are true enter "YES" if they are false enter "NO"');
question1();
question2();
question3();
question4();
question5();
//part 2 of game
alert('For the next two questions try to get the correct answers. You will be given an indicated number of tries.');
question6();
question7();

//THE END
alert('You have completed the quiz. Your correctly answered ' + correctCount + ' out of 7 questions. Thank you, ' + username + ', for getting to know me! To learn more, continue reading this page.');
