'use strict';

var gutil = require('gulp-util');
var expect = require('chai').expect;
var typeset = require('../');

it('should ', function (cb) {
	var stream = typeset();
	var html = '<p>"Hello," said the fox.</p>';
	var result = '<p><span class="pull-double">“</span>Hello,” said the fox.</p>';
  var file = new gutil.File({
		base: __dirname,
		path: __dirname + '/test.html',
		contents: new Buffer(html)
	});

	stream.on('data', function (file) {
		expect(file.contents.toString()).to.equal(result);
	});

	stream.on('end', cb);

	stream.write(file);

	stream.end();
});
