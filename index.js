'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var through = require('through2');
var typeset = require('typeset');

module.exports = function (options) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new gutil.PluginError('gulp-typeset', 'Streaming not supported'));

    try {
      file.contents = new Buffer(typeset(file.contents.toString(), options));
      this.push(file);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-typeset', err));
    }

    cb();
  });
};
