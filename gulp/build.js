'use strict';

import gulp from 'gulp';
import runSeq from 'run-sequence';

gulp.task('build', (done) => {
    runSeq(['build_sass', 'build_js'], done);
});

// build SASS for distribution
gulp.task('build_sass', ['sass_dist', 'lint_sass']);

// build JS for distribution
gulp.task('build_js', ['scripts_dist', 'lint_js']);
