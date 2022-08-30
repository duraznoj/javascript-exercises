const palindromes = function (inString) {

  inString = inString.replace(/[^A-Za-z]/g, '').toUpperCase();
  len = inString.length;

  for(let i = 0; i < len; i++) {
    if(inString[i] !== inString[len - 1 - i]) {
      return false;
    };
  };
  return true;

}

// Do not edit below this line
module.exports = palindromes;
