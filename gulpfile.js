//Configuracion de Gulp para compilar archivos SASS
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass')

function css(){
    return gulp
    .src('./scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade : false
    }))
    .pipe(gulp.dest('css'))
    
    // .pipe(sass({
    //     outputStyle: 'expanded' //otras opciones: nested, compact, compressed
    // }))
    // .pipe(gulp.dest('css'));
}

function watchFiles(){
    gulp.watch('./scss/*.scss', css);
    gulp.watch('index.html');
}

//Registrar funciones como tarea (Esto sirve para correr las funciones)
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));




// //Configuracion de Gulp para compilar archivos SASS
// const gulp = require('gulp'),
//       sass = require('gulp-sass'),
//       autoprefixer = require('gulp-autoprefixer');

// gulp.task('sass', () => {
//     gulp.src('scss/app.scss')
//         .pipe(autoprefixer({
//             browserlist: ['last 2 versions'],
//             cascade : false
//         }))
//         .pipe(sass({
//             includePaths: ['scss']
//         }))
//         .pipe(gulp.dest('css'));
// });

// gulp.task('watch', ['sass'], () => {
//     gulp.watch(['scss/*.css'], ['sass']);
// });
