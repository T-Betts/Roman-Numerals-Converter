const expect = require('chai').expect;
const romanNumeralsToInt = require('../src/roman_numerals_to_int').romanNumeralsToInt;

describe('romanNumeralsToInt', () => {
  it('should be able to convert I to 1', () => {
    expect(romanNumeralsToInt('I')).to.deep.equal(1);
  });
});