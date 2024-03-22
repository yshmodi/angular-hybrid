"use strict";
import * as angular from "angular";

angular.module("demoModule").config([
  "$locationProvider",
  "$routeProvider",
  function config(
    $locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider
  ) {
    $locationProvider.hashPrefix("");

    $routeProvider.when("/demo", {
      template: "<demo-app></demo-app>",
    });
  },
]);
