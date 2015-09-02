# angular-logmatic

Angular module for logmatic-js, send your log to logmatic.io with Javascript.


## Installation

classic installation
```html
    <script type="text/javascript" src="vendors_dir/angular-logmatic-js/dist/angular-logmatic.min.js"></script>
```

with Bower
```
bower install angular-logmatic --save
```

### Add the module

add the logmatic module to your application
```javascript

  angular
    .module('myApp', [
      'ngLogmatic'
    ]);

```

### Setup configuration

in your application configuration, use the logmatic provider to set your API key and other functionality.
```javascript

  angular
    .module('myApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $logmaticProvider) {
    // Enable log
    $logProvider.debugEnabled(true);


    // Set your API key
    $logmaticProvider.setApiKey('<your-api-key>');

    // OPTIONAL init methods
    // add some meta attributes in final JSON
    $logmaticProvider.setMetas({'userId': '1234'});
    // fwd any error using 'exception' as JSON attr
    $logmaticProvider.setSendConsoleErrors('exception');
    // fwd any console log using 'level' as JSON attr
    $logmaticProvider.setSendConsoleLogs('level');
    // resolve client IP and copy it @ 'client.IP'
    $logmaticProvider.setIPTracking('client.IP');
    // resolve client UA and copy it @ 'client.user-agent'
    $logmaticProvider.setUserAgentTracking('client.user-agent');
    // resolve URL and copy it @ 'url'
    $logmaticProvider.setURLTracking('url');

  }

```

### Use

Simply usage, get the provider `$logmatic` to your controller (or other) and log your message with it!
```javascript

  angular
    .module('myApp)
    .controller('MainController', MainController);

  function MainController($logmatic, $log) {
    $logmatic.log('test api logger', vm.message);
  }

```