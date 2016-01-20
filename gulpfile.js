var gulp = require('gulp'),
  jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', ['jshint'], function() {
  // place code for your test task here
});

gulp.task('default', ['test'], function() {
  // place code for your default task here
});
