var gulp        = require('gulp'),
    del         = require('del'),
    plugins     = require('gulp-load-plugins')({lazy: true}),
    browserSync = require('browser-sync'),
    fs          = require('fs');


var config = { tasks: './gulp-tasks/' };
var taskList = fs.readdirSync(config.tasks);


taskList.forEach(function (taskFile) {
  console.log('');
  console.log('');
  console.log('taskFile', taskFile);
  console.log('');
  console.log('');
  require(config.tasks + taskFile)(gulp, plugins, del, config);
});


gulp.task('connect-sync', function() {
  plugins.connectPhp.server({
    base: './public/'
  }, function (){
    browserSync({
      proxy: '127.0.0.1:8000'
    });
  });
 
  gulp.watch('**/*.php').on('change', function () {
    browserSync.reload();
  });
});

gulp.task('hello', function () {
  'use strict';
  console.log('hello world', taskList);
})

gulp.task('default', [
  'hello',
  'copy-main',
  'copy-js',
  'sass',
  'connect-sync'
]);