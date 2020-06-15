var RE_SCOPED = /^(@[^/]+\/[^/@]+)(?:@([^/]*))?(?:\/([\s\S]*))?/;
var RE_NORMAL = /^([^/@]+)(?:@([^/]*))?(?:\/([\s\S]*))?/;

module.exports = function parse(modulePath) {
  if (typeof modulePath !== 'string' || modulePath.trim() === '') {
    throw new TypeError('semver-string must be a non-empty string, which now is ' + modulePath + ' => ' + modulePath);
  }

  var matched = modulePath.charAt(0) === '@' ? modulePath.match(RE_SCOPED) : modulePath.match(RE_NORMAL);

  if (!matched) {
    throw new Error('semver-string seems not correct, please check and try later -> ' + modulePath);
  }

  return {
    name: matched[1],
    version: matched[2] || '',
    path: matched[3] || '',
  };
}
