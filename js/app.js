'use strict'

//REMINDER: Ensure to invoke js functions in html with ()

let score = 0;

let userName = prompt('Hello friend! what is your name?');
    console.log(userName);
    alert('Hey ' + userName + ' it\'s great to meet you!');

let userAnswer1 = prompt('Do I own two animals?');

if (userAnswer1.toLowerCase() === 'yes'  || userAnswer1.toLowerCase() === 'y') {
  alert('Yeah! A dog named Luca and a cat named Maxamillion!');
  score++
} else {
  alert('Actually, I do infact have two! A dog named Luca and a cat named Maxamillion!');
  //console.log(userAnswer1)
}

let userAnswer2 = prompt('Do I live in Washington?');

if (userAnswer2.toLowerCase() === 'yes'  || userAnswer2.toLowerCase() === 'y') {
  alert('Yeah, I live an hour out from Seattle!');
  score++
} else {
  alert('Actually, yes infact I do!');
  //console.log(userAnswer2)
}

let userAnswer3 = prompt('Is my favorite color purple?');

if (userAnswer3.toLowerCase() === 'no'  || userAnswer3.toLowerCase() === 'n') {
  alert('You are absolutely right, I prefer Green! lime to be exact.');
  score++
} else {
  alert('It is a very nice color, however my favorite is Lime green!');
  //console.log(userAnswer3)
}

let userAnswer4 = prompt('Do I enjoy tea?');

if (userAnswer4.toLowerCase() === 'no'  || userAnswer4.toLowerCase() === 'n') {
  alert('Correct! it is a disgusting drink!');
  score++
} else {
  alert('Yuck, I cannot stand the taste!');
  //console.log(userAnswer4)
}

let userAnswer5 = prompt('Do I prefer computer games over console games?');

if (userAnswer5.toLowerCase() === 'yes'  || userAnswer5.toLowerCase() === 'y') {
  alert('PC master race!');
  score++
} else {
  alert('Console noob, PC master race!');
  //console.log(userAnswer5)
}

for(let i = 4; i >= 1; i-- ) {
    let correctAnswer = 42;
    let userAnswer6 = parseInt(prompt('Guess my favorite number'));
    if(userAnswer6 === correctAnswer) {
        alert('That\'s right!.');
        score++
        break;
    } else if (userAnswer6 < correctAnswer) {
        alert(`Your guess is too low, try again. You have ${(i - 1)} attempts remaining.`);
    } else if(userAnswer6 > correctAnswer) {
        alert(`Your guess is too high, try again. You have ${(i - 1)} attempts remaining.`);
    } if((i) === 1) {
      alert(`The correct answer was ${correctAnswer}.`)
      break;
    }
}

let favGames = ['kingdom hearts','final fantasy','diablo','minecraft','mass effect'];
let guesses = 0;
let correct = false;
for (let k = 6; k > guesses; k--) {
  let userInput = prompt('What is one of my favorite games?');
  for (let j = 0; j < favGames.length; j++) {
    if (userInput.toLowerCase() === favGames[j]) {
      alert('Bingo!');
      correct = true;
      score++
    }
  }
  if (!correct) {
    alert(`You have ${[k - 1]} tries remaining.`);
  }
  if (correct) break;
}

alert(`'possible answers could have been ${favGames}'`)

alert(`'The total amount you\'ve gotten correct is ${score}'`)

alert('Thank you for taking this short quiz ' + userName + '! Please enjoy reading about me down below.')