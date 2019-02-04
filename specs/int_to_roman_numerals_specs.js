const expect = require('chai').expect;
const intToRomanNumerals = require('../src/int_to_roman_numerals').intToRomanNumerals;

describe('intToRomanNumerals', () => {
  it('should be able to convert 1 to I', () => {
    expect(intToRomanNumerals(1)).to.deep.equal('I');
  });
});