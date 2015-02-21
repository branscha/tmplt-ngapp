// Karma configuration for tests during development
//
module.exports = function (config) {
   config.set({
      basePath: '../..',
      frameworks: ['jasmine'],
      files: [
         'src/app/bower_components/angular/angular.js',
         'src/app/bower_components/angular-mocks/angular-mocks.js',
         'src/app/*.js',
         'src/test/*.js'
      ],
      exclude: ['src/test/karma.conf*.js'],
      reporters: ['progress'],
      port: 9876,
      logLevel: config.LOG_INFO,
      browsers: ['PhantomJS'],
      singleRun: false,
      autoWatch: true,
      plugins: [
         'karma-jasmine',
         'karma-phantomjs-launcher'
      ]
   });
};