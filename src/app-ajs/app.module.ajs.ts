'use strict';
import * as angular from 'angular';
import 'angular-route';

import './demo-app/demo-app.module';

// Define the `demoModule` module
angular.module('demoModule', [
  'ngRoute',
  'demoApp'
]);

