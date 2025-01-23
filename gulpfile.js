const gulp = require('gulp');
const pug = require('gulp-pug');
const watch = require('gulp-watch');

// Compile Pug files into HTML
gulp.task('pug', () => {
    return gulp
        .src('./src/pug/**/*.pug') // Adjust the path to your Pug files
        .pipe(pug({ pretty: true })) // Pretty HTML formatting
        .pipe(gulp.dest('./dist')); // Output to the dist folder
});

// Watch Pug files for changes
gulp.task('watch', () => {
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug'));
});

// Default task (optional)
gulp.task('default', gulp.series('pug', 'watch'));
