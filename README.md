# codepen-fetcher-compatibility-test

The script to test the compatibility of the latest `codepen-fetcher` package from NPM with various Node.js versions.

## Usage
```sh
$ node -v

$ rm -rf node_modules package-lock.json

$ npm install codepen-fetcher --no-save

# Show the version of codepen-fetcher
$ node -p "require('codepen-fetcher/package.json').version"

$ node index.js
```
