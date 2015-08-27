exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  test: 'test',
};

exports.wiredep = {
  directory: 'bower_components'
};

exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};