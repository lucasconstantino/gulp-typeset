# gulp-typeset [![Build Status](https://travis-ci.org/lucasconstantino/gulp-typeset.svg?branch=master)](https://travis-ci.org/lucasconstantino/gulp-typeset)

> Preprocess HTML for better typography with [typeset](https://github.com/davidmerfield/typeset)

*Issues with the output should be reported on the Typeset [issue tracker](https://github.com/davidmerfield/typeset/issues).*


## Install

```
$ npm install --save-dev gulp-typeset
```


## Usage

```js
var gulp = require('gulp');
var typeset = require('gulp-typeset');

gulp.task('default', function () {
	return gulp.src('index.html')
		.pipe(typeset())
		.pipe(gulp.dest('dist'));
});
```


### Options

Refer to David Merfield's [typeset](https://github.com/davidmerfield/typeset) module for further reference on available options.


## License

MIT © [Lucas Constantino Silva](https://github.com/lucasconstantino)
