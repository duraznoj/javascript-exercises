const leapYears = function(inYear) {
  //much better solution from TOP
  return inYear % 4 == 0 && (inYear % 100 !== 0 || inYear % 400 === 0);

  /*if(inYear % 4 === 0) {
    if(inYear % 100 === 0 && inYear % 400 !== 0) {
      //not leap year
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }*/
};

// Do not edit below this line
module.exports = leapYears;
