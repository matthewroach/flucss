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
					style: 'expanded'
	    	},
	      files: {
	        'a/css/flu.css': 'a/src/scss/<%= pkg.name %>.scss'
	      }
	    }
	  },

		watch: {
		  src: {
		    files: 'a/src/scss/**/*.scss',
		    tasks: ['sass']
		  }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'cssmin']);

};
