var gulp = require('gulp'),
    inject = require('gulp-inject');

module.exports = function (filePathTarget, dest, items) {
    var target = gulp.src(filePathTarget);

    items.forEach(function (item, index) {

        console.log(item.name);

        var stream = gulp.src(item.src, { read: false });
        target = target.pipe(inject(stream, { name: item.name, relative: true }));
    });

    return target
        .pipe(gulp.dest(dest));
};