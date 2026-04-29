const { add, multiply } = require('./index');
const assert = require('assert');

// Tests
assert.strictEqual(add(1, 2), 3, 'add(1,2) should be 3');
assert.strictEqual(multiply(2, 3), 6, 'multiply(2,3) should be 6');
console.log('All tests passed!');
