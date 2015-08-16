module.exports = function (grunt) {

//project configuration
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    //minify css
        cssmin: {
        	my_target: {
        		files: [{
        			expand: true, 
        			cwd: 'css/',
        			src: ['*.css', '!*.min.css'],
        			dest: 'css/',
        			ext: '.min.css'
        		
        		}]
        	}
        },

        uglify: {
            my_target: {
                files: {
                    //'js/perfmatters.min.js' : ['js/perfmatters.js'],
                    'views/js/main.min.js' : ['views/js/main.js']
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true, 
                    cwd: 'views/images', 
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'views/images'
                }]
            }
        },


        smoosher: {
            all: {
              files: {
                '1index.html': 'index.html',
              },
            },
          },



        htmlmin: {                                     // Task 
            dist: {                                      // Target 
                options: {                                 // Target options 
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files 
                    'index.html': 'index.html',
                    // 'project-2048.html': 'project-2048.html',
                    // 'project-mobile.html': 'project-mobile.html',
                    // 'project-webperf.html': 'project-webperf.html',     // 'destination': 'source' 
                    // 'views/pizza.html': 'views/pizza.html'
                }
            },
            dev: {                                       // Another target 
                files: {
                    'index.html': 'index.html',
                    // 'project-2048.html': 'project-2048.html',
                    // 'project-mobile.html': 'project-mobile.html',
                    // 'project-webperf.html': 'project-webperf.html',     // 'destination': 'source' 
                    // 'views/pizza.html': 'views/pizza.html'
                }
            }
        }
});




    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-html-smoosher-install-fix');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');


}