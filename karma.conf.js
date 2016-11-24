//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.module.js',
      'phone-list/phone-list.module.js',
      'phone-list/phone-list.component.js',
      'phone-list/phone-list.component.spec.js'
    ],

    autoWatch: true,
    singleRun: false,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
