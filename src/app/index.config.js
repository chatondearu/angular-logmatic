(function() {
  'use strict';

  angular
    .module('app-test')
    .config(config);

  /** @ngInject */
  function config($logProvider, $logmaticProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $logmaticProvider.setApiKey('<your-api-key>');
  }

})();