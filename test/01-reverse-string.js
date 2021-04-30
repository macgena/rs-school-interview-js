const assert = require('assert');
const reverseString = require('../src/01-reverse-string');
it.optional = require('../extensions/it-optional');

describe('01-reverse-string', () => {
  it.optional('should return reversed string', () => {
    assert.strictEqual(reverseString('Hello world!'), '!dlrow olleH');
    assert.strictEqual(reverseString('Gennady'), 'ydanneG');
    assert.strictEqual(reverseString('AaAa'), 'aAaA');
    assert.strictEqual(reverseString('    '), '    ');
  });
});
