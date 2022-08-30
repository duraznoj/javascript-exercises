const findTheOldest = function(obj) {
  const sorted = obj.sort((a,b) => {
   
    return ((a.yearOfDeath ? a.yearOfDeath : (new Date).getFullYear()) - a.yearOfBirth) > ((b.yearOfDeath ? b.yearOfDeath : (new Date).getFullYear()) - b.yearOfBirth) ? -1 : 1;
  });
  //console.table(sorted);
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
