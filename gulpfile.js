const gulp = require('gulp');
const snyk = require('gulp-snyk');

gulp.task('protect', function(cb) {
  return snyk({ command: 'protect' }, cb);
});
