(function() {
  'use strict';

  angular
    .module('app-test')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.info('Hello World!');
  }

})();
