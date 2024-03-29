// Functions in JS
// Q - what is functions declarations?

//normaly function
function square(num) {
  return num + num;
}

//Function expression
const square = function (num) {
  return num;
};

// What are first class fuctions?
function square(num) {
  return num + num;
}

function displaySquare(fn) {
  console.log('square is ' + fn(n));
}
// first class function
displaySquare(square);

//Q - What is IIFE?
// innmediable invoked function expression
(function square(num) {
  console.log(num * num);
})(4);

// Q - Function scope
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = 'Chamakh';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

// Q - Functions scope

for (let index = 0; index < 5; index++) {
  setTimeout(function () {
    console.log(i); // 1, 2, 3, 4, 5
  }, i * 1000);
}

for (var index = 0; index < 5; index++) {
  setTimeout(function () {
    console.log(i); // 5, 5, 5, 5, 5
  }, i * 1000);
}

// Q - functions hosting
console.log(x); // undefined
function functionName() {
  console.log('Hello');
}

const x = 10;
const fun = function () {
  console.log(x); // in this the result is undefined because the scope is local from function
  var x = 20;
};

// Q - Params vs Arguments

function sum(a, b) {
  //a, b areparams

  console.log(a, b);
}
sum(1, 2); // 1, 2 are arguments

// Q callback function
// callback function is a function that is passed as an argument to another function

document.addEventListener('click', function () {
  console.log('clicked');
});

// Q - Arrow function
const add = (a, b) => {
  return a + b;
};

// access to argument keyword

function argumentFn() {
  console.log(arguments); // the print in console is arguments 1, 2, 3
}

argumentFn(1, 2, 3);

const argumentArrowFn = () => {
  console.log(arguments); // the print in console is a underfined 
};


