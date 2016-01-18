module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        stage: 0
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'lib'
        }]
      }
    },
    browserify: {
      examples: {
        files: [{
          dest: 'examples/js/build.js',
          src: ['src/**/*.js', 'examples/js/examples.js']
        }],
        options: {
          transform: [
            [
              'babelify',
              {
                stage: 0,
                only: /src|examples/
              }
            ]
          ]
        }
      }
    },
    eslint: {
      target: ['src/**/*.js']
    },
    uglify: {
      examples: {
        files: {
          'examples/js/build.min.js': ['examples/js/build.js']
        }
      }
    },
    watch: {
      example: {
        files: ['src/**/*.js', 'examples/js/examples.js'],
        tasks: ['browserify:examples']
      }
    }
  });

  grunt.registerTask('examples', ['browserify:examples', 'uglify:examples']);
  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('build', ['babel']);
  grunt.registerTask('default', ['test', 'build']);
};
