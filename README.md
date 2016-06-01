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
  console.log(msonZoo.samples); // Returns a list of samples

  var sample = msonZoo.samples[0];

  console.log(sample.fileName); // Name of the file
  console.log(sample.filePath); // Path to the file
  console.log(sample.fileContent); // Content of the file (MSON)
  console.log(sample.dataStructureType); // Type of the data structure (e.g. `object`)
  console.log(sample.dataStructureName); // Name of the data structure (`# Coupon (object)`)
  console.log(sample.dataStructure); // First data structure element
  console.log(sample.dataStructures); // All data structure elements found in the file
  ```

# License

[MIT](./LICENSE.md).
