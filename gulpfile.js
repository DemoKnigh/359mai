//导入所需插件
const gulp = require("gulp");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const cssnano = require("gulp-cssnano");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

//发布任务
//压缩图片
gulp.task('imagemin',function(){
	gulp.src('./src/img/login/*')
		.pipe(imagemin())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/img/login'))
})