'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

global.paths = {
    // JS source files
    'js': './src/js/**/*.js',
    // SASS source files
    'sass': './src/scss/**/*.scss',
    // source folder
    'src': './src',
    // distribution folder
    'dist': './dist'
};

requireDir('./gulp', { recurse: false });

gulp.task('default', ['build']);
