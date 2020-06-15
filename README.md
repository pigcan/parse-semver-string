# parse-semver-string

[![NPM version](https://img.shields.io/npm/v/parse-semver-string.svg?style=flat)](https://npmjs.org/package/parse-semver-string)
[![Build Status](https://img.shields.io/travis/pigcan/parse-semver-string.svg?style=flat)](https://travis-ci.org/pigcan/parse-semver-string)
[![NPM downloads](http://img.shields.io/npm/dm/parse-semver-string.svg?style=flat)](https://npmjs.org/package/parse-semver-string)
[![Dependency Status](https://david-dm.org/pigcan/parse-semver-string.svg)](https://david-dm.org/pigcan/parse-semver-string)

## Features

Parse semver string to an object that contains name version and path


## Installation

```bash
$ npm i --save parse-semver-string
```

## Usage

```js
const parse = require('parse-semver-string');

parse('@scope/name@version/path/to/file');

===>

{
  name: '@scope/name',
  version: 'version',
  path: 'path/to/file'
}


parse('name/path/to/file')

===>


{
  name: 'name',
  version: '',
  path: 'path/to/file'
}
```
