var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var ngAnnotate = require("gulp-ng-annotate");

module.exports = function (config) {

    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: "amd",
            target: "ES5",
            declarationFiles: false,
            noEmitOnError : false,
            emitDecoratorMetadata: true
            
        }))
        .js
        .pipe(concat("app.js"))
        .pipe(ngAnnotate())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(config.dest));
}
