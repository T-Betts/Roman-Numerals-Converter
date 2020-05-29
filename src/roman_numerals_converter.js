class RomanNumeralConverter {
  constructor() {
    this.numeralValues = {
      M: 1000, CM: 900, D: 500, CD: 400, 
      C: 100, XC: 90, L: 50, XL: 40, 
      X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
  }

  intToRomanNumerals(num) {
    const nv = this.numeralValues;
    let result = '';
    Object.keys(nv).forEach((key) => {
      while (num - nv[key] >= 0) {
        result += key;
        num -= nv[key];
      }
    });
    return result;
  }

  romanNumeralsToInt(rNum) {
    const nv = this.numeralValues;
    let result = 0;
    let numeralArr = rNum.split('');
    numeralArr.forEach((el, idx, arr) => {
      if (nv[el] > nv[arr[idx - 1]]) {
        result += 0;
      } else if (nv[el] < nv[arr[idx + 1]]) {
        result += (nv[arr[idx + 1]] - nv[el]);
      } else {
        result += nv[el];
      }
    });
    return result;
  }
}

module.exports = RomanNumeralConverter;