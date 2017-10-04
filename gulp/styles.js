'use strict';

import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import cssNano from 'gulp-cssnano';
import rename from 'gulp-rename';
import gutil from 'gulp-util';

// compile SASS (excludes sourcemaps)
gulp.task('sass_dist', () => {
    gulp.src(global.paths.sass)
        .pipe(sass()).on('error', function(error) {
            gutil.log(error.toString());
            this.emit('end');
        })
        .pipe(autoprefixer())
        .pipe(cssNano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(`${global.paths.dist}/assets/css`));
});
