var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function () {
  gulp.src('flu.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./a/css'));
});

gulp.task('watch', function () {
  gulp.watch('**/*.scss', ['sass']);
});
