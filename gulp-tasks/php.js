'use strict';

module.exports = function(gulp, plugins, del, config) {
  
  // Clean main page parts
  gulp.task('clean-main', function() {
    // return del(['./public/**/*.php']);
    return del(['./public/*.php']);
  });

  gulp.task('copy-main', ['clean-main'],  function() {
    return gulp.src(['./src/*.php'])
      .pipe(gulp.dest('./public'));
  });


};