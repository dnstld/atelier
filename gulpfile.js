var gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
    less = require("gulp-less"),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    deleteLines = require('gulp-delete-lines'),
    insertLines = require('gulp-insert-lines'),
    plumber = require('gulp-plumber'),

    // js files
    scripts  = {
      jquery: 'vendor/jQuery-EasyTabs/vendor/jquery-1.7.1.min.js',
      vegas: 'vendor/vegas/dist/vegas.js',
      slick: 'vendor/slick-carousel/slick/slick.js',
      hashchange: 'vendor/jQuery-EasyTabs/vendor/jquery.hashchange.min.js',
      easytabs: 'vendor/jQuery-EasyTabs/lib/jquery.easytabs.js',
      validate: 'vendor/jquery-validation/dist/jquery.validate.js',
      scroll: 'vendor/jquery-smooth-scroll/jquery.smooth-scroll.js',
      mask: 'vendor/jquery-mask-plugin/dist/jquery.mask.js',
      dataJson: 'assets/js/dataJson.js',
      dataTemplate: 'assets/js/dataTemplate.js',
      main: 'assets/js/main.js'
    };

// Static Server + watching less/html files
gulp.task('serve', ['less'], function() {
  browserSync.init({
      server: "./"
  });

  gulp.watch("assets/less/**/*.less", ['less']);
  gulp.watch("assets/js/*.js").on('change', browserSync.reload);
  gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
  return gulp.src("assets/less/main.less")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.stream());
});

// Autoprefixer and minify CSS
gulp.task('css', function() {
  return gulp.src("assets/css/main.css")
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/assets/css'))
});

// Concat and minify JS
gulp.task('js', function() {
  return gulp.src([
    scripts.jquery,
    scripts.vegas,
    scripts.slick,
    scripts.hashchange,
    scripts.easytabs,
    scripts.validate,
    scripts.scroll,
    scripts.mask,
    scripts.dataJson,
    scripts.dataTemplate,
    scripts.main
  ])
    .pipe(concat('main.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify().on('error', function(err) {
      console.log(err);
    }))
    .pipe(gulp.dest('build/assets/js'))
});

// HTML
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(deleteLines({
      'filters': [
        /<link\s+rel=/i
      ]
    }))
    .pipe(insertLines({
      'before': /<\/head>$/,
      'lineBefore': '    <link rel="stylesheet" type="text/css" href="assets/css/main.min.css">',
    }))
    .pipe(deleteLines({
      'filters': [
        /<script\s+src=/i
      ]
    }))
    .pipe(insertLines({
      'before': /<!--\sscript\s-->$/,
      'lineBefore': '    <script src="assets/js/main.min.js"></script>'
    }))
    .pipe(gulp.dest('build'))
});

// icon
gulp.task('icon', function() {
  return gulp.src('assets/icon/**/*.*')
    .pipe(gulp.dest('build/assets/icon'))
});

// svg
gulp.task('svg', function() {
  return gulp.src('assets/svg/**/*.*')
    .pipe(gulp.dest('build/assets/svg'))
});

// images
gulp.task('images', function() {
  return gulp.src('assets/images/**/*.*')
    .pipe(gulp.dest('build/assets/images'))
});

// favicon
gulp.task('favicon', function() {
  return gulp.src('favicon.ico')
    .pipe(gulp.dest('build/'))
});

// email
gulp.task('email', function() {
  return gulp.src('processa.php')
    .pipe(gulp.dest('build/'))
});

// servicesHome
gulp.task('servicesHome', function() {
  return gulp.src('services-home.json')
    .pipe(gulp.dest('build/'))
});

// services
gulp.task('services', function() {
  return gulp.src('services.json')
    .pipe(gulp.dest('build/'))
});

// default task
gulp.task('default', ['serve']);

// build task
gulp.task('build', ['html', 'css', 'js', 'icon', 'svg', 'images', 'favicon', 'email', 'servicesHome', 'services']);
