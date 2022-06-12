//Formula	
//(0°C × 9/5) + 32 = 32°F

const ftoc = function(inTempF) {
  outTempC = ((inTempF - 32) * 5/9).toFixed(1);
  return Number(outTempC);
};

const ctof = function(inTempC) {
  outTempF = ((inTempC * 9/5) + 32).toFixed(1);
  return Number(outTempF);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
