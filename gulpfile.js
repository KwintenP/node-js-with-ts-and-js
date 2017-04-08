const gulp = require("gulp");

gulp.task('copy-js', function() {
    gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'));
});