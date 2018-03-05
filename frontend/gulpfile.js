let gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    cssmin = require('gulp-cssmin'),
    jsmin = require('gulp-jsmin'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'), // позволяет вывести ошибку и продолжить скрипт
    rev = require('gulp-rev'),
    inject = require('gulp-inject');


gulp.task('sass', () => {
    return gulp.src('./css/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['build-js']);
    gulp.watch('./css/**/*.css', ['build-css']);
});



gulp.task('build-js', function () {
    return pump([gulp.src(['./node_modules/jquery/dist/*.js', './node_modules/fancybox/dist/js/*.js', '!./node_modules/jquery/dist/*.min.js']),
        concat('script.js'),
        uglify(),
        rev(),
        gulp.dest('./build/js')]);
});

gulp.task('build-css', function () {
    return pump([gulp.src('./css/*.css'),
        concat('style.css'),
        cssmin(),
        rev(),
        gulp.dest('./build/css')]);
});


gulp.task('default', ['build-css', 'build-js'], () => {
    let target = gulp.src('./index.html');
    let sources = gulp.src(['./build/js/*.js', './build/css/*.css' ], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./build/.'));
});

gulp.task('build', ['watch']);