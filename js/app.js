'use strict'

//REMINDER: Ensure to invoke js functions in html with ()

function greetUser() {
    userName = prompt('Hello friend! what is your name?');
    console.log(userName);
    alert('Hey ' + userName + ' it\'s great to meet you!');
}

let userAnswer1 = prompt('Do I own two animals?');

if (userAnswer1.toLowerCase() === 'yes'  || userAnswer1.toLowerCase() === 'y') {
  alert('Yeah! A dog named Luca and a cat named Maxamillion!');
} else {
  alert('Actually, I do infact have two! A dog named Luca and a cat named Maxamillion!');
  console.log(userAnswer1)
}

let userAnswer2 = prompt('Do I live in Washington?');

if (userAnswer2.toLowerCase() === 'yes'  || userAnswer2.toLowerCase() === 'y') {
  alert('Yeah, I live an hour out from Seattle!');
} else {
  alert('Actually, yes infact I do!');
  console.log(userAnswer2)
}

let userAnswer3 = prompt('Is my favorite color purple?');

if (userAnswer3.toLowerCase() === 'no'  || userAnswer3.toLowerCase() === 'n') {
  alert('You are absolutely right, I prefer Green! lime to be exact.');
} else {
  alert('It is a very nice color, however my favorite is Lime green!');
  console.log(userAnswer3)
}

let userAnswer4 = prompt('Do I enjoy tea?');

if (userAnswer4.toLowerCase() === 'no'  || userAnswer4.toLowerCase() === 'n') {
  alert('Correct! it is a disgusting drink!');
} else {
  alert('Yuck, I cannot stand the taste!');
  console.log(userAnswer4)
}

let userAnswer5 = prompt('Do I prefer computer games over console games?');

if (userAnswer5.toLowerCase() === 'yes'  || userAnswer5.toLowerCase() === 'y') {
  alert('PC master race!');
} else {
  alert('Console noob, PC master race!');
  console.log(userAnswer5)
}