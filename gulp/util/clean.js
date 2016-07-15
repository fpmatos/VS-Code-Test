var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = function (src) {

    return gulp.src(src)
        .pipe(clean());
}