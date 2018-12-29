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
});

//压缩js
gulp.task('jsmin',()=>{
	gulp.src('./src/js/*.js')
		.pipe(uglify())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/js'))
})

//编译sass,并压缩
gulp.task('cssmin',()=>{
	gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/css'))
})

//监听
gulp.task('default',()=>{
	gulp.watch('./src/js/*.js',['jsmin']);
	gulp.watch('./src/sass/*.scss',['cssmin'])
})