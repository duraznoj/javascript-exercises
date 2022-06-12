const removeFromArray = function(inArr, ...items) {
  for(const ite of items) {
    if(inArr.includes(ite)) {
      let ind = inArr.indexOf(ite);
      inArr.splice(ind, 1);
    }
  }
  
  return inArr;
};

// Do not edit below this line
module.exports = removeFromArray;
