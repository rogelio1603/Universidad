const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css(){
    return gulp
    .src('scss/app.scss')
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade : false
    }))
    .pipe(sass({
        outputStyle: 'expanded' //otras opciones: nested, compact, compressed
    }))
    .pipe(gulp.dest('css'));
}

function watchFiles(){
    gulp.watch('scss/*.scss', css)
}

//Registrar funciones como tarea (Esto sirve para correr las funciones)
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));
