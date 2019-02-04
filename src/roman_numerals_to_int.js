function romanNumeralsToInt(rNum) {
  const numeralValues = {
    M: 1000, CM: 900, D: 500, CD: 400, 
    C: 100, XC: 90, L: 50, XL: 40, 
    X: 10, IX: 9, V: 5, IV: 4, I: 1
  };
  result = 0;
  let numeralArr = rNum.split('');
  
  numeralArr.forEach((el, idx, arr) => {
    if (numeralValues[el] > numeralValues[arr[idx - 1]]) {
      result += 0;
    } else if (numeralValues[el] < numeralValues[arr[idx + 1]]) {
      result += (numeralValues[arr[idx + 1]] - numeralValues[el]);
    } else {
      result += numeralValues[el];
    }
  });
  return result;
}

module.exports.romanNumeralsToInt = romanNumeralsToInt;