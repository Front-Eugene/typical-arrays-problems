
exports.min = function min (arrNum) {
  let minElement = Math.min.apply(null, arrNum);
  if (arrNum === undefined || arrNum.length === 0) {
    return 0
  }
  return minElement;
}

exports.max = function max (arrNum) {
  let maxElement = Math.max.apply(null, arrNum);
  if (arrNum === undefined || arrNum.length === 0) {
    return 0
  }
  return maxElement;
} 
  
exports.avg = function avg (arrNum) {
  if (arrNum === undefined || arrNum.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arrNum.length; i++) { 
  sum += arrNum[i];
  }
  return sum / arrNum.length;
}

