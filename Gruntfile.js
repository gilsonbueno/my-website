module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {
                        src: 'node_modules/angular/angular.min.js',
                        dest: 'vendors/angular/angular.min.js'
                    },
                    {
                        src: 'node_modules/angular-route/angular-route.min.js',
                        dest: 'vendors/angular-route/angular-route.min.js'
                    },
                    {
                        src: 'node_modules/jquery-slim/dist/jquery.slim.js',
                        dest: 'vendors/jquery-slim/jquery.slim.js'
                    },
                    {
                        src: 'node_modules/jquery-slim/dist/jquery.slim.js',
                        dest: 'vendors/jquery-slim/jquery.slim.js'
                    },
                    {
                        src: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
                        dest: 'vendors/bootstrap/bootstrap.min.js'
                    },
                    {
                        src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        dest: 'vendors/bootstrap/bootstrap.min.css'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
                        dest: 'vendors/fontawesome-free/all.min.css'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css',
                        dest: 'vendors/fontawesome-free/fontawesome.min.css'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2',
                        dest: 'vendors/webfonts/fa-solid-900.woff2'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff',
                        dest: 'vendors/webfonts/fa-solid-900.woff'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
                        dest: 'vendors/webfonts/fa-brands-400.woff2'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff',
                        dest: 'vendors/webfonts/fa-brands-400.woff'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf',
                        dest: 'vendors/webfonts/fa-brands-400.ttf'
                    },
                    {
                        src: 'img/background.jpg',
                        dest: 'build/img/background.jpg'
                    },
                    {
                        src: 'favicon.ico',
                        dest: 'build/favicon.ico'
                    }
                ]
            },
            build: {
                files: [
                    {
                        src: 'node_modules/angular/angular.min.js',
                        dest: 'build/js/angular.min.js'
                    },
                    {
                        src: 'node_modules/angular-route/angular-route.min.js',
                        dest: 'build/js/angular-route.min.js'
                    },
                    {
                        src: 'node_modules/jquery-slim/dist/jquery.slim.js',
                        dest: 'build/js/jquery.slim.js'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2',
                        dest: 'build/webfonts/fa-solid-900.woff2'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff',
                        dest: 'build/webfonts/fa-solid-900.woff'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
                        dest: 'build/webfonts/fa-brands-400.woff2'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff',
                        dest: 'build/webfonts/fa-brands-400.woff'
                    },
                    {
                        src: 'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf',
                        dest: 'build/webfonts/fa-brands-400.ttf'
                    },
                    {
                        src: 'favicon.ico',
                        dest: 'build/favicon.ico'
                    },
                    {
                        src: 'img/background.jpg',
                        dest: 'build/img/background.jpg'
                    },
                ]
            }
        },
        clean: {
            all: ['vendors/', 'build/'],
            build: ['build/js/main.js', 'build/js/vendors.js', 'build/css/styles.css', 'build/css/vendors.css']
        },
        concat: {
            js: {
                files: {
                    'build/js/main.js': [
                        'js/*.js', 'js/**/*.js'
                    ],
                    'build/js/vendors.js': [
                        'vendors/**/*.js'
                    ]
                }
            },
            css: {			
                files: {
                    'build/css/styles.css': [						
                        'css/*.css'
                    ],
                    'build/css/vendors.css': [
						'vendors/**/*.css'                       
                    ]
                }
            }
        },
        cssmin: {
            options: {
				banner: '/ My minified css file /',
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/styles.min.css': ['build/css/styles.css'],
                    'build/css/vendors.min.css': ['build/css/vendors.css']
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> | Copyright (c) <%= grunt.template.today("dd-mm-yyyy") %> by Gilson Bueno */\n'
            },
            build: {
                files: {
                    'build/js/main.min.js': ['build/js/main.js'],
                    'build/js/vendors.min.js': ['build/js/vendors.js']
                }
            }
        },
        htmlmin: {
			index: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'build/index.html': 'build/index.html'
				}
			},
			views: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [
					{
						expand: true,
						cwd: 'views/',
						src: ['**/*.html'],
						dest: 'build/views'
					}
				]
			}
        },
        processhtml: {
			prod: {
				options: {
					process: true,
					data: {
						title: '<%= pkg.name %>',
						message: 'This is production distribution'
					}
				},
				files: {
					'build/index.html': ['index.html']
				}
			}
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('dev', ['clean:all', 'copy:main']);
    grunt.registerTask('prod', ['clean:all', 'copy:main', 'copy:build', 'concat', 'uglify', 'cssmin', 'htmlmin:index', 'htmlmin:views', 'clean:build', 'processhtml:prod', 'htmlmin:index']);
};