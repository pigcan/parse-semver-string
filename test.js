var assert = require('assert');

var parse = require('./index');

describe('Parse Smever String', function () {
  describe('scope', function () {
    it('@xx/xx@version/xx/yy', function () {
      assert.deepStrictEqual(parse('@xx/xx@version/xx/yy'), {
        name: '@xx/xx',
        version: 'version',
        path: 'xx/yy'
      });
    });
    it('@xx/xx@version', function () {
      assert.deepStrictEqual(parse('@xx/xx@version'), {
        name: '@xx/xx',
        version: 'version',
        path: ''
      });
    });
    it('@xx/xx/xx/yy', function () {
      assert.deepStrictEqual(parse('@xx/xx/xx/yy'), {
        name: '@xx/xx',
        version: '',
        path: 'xx/yy'
      });
    });
  });
  describe('scope', function () {
    it('xx@version/xx/yy', function () {
      assert.deepStrictEqual(parse('xx@version/xx/yy'), {
        name: 'xx',
        version: 'version',
        path: 'xx/yy'
      });
    });
    it('xx@version', function () {
      assert.deepStrictEqual(parse('xx@version'), {
        name: 'xx',
        version: 'version',
        path: ''
      });
    });
    it('xx/xx/yy', function () {
      assert.deepStrictEqual(parse('xx/xx/yy'), {
        name: 'xx',
        version: '',
        path: 'xx/yy'
      });
    });
  });
});
