# jstransformer-rho

[Rho](https://github.com/inca/rho) support for [JSTransformers][http://github.com/jstransformers].

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-rho/master.svg)](https://travis-ci.org/jstransformers/jstransformer-rho)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-rho/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-rho)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-rho/master.svg)](http://david-dm.org/jstransformers/jstransformer-rho)

[![NPM version](https://img.shields.io/npm/v/jstransformer-rho.svg)](https://www.npmjs.org/package/jstransformer-rho)

## Installation

    npm install jstransformer-rho

## API

```js
var rho = require('jstransformer')(require('jstransformer-rho'))

rho.render('Hello *world*!').body
//=> '<p>Hello <strong>world</strong>!</p>'
```

## License

MIT
