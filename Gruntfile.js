module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            files: {
                'dist/js/app.min.js': ['content/js/libs/bouncemarker.js', 
                                        'content/js/libs/handlebars.js',
                                        'content/js/libs/zepto.min.js',
                                        'content/js/libs/spin.min.js',
                                        'content/js/main.js']
            }
        }
        
    }
});

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};