const expect = require('chai').expect;
const intToRomanNumerals = require('../src/int_to_roman_numerals').intToRomanNumerals;

describe('intToRomanNumerals', () => {
  it('should be able to convert 1 to I', () => {
    expect(intToRomanNumerals(1)).to.deep.equal('I');
  });

  it('should be able to convert 5 to V', () => {
    expect(intToRomanNumerals(5)).to.deep.equal('V');
  });

  it('should be able to convert 10 to X', () => {
    expect(intToRomanNumerals(10)).to.deep.equal('X');
  });
});