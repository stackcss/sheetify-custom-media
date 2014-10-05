# sheetify-custom-media
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

A [sheetify][sheetify-url] transform to add support for
[W3C-style CSS custom media queries](http://dev.w3.org/csswg/mediaqueries/#custom-mq)
syntax. Uses [`rework-custom-media`][rework-custom-media] to perform the transformation.

__N.B.__ This is not a polyfill. This transform aims to provide a future-proof way
of using a limited subset of the features provided by native CSS custom media
queries.

## Installation
```bash
npm install sheetify-custom-media
```

## Usage
As a sheetify transform:
```js
var media = require('sheetify-custom-media');
var sheetify = require('sheetify');

sheetify('path/to/my/index.css')
  .transform(media())
  .bundle();
```

## Options
#### map
Optionally, you may define the <media-query-list> for each <extension-name>
in a JavaScript object that is passed to the function.
```js
var myQueries = {
  map: {
    '--wide-screen': 'screen and (min-width:900px)'
  }
}

variables({map: myQueries});
```

# CSS syntax
A custom media query is defined with the `@custom-media` rule. Its scope is
global.

```css
@custom-media <extension-name> <media-query-list>;
```

The `<extension-name>` can then be used in a media feature. The alias must be
wrapped in parentheses.

```css
@custom-media --narrow-window screen and (max-width: 30em);

@media (--narrow-window) {
  /* narrow window styles */
}
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/sheetify-custom-media.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sheetify-custom-media
[travis-image]: https://img.shields.io/travis/yoshuawuyts/sheetify-custom-media.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/sheetify-custom-media
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/sheetify-custom-media.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/sheetify-custom-media?branch=master
[downloads-image]: http://img.shields.io/npm/dm/sheetify-custom-media.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/sheetify-custom-media

[rework-custom-media]: https://github.com/reworkcss/rework-custom-media
