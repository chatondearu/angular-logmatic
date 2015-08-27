(function() {
  'use strict';

  angular
    .module('app-test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($logmatic, $log) {
    var vm = this;

    vm.sendLog = sendLog;

    function sendLog() {
      $log.log('you send' + vm.message);
      $logmatic.log('test api logger', vm.message);
    }

  }
})();
