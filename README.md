# jstransformer-rho

[Rho](https://github.com/inca/rho) support for [JSTransformers][http://github.com/jstransformers].

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-rho/master.svg)](https://travis-ci.org/jstransformers/jstransformer-rho)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-rho/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-rho?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-rho/master.svg)](http://david-dm.org/jstransformers/jstransformer-rho)
[![NPM version](https://img.shields.io/npm/v/jstransformer-rho.svg)](https://www.npmjs.org/package/jstransformer-rho)

## Install

    npm install jstransformer-rho --save

## API

```js
var rho = require('jstransformer')(require('jstransformer-rho'));

rho.render('Hello *world*!').body
//=> '<p>Hello <strong>world</strong>!</p>'
```

## License

MIT
