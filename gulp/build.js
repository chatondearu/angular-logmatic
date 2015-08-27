'use strict';

var path = require('path');
var gulp = require('gulp');
var del = require('del');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task('build', ['test'], function () {

  gulp.src([
    path.join(conf.paths.src, 'app-logmatic/**/*.module.js'),
    path.join(conf.paths.src, 'app-logmatic/**/*.js')])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size())
    .pipe($.ngAnnotate())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/')))
    .pipe($.size({ title: path.join(conf.paths.tmp, '/'), showFiles: true }))
    .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'))
    .pipe($.concat('angular-logmatic.js'))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }))
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
    .pipe($.concat('angular-logmatic.min.js'))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));

});