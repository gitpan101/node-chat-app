var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Utkarsh';
        var text = 'Holy Cow!';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });    
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Ram';
        var lat = 72;
        var long = -53;
        var message = generateLocationMessage(from, lat, long);

        expect(typeof message.createdAt).toBe('number');
        expect(message.url).toMatch(`https://www.google.com/maps?q=${lat},${long}`);
    });
});