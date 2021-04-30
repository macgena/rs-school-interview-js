const assert = require('assert');
const maxRepetitionsChar = require('../src/02-max-repetitions-char');
it.optional = require('../extensions/it-optional');

describe('02-max-repetitions-char', () => {
  it.optional('should return max repeatable char', () => {
    assert.strictEqual(maxRepetitionsChar('aaabb'), 'a');
    assert.strictEqual(maxRepetitionsChar('aabb'), 'a');
    assert.strictEqual(maxRepetitionsChar('abb'), 'b');
    assert.strictEqual(maxRepetitionsChar('bbaa'), 'a');
    assert.strictEqual(maxRepetitionsChar('a b c d'), ' ');
    assert.strictEqual(maxRepetitionsChar('    '), ' ');
    assert.strictEqual(maxRepetitionsChar(''), null);
  });
});
