Udacity Front End Developer Nanodegree - Project 5: Portfolio Optimization
08/31/2015

Hello!

My task was to take this course website hosted at https://github.com/udacity/frontend-nanodegree-mobile-portfolio and optimize the page speed and performance. 

My first task was to score above a 90 on Google PageSpeed Insights (https://developers.google.com/speed/pagespeed/insights/) 

In order to optimize the site I used the following tools:
 - Grunt (gruntjs.com)
 - ImageOptim (imageoptim.com)

Steps I took to optimize page speed: 
	Running Grunt from the Mac Terminal: 
	- minify all CSS (cssmin)
	- minify all JS (uglify)
	- inline all css/js (smoosher)
	You can find instructions for downloading and getting started with Grunt at http://gruntjs.com/getting-started 
	Note that you will also need to download node.js to run Grunt

	Within index.html:
	- move JS script to bottom of html
	-used google web fonts loader instead of linking directly
	Optimizing Images:
	- minimize images with grunt imagemin (imagemin)
	- optimize images with ImageOptim
	- resize pizza images manually with Mac preview

The second task was to increase optimization and pagespeed in views/pizza.html. 

Steps I took to optimize pizza.html:
	Within pizza.html: 
	-minified HTML using Grunt & the terminal

	Within views/js/main.js: 
	- changed ‘querySelector’ to ‘getElementById’ or ‘getElementsByClassName’ - see comments in main.js
	- moved variable declarations from inside for loops to outside to increase efficiency on lines 455-458, 479, 511-515, 536-541; 

