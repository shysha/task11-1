module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),



        // requirejs: {
        //     build: {
        //         options: {
        //             baseUrl: 'js',
        //             name: 'main', //主文件名字
        //             optimize: 'uglify', //指定压缩工具类型  使用uglify工具压缩
        //             mainConfigFile: 'js/main.js', //require 的主文件
        //             out: 'static/aio.min.js' //压缩后的文件
        //                 //其他无需指定  本插件会自动寻找require引进的所有文件
        //         }
        //     }
        // },



        // 合并
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            js: {
                src: [
                    "src/*.js"
                ],
                dest: "dist/js/app.js"
            },

        },

        //less
        less: {
            compile: {
                files: {
                    'css/jikestyle.css': 'css/jikestyle.less'
                }
            }
        },
        //压缩js
        uglify: {
            build: {
                src: 'dist/js/app.js', //压缩源文件是之前合并的app.js文件
                dest: 'dist/js/appmin.js' //压缩文件为app.min.js
            }
        },
        //压缩css
        cssmin: {
            css: {
                src: 'css/jikestyle.css', //将之前less编译过的index.css进行压缩
                dest: 'dist/css/jikestyle.min.css' //压缩文件为index.min.css
            }
        },
        // //压缩图片
        imagemin: {
            prod: {
                options: {
                    optimizationLevel: 7,
                    pngquant: true
                },
                files: [
                    { expand: true, cwd: '', src: ['img/*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dist' }
                ]
            }
        },
        // // 处理html中css、js 引入合并问题
        // // usemin: {
        // //     html: 'dist/*.html'
        // // },
        // //压缩HTML
        htmlmin: {
            dist:{
            options: {
                removeComments: true,
                // removeCommentsFromCDATA: true
                collapseWhitespace: true
                // collapseBooleanAttributes: true,
                // removeAttributeQuotes: true,
                // removeRedundantAttributes: true,
                // useShortDoctype: true,
                // removeEmptyAttributes: true,
                // removeOptionalTags: true
            },
            
                files: [
                    { expand: true, cwd: '', src: ['*.html'], dest: 'dist' }
                ]
            
            }
        },
        //监听
        watch: {
            scripts: {
                files: ['css/*.less'],
                tasks: ['less']
            }
        }
    });


    //加载任务插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks('grunt-usemin');


    // grunt.loadNpmTasks('grunt-contrib-requirejs');

    // grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['concat', 'less', 'uglify', 'cssmin', 'imagemin','htmlmin']);

};
