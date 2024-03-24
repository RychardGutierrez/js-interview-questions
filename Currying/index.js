// Currying
// Example f(a,b) -> f(a)(b)

function curry(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

//console.log(curry(1)(2));

// Q - sum(2)(4)(1) = 7

function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(currySum(2)(4)(1));

// Q -Infinite curring
// Example f(a)(b)(c)(d)...

function infiniteCurry(a) {
  return function (b) {
    if (b) {
      return infiniteCurry(a + b);
    }
    return a;
  };
}

console.log(infiniteCurry(2)(4)(1)(2)());

// Q - currying VS partial application

//partial app
function partialApp(a) {
  return function (b, c) {
    return a + b + c;
  };
}

// currying
function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Q - Real example for currying

function updateElement(id) {
  return function (content) {
    document.querySelector('#' + id).textContent = content;
  };
}

// const updateHeader = updateElement('header');
// updateHeader('Hello');
// updateHeader('World');

const sum = (a, b) => a + b;

const rest = (a, b) => a - b;

const multiply = (a, b) => a * b;

const result = sum(1, 2);
const resultRest = rest(1, 2);
const resultMultiply = multiply(1, 2);

//console.log(resultMultiply);

const curryOperation = (...fn) => {
  return function (value) {
    return fn.reduceRight((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };
};

const sumCurry = curryOperation(sum, rest, multiply);

console.log(sumCurry(1, 2));

// Q curry() implementation
// converst f(a,b,c) -> f(a)(b)(c)

function curry(func) {
  return function curriedFun(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return (...nextArgs) => curriedFun(...args, ...nextArgs);
  };
}

const totalSum = (a, b, c) => a + b + c;

const curriedSum = curry(totalSum);

console.log(curriedSum(1)(2)(3));
