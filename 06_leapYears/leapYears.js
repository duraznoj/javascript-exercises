const leapYears = function(inYear) {
  if(inYear % 4 === 0) {
    if(inYear % 100 === 0 && inYear % 400 !== 0) {
      //not leap year
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
