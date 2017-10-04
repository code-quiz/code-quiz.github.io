'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gutil from 'gulp-util';

const b = browserify({
    entries: `${global.paths.src}/js/script.js`,
    debug: true,
    transform: [babelify.configure({
        presets: ['es2015']
    })]
});

// babelify and minify JavaScript files (excludes source maps)
gulp.task('scripts_dist', () => {
    return b.bundle().on('error', function(error) {
            gutil.log(error.toString());
            this.emit('end');
        })
        .pipe(source(`${global.paths.src}/js/script.js`))
        .pipe(buffer())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(`${global.paths.dist}/assets/js`));
});
