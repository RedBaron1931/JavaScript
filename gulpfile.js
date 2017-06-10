const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['babel'], function(){
    gulp.watch('src/js/**/*.js', ['babel']);
});