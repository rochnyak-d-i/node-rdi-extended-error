# Extended Error

### Установка
```bash
npm i https://git@github.com/rochnyak-d-i/node-rdi-extended-error
```
### Работа
```js
const ExtendedError = require('rdi-extended-error');

class MyError extends ExtendedError {
  constructor(message, myparam) {
    super(message);

    this.data = myparam;
  }
}

throw new MyError('Hello error!', 'hello');
```
