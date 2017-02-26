
// ��ȡ gulp
var gulp = require('gulp')

// ��ȡ uglify ģ�飨����ѹ�� JS��
var uglify = require('gulp-uglify')

// ��ȡ minify-css ģ�飨����ѹ�� CSS��
var minifyCSS = require('gulp-minify-css')

var concat = require('gulp-concat')

var rename = require('gulp-rename')

var gutil = require('gulp-util') //����������������ִ���ɫ

//ѹ�����ϲ� js

gulp.task('script',function() {
	return gulp.src('script/**/*.js')      //��Ҫ�������ļ�
		.pipe(concat('gui.js'))    //�ϲ�����js��main.js
		.pipe(gulp.dest('dist/js'))       //������ļ���
		.pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
		.pipe(uglify())    //ѹ��
		.pipe(gulp.dest('dist/js'));  //���
});

//ѹ�����ϲ� css

gulp.task('css',function() {
	return gulp.src('css/**/*.css')      //��Ҫ�������ļ�
		.pipe(concat('gui.css'))    //�ϲ�����js��main.js
		.pipe(gulp.dest('dist/css'))       //������ļ���
		.pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
		.pipe(minifyCSS())    //ѹ��
		.pipe(gulp.dest('dist/css'));  //���
});





// ��������ʹ�� gulp auto ����������
gulp.task('auto', function () {
    // �����ļ��޸ģ����ļ����޸���ִ�� script ����
    gulp.watch('script/**/*.js', ['script'])
	
	// �����ļ��޸ģ����ļ����޸���ִ�� script ����
    gulp.watch('css/**/*.css', ['css'])
})

//Ĭ�������cmd������gulp��ִ�еľ����������(ѹ��js��Ҫ�ڼ��js֮�����)
gulp.task('default',function() {
	gulp.start('script','css','auto'); 
});
