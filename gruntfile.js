module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
		  compress: {
		    files: {
		      "a/css/min.flu.css": ["a/css/flu.css"]
		    }
		  }
		},

	  sass: {
	    dist: {
	    	options: {
					style: 'expanded',
					sourcemap: 'none'
	    	},
	      files: {
	        'a/css/flu.css': 'flucss.scss'
	      }
	    }
	  },

		watch: {
		  src: {
		    files: 'scss/**/*.scss',
		    tasks: ['sass']
		  }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'cssmin']);

};
