const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

const uglifys = require('gulp-uglifyes');

const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');


gulp.task("message",async()=>{
    return console.log("hello");
    done();
});

//copy html
gulp.task('copyHtml',function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});


// optimize images
gulp.task('imageMin',()=>{
    return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});
//minify js
gulp.task('minify',()=>{
    return gulp.src('src/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
});
//minify css
gulp.task('cssMin',()=>{
    return gulp.src('src/css/*.css')
            .pipe(cssmin())
            .pipe(gulp.dest('dist/css'));
});
//minify js
gulp.task('scripts',()=>{
    return gulp.src('src/js/*.js')
            .pipe(concat('main.js'))
            // .pipe(babel({
            //     presets:['es2015']
            // }))
            .pipe(uglifys())
            .pipe(gulp.dest('dist/js'));
});
//default
gulp.task('default',gulp.parallel(['copyHtml','imageMin','scripts','cssMin']));

