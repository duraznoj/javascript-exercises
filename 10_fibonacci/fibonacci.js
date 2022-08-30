
/*Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```*/

let fibDict = {};
const fibonacci = function(n) {
  if(n < 0) {
    return "OOPS";
  }
  n = Number(n);
  
  //basic recursive way
  /*if(n === 1 || n === 2) {
    return 1;
  } 
  return fibonacci(n-1) + fibonacci(n-2);*/

  //memoization
  if(n === 1 || n === 2) {
    return 1;
  } else if(!fibDict[n]) {
    return fibDict[n] = fibonacci(n-1) + fibonacci(n-2);
  } else {
    return fibDict[n];
  }
};

// Do not edit below this line
module.exports = fibonacci;
