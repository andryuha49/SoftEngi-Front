var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');

var sass = require('gulp-sass');

var htmlmin = require('gulp-html-minifier');
var minify = require('gulp-minify');

gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less().on('error', sass.logError))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('minifyHtml', function() {
    gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))
});

gulp.task('compressJs', function() {
    gulp.src('./src/js/*.js')
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('build', function(){
    gulp.start('less');
    gulp.start('minifyHtml');
    gulp.start('compressJs');
});

gulp.task('watch', function(){
    watch(['./src/less/*.less'], function(event, cb) {
        gulp.start('less');
    });

    gulp.watch('./src/sass/*.scss', ['sass']);

    watch(['./src/*.html'], function(event, cb) {
        gulp.start('minifyHtml');
    });
    watch(['./src/js/*.js'], function(event, cb) {
        gulp.start('compressJs');
    });
});