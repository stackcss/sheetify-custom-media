/**
 * Module dependencies
 */

var media = require('rework-custom-media');
var assert = require('assert');

/**
 * Expose `transform()`.
 */

module.exports = transformCustomMedia;

/**
 * Transform custom media queries.
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

function transformCustomMedia(opts) {
  assert(!opts || 'object' == typeof opts, 'sheetify-variables: opts should be an object');

  return function() {
    return function(style, next) {
      next(null, media(opts)(style));
    }
  }
}
