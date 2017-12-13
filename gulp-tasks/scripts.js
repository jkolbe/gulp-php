'use strict';

module.exports = function(gulp, plugins, del, config) {
  
  // Clean JS files
  gulp.task('clean-js', function() {
    return del(['./public/scripts/**/*']);
  });

  // Copy vendor JS files
  gulp.task('copy-vendor-js', ['clean-js'], function() {
    return gulp.src(['./src/scripts/vendor/**/*.js'])
      .pipe(gulp.dest('./public/scripts/vendor/'));
  });

  // Copy custom JS files
  gulp.task('copy-js', ['copy-vendor-js'], function() {
    return gulp.src(['./src/scripts/lib/**/*.js'])
      .pipe(plugins.concat('all.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('./public/scripts/lib/'));
  });

};