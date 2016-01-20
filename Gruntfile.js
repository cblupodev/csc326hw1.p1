module.exports = function(grunt) {

  grunt.initConfig({

	  less: 
	  {
	      development: 
	      {
	        options: 
	        {
	          compress: true,
	          yuicompress: true,
	          optimization: 2,
			  paths: ["less/"]
	        },
	        files: 
	        [{
	  				expand: true,
	  				cwd: "bower_components/bootstrap/less",
	  				src: "**/bootstrap.less",
	  				dest: "www/css/",
	  				ext: ".css"
	        },
			{
	  				expand: true,
	  				cwd: "less",
	  				src: "local.less",
	  				dest: "www/css/",
	  				ext: ".css"
			}
	        ]
	      }
	  },
	  
	  bower_concat:
	  {
		all: 
		{
			dest: 'www/js/libs.js'
		}
	  }
  });

  // This will automatically load any grunt plugin you install, such as grunt-contrib-less.
  require('load-grunt-tasks')(grunt);

  // Rename task.
  grunt.registerTask('package', 'bower_concat'); 
};
