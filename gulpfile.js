const gulp = require('gulp');
const BABEL = require('gulp-babel');
const connect = require('gulp-connect');
const inject = require('gulp-inject');

gulp.task('transpile', () => {
    const jsSrc = 'src/*.js';
    return gulp
        .src(jsSrc)
        .pipe(BABEL())
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

// Get Babel-Polyfill and Include it into index.html as script
gulp.task('polyfill', () => {
    const target = gulp.src('index.html');
    const sources = gulp.src(
        [
            'node_modules/babel-polyfill/dist/polyfill.min.js',
            'node_modules/systemjs/dist/system.js'
        ],
        { read: false }
    );
    return target.pipe(inject(sources)).pipe(gulp.dest('.'));
});

gulp.task('connect', () => {
    return new Promise((resolve) => {
        connect.server({
            root: '.',
            livereload: true
        });
        resolve();
    });
});

gulp.task('watch', async () => {
    const jsSrc = 'src/*.js';
    gulp.watch(jsSrc, gulp.series('transpile'));
});

// Execute the Tasks one After the Other Sequentially.
gulp.task('default', gulp.series('transpile', 'connect', 'polyfill', 'watch'));
