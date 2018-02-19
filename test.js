const assert = require('assert');
const ExtendedError = require('./index');

describe('test', () => {
  it('Своя ошибка', () => {
    class MyError extends ExtendedError {
      constructor(message) {
        super(message);
      }
    }

    const myError = new MyError('My error!');

    assert.strictEqual(myError.name, 'MyError');
    assert.ok(myError instanceof MyError);
    assert.ok(myError instanceof ExtendedError);
  });
});
