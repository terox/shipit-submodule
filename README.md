# shipit-submodule

## Install

```
npm install shipit-submodule --save-dev
```

## Usage

To activate download of git submodules (recursively), enable  ```submodules```
in shipit initial configuration:

```
submodules: true
```

### Example ```shipitfile.js```

```js
module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/tmp/deploy_to',
      repositoryUrl: 'https://github.com/user/repo.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      key: '/path/to/key',
      shallowClone: true,

      submodules: true // <---

    },
    staging: {
      servers: 'user@myserver.com'
    }
  });
};
```

It will download recursively all git submodules in repository.

## TODO

* Tests
* More options

## License

[MIT License](https://github.com/terox/shipit-submodule/blob/master/LICENSE)
© [David Pérez Terol](http://www.github.com/terox)
