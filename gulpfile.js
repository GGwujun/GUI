
// 获取 gulp
var gulp = require('gulp')

// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify')

// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css')

var concat = require('gulp-concat')

var rename = require('gulp-rename')

var gutil = require('gulp-util') //让命令行输出的文字带颜色

//压缩，合并 js

gulp.task('script',function() {
	return gulp.src('script/**/*.js')      //需要操作的文件
		.pipe(concat('gui.js'))    //合并所有js到main.js
		.pipe(gulp.dest('dist/js'))       //输出到文件夹
		.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
		.pipe(uglify())    //压缩
		.pipe(gulp.dest('dist/js'));  //输出
});

//压缩，合并 css

gulp.task('css',function() {
	return gulp.src('css/**/*.css')      //需要操作的文件
		.pipe(concat('gui.css'))    //合并所有js到main.js
		.pipe(gulp.dest('dist/css'))       //输出到文件夹
		.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
		.pipe(minifyCSS())    //压缩
		.pipe(gulp.dest('dist/css'));  //输出
});





// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('script/**/*.js', ['script'])
	
	// 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('css/**/*.css', ['css'])
})

//默认命令，在cmd中输入gulp后，执行的就是这个任务(压缩js需要在检查js之后操作)
gulp.task('default',function() {
	gulp.start('script','css','auto'); 
});
