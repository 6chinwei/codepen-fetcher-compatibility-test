# codepen-fetcher-compatibility-test

Test the compatibility of the latest [codepen-fetcher](https://github.com/6chinwei/codepen-fetcher) with different Node.js versions.

### Test results

> [Workflow runs](https://github.com/6chinwei/codepen-fetcher-compatibility-test/actions/workflows/compatibility-test.yaml)

| Version     | Result |
|-------------|--------|
| Node.js 16  | ❌      |
| Node.js 18  | ✅      |
| Node.js 20  | ✅      |
| Node.js 22  | ✅      |
| Node.js 24  | ✅      |


### Manual Testing
```sh
$ node -v

$ rm -rf node_modules package-lock.json

$ npm install codepen-fetcher --no-save

# Show the version of codepen-fetcher
$ node -p "require('codepen-fetcher/package.json').version"

$ node index.js
```
