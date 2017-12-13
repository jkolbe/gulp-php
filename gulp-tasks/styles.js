'use strict';

module.exports = function(gulp, plugins, del, config) {
  
  // Clean CSS
  gulp.task('clean-css', function() {
    return del(['./public/styles/**/*']);
  });

  // Copy vendor CSS files
  gulp.task('copy-vendor-css', ['clean-css'], function() {
    return gulp.src(['./src/styles/vendor/**/*.css'])
      .pipe(gulp.dest('./public/styles/vendor/'));
  });


  //Compile SASS files
  gulp.task('sass', ['copy-vendor-css'], function () {
    return gulp.src(['./src/styles/*.scss'])
      .pipe(plugins.sourcemaps.init({loadMaps:true}))
      .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest('./public/styles/'));
  });



};