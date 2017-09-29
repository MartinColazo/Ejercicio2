var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
var styleInject = require("gulp-style-inject");

gulp.src("./src/index.html")
    .pipe(styleInject())
    .pipe(gulp.dest("./dist"));
angular.module('buttonsDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';

});
