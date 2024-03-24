// Closures
// So the closure is a function that has access to the parent scope, even after the parent function has closed.
// The closure is a function that references variables in the outer scope from its inner scope

// Lexical scope
var name = 'pancho';
// global scope
function local() {
  // local scope
  console.log(name);
}

//local();

// global scope
function local2() {
  // local scope
  var name2 = 'pancho2';
}

// console.log(name2);

// local2();

// Clouse

function counterFirst() {
  var count = 0;

  function counterClouse() {
    count++;
    console.log(count);
  }

  console.log(count);
  count++;

  return counterClouse;
}

// const clouse = counterFirst();
// clouse();
// clouse();
// clouse();

// Q - What will be logger to console?
console.log('------------');
let count = 0;
// (function printNumber() {
//   if (count === 0) {
//     let count = 1; //shadowing
//     console.log(count); // 1
//   }
//   // count = 0
//   console.log(count); // 0
// })();

// Q - Time Optimization

function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

// console.time('6');
// const closure = find();
// closure(6);
// console.timeEnd('6');

// console.time('12');
// closure(12);
// console.timeEnd('12');

// Block scope and setTimeout
function a() {
  for (var i = 0; i < 5; i++) {
    function inner(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    inner(i);
  }
}

a();

// Q What is module pattern

var module = (function () {
  function privateMethod(params) {
    console.log(params);
  }

  return {
    publicMethod: function () {
      console.log('public method');
      privateMethod(123);
    },
  };
})();

module.publicMethod();

// Q - make this run only once

let view;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log('already subcribed');
      return;
    }
    view = 'Youtube';
    console.log('Subcribe to: ' + view);
    called++;
  };
}

const subcried = likeTheVideo();
subcried();
subcried();
subcried();

// Q - Once Polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => console.log('hello', a, b));
hello(1, 2);
hello(3, 4);

// Q - implement caching/memorize function

function memoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let index = 0; index < 10000000; index++) {}
  return num1 * num2;
};

const cachedProduct = memoize(clumsyProduct);

console.time('clumsyProduct');
cachedProduct(100, 100);
console.timeEnd('clumsyProduct');

console.time('clumsyProduct2');
cachedProduct(100, 100);
console.timeEnd('clumsyProduct2');
