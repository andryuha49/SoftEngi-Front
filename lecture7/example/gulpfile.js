var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');

var sass = require('gulp-sass');
 
gulp.task('less', function () {
  return gulp.src('./src/less/**/*.less')
    .pipe(less().on('error', sass.logError))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('watch', function(){
    watch(['./src/less/**/*.less'], function(event, cb) {
        gulp.start('less');
    });

    gulp.watch('./src/sass/**/*.scss', ['sass']);
});