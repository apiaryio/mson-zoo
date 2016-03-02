# MSON Zoo

![MSON Zoo](/media/zoo.png)

This repository is a collection of MSON examples, it can be used as a showcase, or for testing purposes.

## Getting Started

1. **Install the NPM package**

  ```bash
  npm install mson-zoo
  ```

2. **Require the package**

  ###### ES6

  ```JavaScript
  import msonZoo from 'mson-zoo';
  ```

  ###### ES5

  ```JavaScript
  var msonZoo = require('mson-zoo');
  ```

3. **Use it**

  ```JavaScript
  console.log(msonZoo.examples);
  console.log(msonZoo.examples[0].name); // Returns a name of the example
  console.log(msonZoo.examples[0].mson); // Returns MSON
  console.log(msonZoo.examples[0].ast); // Returns AST
  console.log(msonZoo.examples[0].refract); // Returns Refract
  ```

# License

[MIT](./LICENSE.md).
