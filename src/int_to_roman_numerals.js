function intToRomanNumerals(num) {
  const romanNumeralsMap = {
    X: 10, V: 5, I: 1
  };
  result = '';
  Object.keys(romanNumeralsMap).forEach((key) => {
    if (romanNumeralsMap[key] === num) result += key;
  });
  return result;
}

module.exports.intToRomanNumerals = intToRomanNumerals;