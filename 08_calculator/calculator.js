
/*The goal for this exercise is to create a calculator that does the following:

add, subtract, get the sum, multiply, get the power, and find the factorial

In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jest! To see the expected value
take a look at the spec file that houses the Jest test cases.*/

const add = function(a, b) {
  return a + b;

	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {
  
  if(!arr[0]) {
    return 0;
  };

  const output = arr.reduce( (outSum, item) => outSum + item, 0);
  return output;

};

const multiply = function(arr) {

  if(!arr[0]) {
    return 0;
  };

  const output = arr.reduce( (outSum, item) => outSum * item, 1);
  return output;

};

const power = function(a,b) {
  return Math.pow(a,b);	
};

//const factorialDict = {};
const factorial = function(num) {
  if(num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
