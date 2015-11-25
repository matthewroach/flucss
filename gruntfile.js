module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

	  sass: {
	    dist: {
	    	options: {
					style: 'expanded',
					sourcemap: 'none'
	    	},
	      files: {
	        'a/css/flu.css': 'flucss-dev.scss'
	      }
	    }
	  },

		watch: {
		  src: {
		    files: '**/*.scss',
		    tasks: ['sass']
		  }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass']);

};
