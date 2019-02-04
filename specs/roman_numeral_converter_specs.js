const expect = require('chai').expect;
const RomanNumeralConverter = require('../src/roman_numerals_converter');

describe('RomanNumeralConverter', () => {
  beforeEach(() => {
    rnc = new RomanNumeralConverter;
  });

  describe('intToRomanNumerals', () => {
    it('should be able to convert 1 to I', () => {
      expect(rnc.intToRomanNumerals(1)).to.deep.equal('I');
    });
  
    it('should be able to convert 5 to V', () => {
      expect(rnc.intToRomanNumerals(5)).to.deep.equal('V');
    });
  
    it('should be able to convert 10 to X', () => {
      expect(rnc.intToRomanNumerals(10)).to.deep.equal('X');
    });
  
    it('should be able to convert 27 to XXVII', () => {
      expect(rnc.intToRomanNumerals(27)).to.deep.equal('XXVII');
    });
  
    it('should be able to convert 1315 to MCCCXV', () => {
      expect(rnc.intToRomanNumerals(1315)).to.deep.equal('MCCCXV');
    });
  
    it('should be able to convert 94 to XCIV', () => {
      expect(rnc.intToRomanNumerals(94)).to.deep.equal('XCIV');
    });
  
    it('should be able to convert 2949 to MMCMXLIX', () => {
      expect(rnc.intToRomanNumerals(2949)).to.deep.equal('MMCMXLIX');
    });
  });

  describe('romanNumeralsToInt', () => {
    it('should be able to convert I to 1', () => {
      expect(rnc.romanNumeralsToInt('I')).to.deep.equal(1);
    });
  
    it('should be able to convert V to 5', () => {
      expect(rnc.romanNumeralsToInt('V')).to.deep.equal(5);
    });
  
    it('should be able to convert X to 10', () => {
      expect(rnc.romanNumeralsToInt('X')).to.deep.equal(10);
    });
  
    it('should be able to convert XXV to 25', () => {
      expect(rnc.romanNumeralsToInt('XXV')).to.deep.equal(25);
    });
  
    it('should be able to convert CMXCIV to 994', () => {
      expect(rnc.romanNumeralsToInt('CMXCIV')).to.deep.equal(994);
    });
  
    it('should be able to convert MMMCDXLIX to 3449', () => {
      expect(rnc.romanNumeralsToInt('MMMCDXLIX')).to.deep.equal(3449);
    });
  });
});
