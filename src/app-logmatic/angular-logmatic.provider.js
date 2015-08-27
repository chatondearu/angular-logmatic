(function () {
  'use strict';

  angular
    .module('ngLogmatic')
    .provider('$logmatic', $logmatic);

  /** @ngInject */
  function $logmatic(logmatic) {
    var apiKey = null;

    this.setApiKey = function (key) {
      apiKey = key;
    };

    /**
     * add some meta attributes in final JSON
     * @type {Function|setMetas|l|*}
     * @param (Object)
     */
    this.setMetas = logmatic.setMetas;

    /**
     * fwd any error using 'exception' as JSON attr
     * @type {setSendConsoleErrors|c|*}
     * @param (String)
     */
    this.setSendConsoleErrors = logmatic.setSendConsoleErrors;

    /**
     * fwd any console log using 'level' as JSON attr
     * @type {setSendConsoleLogs|b|*}
     * @param (String)
     */
    this.setSendConsoleLogs = logmatic.setSendConsoleLogs;

    /**
     * resolve client IP and copy it @ 'client.IP'
     * @type {Function|setIPTracking|n|*}
     * @param (String)
     */
    this.setIPTracking = logmatic.setIPTracking;

    /**
     * resolve client UA and copy it @ 'client.user-agent'
     * @type {Function|setUserAgentTracking|o|*}
     * @param (String)
     */
    this.setUserAgentTracking = logmatic.setUserAgentTracking;

    /**
     * resolve URL and copy it @ 'url'
     * @type {Function|setURLTracking|m|*}
     * @param (String)
     */
    this.setURLTracking = logmatic.setURLTracking;


    this.$get = ["logmatic", function logmaticApi(logmatic) {

      if (apiKey !== null) {
        logmatic.init(apiKey);
      } else {
        $log.warn('[ngLogmatic] api-key cannot be as null.');
      }

      return new logmaticApiCtrl(logmatic);
    }];

    /** @ngInject */
    function logmaticApiCtrl(logmatic) {

      /**
       * log to logmatic !
       * @type {Function|log|*|j}
       * @param (String) message
       * @param (Object) metas
       */
      this.log = logmatic.log;
    }
  }

})();