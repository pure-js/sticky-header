const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

function html() {
  return gulp.src('examples/index.pug')
    .pipe(plugins.pug())
    .pipe(gulp.dest('./build'));
}

function minifyJs() {
  return gulp.src('./src/*.js')
    .pipe(plugins.babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(gulp.dest('./build'));
}

function test() {
  return gulp.src('src/sticky-header.js')
    .pipe(plugins.eslint());
}

gulp.task('test', test);
gulp.task('build', gulp.parallel(html, minifyJs));
gulp.task('default', test);
