module.exports = function(grunt){
    grunt.initConfig({
        htmlmin:{
            options:{
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files:{
                src:'./index.html',
                dest:'dist/index.html'
            }
        },
        cssmin: {  
            files:{
                src:'./app.css',
                dest:'dist/app.css'
            }
          },
        uglify: {
            // my_target:{
              files: {
                src:'./app.js',
                dest:'dist/app.js'
              } 
            // }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['htmlmin','cssmin','uglify']);
};