var gulp = require('gulp')
var babel = require('gulp-babel')
var uglify = require('gulp-uglify')
var sass = require('gulp-sass')
var csso = require('gulp-csso')
var imagemin = require('gulp-imagemin')
var newer = require('gulp-newer')
var pngquant = require('imagemin-pngquant')
var autoprefixer = require('gulp-autoprefixer')
var lr

function notifyLivereload (event) {
  var filename = require('path').relative(__dirname, event.path)

  lr.changed({
    body: {
      files: [ filename ]
    }
  })
}

gulp.task('jekyll', function () {
  require('child_process').spawn('jekyll', [ 'build', '--incremental' ], { stdio: 'inherit' })
})

gulp.task('scripts', function () {
  return gulp.src('_src/js/*.js')
    .pipe(newer('assets/js'))
    .pipe(babel({
			presets: [ 'env' ]
		}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(gulp.dest('_site/assets/js'))
})

gulp.task('styles', function () {
  return gulp.src('_src/scss/*.scss')
    .pipe(newer('assets/css'))
    .pipe(sass({
      style: 'compressed'
    }).on('err', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(csso(true))
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'))
})

gulp.task('vectors', function () {
  return gulp.src('_src/img/**/*.svg')
    .pipe(newer('assets/img'))
    .pipe(imagemin({
      svgoPlugins: [{ removeTitle: true }, { removeDesc: true }]
    }))
    .pipe(gulp.dest('assets/img'))
    .pipe(gulp.dest('_site/assets/img'))
})

gulp.task('images', function () {
  return gulp.src('_src/img/**/*.{jpg,png}')
    .pipe(newer('assets/img'))
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('assets/img'))
    .pipe(gulp.dest('_site/assets/img'))
})

gulp.task('server', function () {
  var express = require('express')
  var app = express()

  app.use(require('connect-livereload')())
  app.use(express.static(__dirname + '/_site'))
  app.listen(4000)

  lr = require('tiny-lr')()
  lr.listen(35729)

  require('opn')('http://localhost:4000')
})

gulp.task('watch', function () {
  gulp.watch([ '_config.yml', '*.html', '_includes/*.html', '_layouts/*.html', 'portfolio/*.html', 'portfolio/_posts/*.md' ], [ 'jekyll' ])
  gulp.watch('_src/img/**/*.{jpg,png}', [ 'images' ])
  gulp.watch('_src/img/**/*.svg', [ 'vectors' ])
  gulp.watch([ '_site/assets/js/*.js', '_site/assets/css/*.css', '_site/assets/img/**/*.*', '_site/**/*.html' ], notifyLivereload)
})

gulp.task('build', [ 'styles', 'scripts', 'vectors', 'images', 'jekyll' ])
gulp.task('default', [ 'build', 'server', 'watch' ])
