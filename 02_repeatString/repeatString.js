//let outVar
const repeatString = function(string, num) {
  let outVar = "";
  if(num < 0) {
    outVar = "ERROR";
    return outVar;

  } else {
    for(let i = 0; i <= num-1; i++) {
      outVar += string;
    }
    return outVar;

  }
  
};

// Do not edit below this line
module.exports = repeatString;
