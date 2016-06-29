var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');

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
    gulp.src("bower_components/magnific-popup/dist/*.min.js")
    .pipe(gulp.dest('assets/js/'))
})
gulp.task('imgmin', function () {
         gulp.src('assets/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img/'))
         gulp.src('assets/img/gallery/thumbnails/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img/gallery/thumbnails/'))
         gulp.src('assets/img/gallery/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img/gallery/'))
});