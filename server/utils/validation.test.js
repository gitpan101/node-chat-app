const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string value', () => {
        var non_String = 1234;
        expect(isRealString(non_String)).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        var str_spaces = '    ';
        expect(isRealString(str_spaces)).toBeFalsy();
    });

    it('should allow strings with non space characters', () => {
        var str = '  a valid string    ';
        expect(isRealString(str)).toBeTruthy();
    });
});