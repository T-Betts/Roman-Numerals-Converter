const expect = require('chai').expect;
const romanNumeralsToInt = require('../src/roman_numerals_to_int').romanNumeralsToInt;

describe('romanNumeralsToInt', () => {
  it('should be able to convert I to 1', () => {
    expect(romanNumeralsToInt('I')).to.deep.equal(1);
  });

  it('should be able to convert V to 5', () => {
    expect(romanNumeralsToInt('V')).to.deep.equal(5);
  });

  it('should be able to convert X to 10', () => {
    expect(romanNumeralsToInt('X')).to.deep.equal(10);
  });

  it('should be able to convert XXV to 25', () => {
    expect(romanNumeralsToInt('XXV')).to.deep.equal(25);
  });

  it('should be able to convert CMXCIV to 994', () => {
    expect(romanNumeralsToInt('CMXCIV')).to.deep.equal(994);
  });

  it('should be able to convert MMMCDXLIX to 3449', () => {
    expect(romanNumeralsToInt('MMMCDXLIX')).to.deep.equal(3449);
  });
});