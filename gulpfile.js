var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');

gulp.task('jade', function () {
    return gulp.src('src/index.jade')
   .pipe(jade({ pretty: false }))
   .pipe(gulp.dest('./'))
});
gulp.task('less', function () {
    return gulp.src('src/main.less')
    .pipe(less())
    .pipe(autoprefixer({browsers: ['last 2 versions'],}))
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css/'));
});
gulp.task('copy', function () {
    gulp.src("bower_components/bootstrap/dist/fonts/*")
    .pipe(gulp.dest('assets/fonts/'))
})