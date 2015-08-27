
'use strict';

var path = require('path');
var gulp = require('gulp');
var del = require('del');
var conf = require('./conf');

gulp.task('clean', function () {
  del(['.tmp/*.js','dist/*.js'], function (err, paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));
  });
});