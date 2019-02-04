function intToRomanNumerals(num) {
  const numeralValues = {
    M: 1000, CM: 900, D: 500, CD: 400, 
    C: 100, XC: 90, L: 50, XL: 40, 
    X: 10, IX: 9, V: 5, IV: 4, I: 1
  };
  result = '';
  Object.keys(numeralValues).forEach((key) => {
    while (Math.floor(num / numeralValues[key]) > 0) {
      result += key;
      num -= numeralValues[key];
    }
  });
  return result;
}

module.exports.intToRomanNumerals = intToRomanNumerals;