let gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
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

gulp.task('sass:watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['build-js']);
    gulp.watch('./css/**/*.css', ['build-css']);
});



gulp.task('build-js', function () {
    return gulp.src('./js/*.js')
        .pipe(concat('script.js'))
        .pipe(jsmin())
        .pipe(rev())
        .pipe(gulp.dest('./build/js'))
});

gulp.task('build-css', function () {
    return gulp.src('./css/*.css')
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rev())
        .pipe(gulp.dest('./build/css'))
});


gulp.task('default', ['build-css', 'build-js'], () => {
    let target = gulp.src('./index.php');
    let sources = gulp.src(['./build/js/*.js', './build/css/*.css' ], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['watch']);
