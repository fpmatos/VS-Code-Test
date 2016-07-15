var gulp = require('gulp'),
    watch = require('gulp-watch'),
    config = require('../config.js').dev,
    typecript = require('../util/typescript.js'),
    less = require('../util/less.js'),
    clean = require('../util/clean.js'),
    inject = require('../util/inject.js'),
    mainBowerFiles = require('main-bower-files');

gulp.task('injectDev', function () {
    var filesAppToInject = config.js.src.concat(config.css.src);

    return inject('./index.html', './', [{ name: 'bower', src: mainBowerFiles() }, { name: '', src: filesAppToInject }]);
});

gulp.task('jsAppCleanDev', () => {
    return clean(config.ts.dest + '/**/*.js');
});

gulp.task('typescript:compiler', ['jsAppCleanDev'], function () {
   typecript(config.ts);
});

gulp.task('cssCleanDev', () => {
    return clean(config.css.src);
});

gulp.task('lessDev', ['cssCleanDev'], function () {
    less(config.less);
});

gulp.task('watchDev', function () {
    watch(config.ts.src, function () {
       gulp.start('typescript:compiler'); 
    });

    watch(config.less.src, function () {
        gulp.start('lessDev');
    });

    var watchFileChangedToInject = config.js.src.concat(config.css.src);

    watch(watchFileChangedToInject, function () {
        gulp.start('injectDev');
    })
});

gulp.task('devInit', ['injectDev', 'watchDev'], function () {
    
});