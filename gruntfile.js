module.exports = function(grunt) {

    'use strict';

    // Load Grunt tasks automatically ---------------------------------

    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });



    // Project configuration.z
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
          options: {
                reporter: require('jshint-stylish')
          },
          all: {
                src: [ 'gruntfile.js', 'assets/js/kc.js']
              }
        },
        uglify: {
            options: {
                mangle: false //To prevent changes to your variable and function names
              },
            files: {
                src: 'assets/js/kc.js', // source files mask
                dest: 'js/', // destination folder
                expand: true, // allow dynamic building
                flatten: true, // remove all unnecessary nesting
                ext: '.min.js' // replace .js to .min.js
            }
        },
        compass: {
          dev: {
            options: {
              sassDir:        'assets/scss',
              cssDir:         'css',
              imagesDir:      'img',
              outputStyle:    'expanded',
              relativeAssets: true,
              noLineComments: true,
              sourcemap:      false,
              force:          true
            }
          },

          dist: {
            options: {
              sassDir:        'assets/scss',
              cssDir:         'css',
              imagesDir:      'img',
              outputStyle:    'compact',
              relativeAssets: true,
              noLineComments: true,
              sourcemap:      false,
              force:          true
            }
          }
        },

        concat: {
            dist: {
                src: ['assets/js/kc.js', '!assets/js/app.js'],
                dest: 'js/kc.js',
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
          options: {
              livereload: true,
            },
            js: {
                files: [ 'gruntfile.js', 'assets/js/**/*.js' ] ,
                tasks: ['newer:jshint:all', 'newer:concat', 'newer:uglify',]
            },

            css: {
                files: ['assets/**/*.scss'],
                tasks: ['compass']
            },
            html: {
              files: ['*.html'],
            }
            // livereload: {

            //     files: ['*.html', '*.php', 'css/*.css', 'js/*.min.js', 'img/**']
            // }

        },

        connect: {
           server: {
             options: {
               port: 9000,
               base: '.',
               hostname: '0.0.0.0',
               protocol: 'http',
               livereload: true,
               open: true,
             }
           }
         },
    });



    // register at least this one task
    grunt.registerTask('prod', ['concat', 'uglify', 'compass:dist', 'cssmin']);
    grunt.registerTask('dev', ['connect','watch']);
     // grunt.registerTask('dev', 'watch');
};
