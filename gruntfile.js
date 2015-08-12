module.exports = function (grunt) {

//project configuration
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    //minify css
        cssmin: {
        	my_target: {
        		files: [{
        			expand: true, 
        			cwd: 'views/css/',
        			src: ['*.css', '!*.min.css'],
        			dest: 'css/',
        			ext: '.min.css'
        		
        		}]
        	}
        },

        uglify: {
            my_target: {
                files: {
                    'js/perfmatters.min.js' : ['js/perfmatters.js'],
                    'views/js/main.min.js' : ['views/js/main.js']
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    grunt.loadNpmTasks('grunt-contrib-uglify');
}