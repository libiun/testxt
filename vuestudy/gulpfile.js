const gulp = require("gulp");
const webserver = require("gulp-webserver");
const $ = require("gulp-load-plugins")();

gulp.task("script", function() {
  gulp.src(["./bower_components/vue/dist/vue.js",
      "./bower_components/vue-resource/dist/vue-resource.js"
    ])
    .pipe(gulp.dest("app/js"));
});

gulp.task("default", ["script"], () => {
  gulp.src("app")
    .pipe($.webserver({
      livereload: true,
      open: true
    }));
});
