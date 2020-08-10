const gulp = require("gulp"); // Подключаем Gulp
const watch = require("gulp-watch");

// Слежение за HTML и CSS и обновление браузера
gulp.task("watch:build", function() {
    // Запуск слежения и компиляции LESS с задержкой
    gulp.watch("./src/scss/**/*.scss", gulp.parallel("scss"));

    // Слежение за PUG и сборка страниц и шаблонов
    gulp.watch("./src/pug/**/*.pug", gulp.parallel("pug:pages", "pug:ui-kit"));

    // Слежение за JSON данным
    gulp.watch("./src/data/**/*.json", gulp.parallel("pug:pages", "pug:ui-kit"));

    // Слежение за разделом UI-Kit
    gulp.watch("./src/pug/ui-kit/**/*.pug", gulp.parallel("pug:ui-kit"));
    gulp.watch("./src/pug/ui-kit/**/*.md", gulp.parallel("pug:ui-kit"));

    // Слежение и копирование статических файлов и скриптов
    gulp.watch("./src/img/**/*.*", gulp.parallel("copy:img"));
    gulp.watch("./src/files/**/*.*", gulp.parallel("copy:files"));
    gulp.watch("./src/libs/**/*.*", gulp.parallel("copy:libs"));
    gulp.watch("./src/js/**/*.*", gulp.parallel("copy:js"));
});
