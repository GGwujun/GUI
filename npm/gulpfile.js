var gulp = require('gulp')��
    minifycss = require('gulp-minify-css')��
    concat = require('gulp-concat')��
    uglify = require('gulp-uglify')��
    rename = require('gulp-rename')��
    jshint=require('gulp-jshint');
    //�﷨���
    gulp.task('jshint'�� function () {
        return gulp.src('js/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
    //ѹ��css
    gulp.task('minifycss'�� function() {
        return gulp.src('css/*.css')    //��Ҫ�������ļ�
            .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
            .pipe(minifycss())   //ִ��ѹ��
            .pipe(gulp.dest('Css'));   //����ļ���
    });
    //ѹ�����ϲ� js
    gulp.task('minifyjs'�� function() {
        return gulp.src('js/*.js')      //��Ҫ�������ļ�
            .pipe(concat('main.js'))    //�ϲ�����js��main.js
            .pipe(gulp.dest('js'))       //������ļ���
            .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
            .pipe(uglify())    //ѹ��
            .pipe(gulp.dest('Js'));  //���
    });
����//Ĭ�������cmd������gulp��ִ�еľ����������(ѹ��js��Ҫ�ڼ��js֮�����)
    gulp.task('default'��['jshint']��function() {
        gulp.start('minifycss'��'minifyjs'); 
����});

//ѹ��html
  var htmlmin = require('gulp-htmlmin');
  gulp.task('html', function(){
     gulp.src('./*.html')
          .pipe(htmlmin({
            collapseWhitespace: true,
               removeComments: true
        }))
         .pipe(gulp.dest('dist'));
});

	//ͬ������仯
 gulp.task('dist', function(){
    gulp.watch('./*.html', ['html']);
     gulp.watch(['./css/style.css','./css/piano.css'], ['style']);
     gulp.watch(['./js/common.js','./js/piano.js'], ['script']);
 });