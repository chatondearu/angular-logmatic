
'use strict';

var path = require('path');
var gulp = require('gulp');
var del = require('del');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var _ = require('lodash');


gulp.task('test', function () {

  var injectFiles = gulp.src([
    path.join(conf.paths.src, '**/*.module.js'),
    path.join(conf.paths.src, '**/*.js')
  ])
    .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions  = {
    ignorePath: [conf.paths.src, conf.paths.tmp],
    addRootSlash: false
  };

  gulp.src(path.join(conf.paths.src, 'index.html'))
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.test, '/')));
});