const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

function test() {
  return gulp.src('src/sticky-header.js')
    .pipe(plugins.eslint());
}

gulp.task('test', test);
gulp.task('default', test);
