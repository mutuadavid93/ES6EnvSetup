const GULP = require('gulp'),
  BABEL = require('gulp-babel'),
  connect = require('gulp-connect');
var inject = require('gulp-inject');

GULP.task('transpile', () => {
  let jsSrc = 'src/*.js';
  return GULP.src(jsSrc)
    .pipe(BABEL())
    .pipe(GULP.dest('./build'))
    .pipe(connect.reload());
});

// Get Babel-Polyfill and Include it into index.html as script
GULP.task('polyfill', function() {
  var target = GULP.src('index.html');
  var sources = GULP.src(
    [
      'node_modules/babel-polyfill/build/polyfill.min.js',
      'node_modules/systemjs/build/system.js'
    ],
    { read: false }
  );
  return target.pipe(inject(sources)).pipe(GULP.dest('.'));
});

GULP.task('connect', () => {
  connect.server({
    root: '.',
    livereload: true
  });
});

GULP.task('watch', () => {
  let jsSrc = 'src/*.js';
  GULP.watch(jsSrc, ['transpile']);
});

GULP.task('default', ['transpile', 'connect', 'polyfill', 'watch']);
