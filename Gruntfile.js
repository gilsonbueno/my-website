module.exports = function(grunt) {
    grunt.initConfig({
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
                    }
                ]
            }
        },
        clean: {
			all: ['vendors/']
		}
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('prod', ['clean:all', 'copy:main']);
};