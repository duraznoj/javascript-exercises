const sumAll = function(int1, int2) {
  if(int1 >= 0 && int2 >= 0 && typeof int1 === "number" && typeof int2 === "number") {
    let sortedArr = [int1, int2].sort()
    let outSum = 0;
    for(let i = sortedArr[0]; i <= sortedArr[1]; i++) {
      outSum += i;
    }
    return outSum;
  } else {
    return "ERROR";
  }
  
};

// Do not edit below this line
module.exports = sumAll;
