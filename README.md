# mson-zoo

![Alt text](/media/zoo.png)

This repository is a collection of MSON samples that can be used as a showcase or testing purposes.

You can consume this adding it as a git submodule.

```bash
$ git submodule add https://github.com/apiaryio/mson-zoo
Cloning into 'mson-zoo'...
remote: Counting objects: 11, done.
remote: Compressing objects: 100% (10/10), done.
remote: Total 11 (delta 0), reused 11 (delta 0)
Unpacking objects: 100% (11/11), done.
Checking connectivity... done.
```

However, it can easily consumed from javascript as a **Npm module**

```javascript
import mson-zoo from 'mson-zoo';
console.log(mson-zoo.samples[0]);
```