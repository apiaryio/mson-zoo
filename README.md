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
  console.log(msonZoo.samples);

  var sample = msonZoo.samples[0];
  console.log(sample.name); // Returns a name of the sample
  console.log(sample.mson); // Returns MSON *without* header
  console.log(sample.type); // Returns element type (e.g. `object`)
  console.log(sample.refract); // Returns Refract element
  console.log(sample.dataStructures); // Returns list of all elements
  ```

# License

[MIT](./LICENSE.md).
