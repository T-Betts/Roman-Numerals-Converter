function intToRomanNumerals(num) {
  const numeralValues = {
    M: 1000, D: 500, C: 100,
    L: 50, X: 10, V: 5, I: 1
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