Hello!

My task was to take this website (which is not a public site, only here on Github) and optimize the page speed and performance. 
You can follow any of the links on this website to view various projects or a fake pizza website!

In order to optimize the site, these are the steps I took: 
Steps I took to optimize page speed: 

- minify all CSS
- minify all JS
These two steps brought me up to between a 60-70 page score

- move JS script to bottom of html
- minimize images with grunt imagemin
- optimize images with ImageOptim
- resize pizza images
Once I optimized my images my score increased to low 80’s

- inline all css/js with grunt

-used google web fonts loader instead of linking directly
Okay on desktop but not quite there on mobile…

-found the one image that hadn’t been reduced to match it’s maximum display size and reduced it with Preview for Mac

for pizza.html: 
- adjusted two for loops to lower total pizza images on the page and speed up loading and scrolling; see comments in main.js
- changed some ‘querySelector’ to ‘getElementById’ or ‘getElementsByClassName’
- moved some variables from inside for loops to outside to increase efficiency; see js files for comments on which loops were adjusted

