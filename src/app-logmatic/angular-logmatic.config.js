(function() {
  'use strict';

  angular
    .module('ngLogmatic')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();