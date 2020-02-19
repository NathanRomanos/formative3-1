module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
    jshint: {
      all: ['Gruntfile.js', 'js/script.js']
      },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/style.css': 'sass/style.scss'      // 'destination': 'source'
        }
      }
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/style.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/style.css']
      }
    },
    watch: {
      all: {
        files: ['sass/style.scss','css/style.css', 'js/script.js'],
        tasks: ['sass','csslint', 'jshint'],
      },
    },
    uglify: {

      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // // Default task(s).
  // grunt.registerTask('default', ['uglify']);
  // grunt.registerTask('default', ['sass', 'jshint', 'csslint', 'watch']);
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('ugly', ['uglify']);

};
