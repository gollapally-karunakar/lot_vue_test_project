'use strict';

myApp.config(['$stateProvider','$provide', '$qProvider','$urlRouterProvider',function($stateProvider,$provide, $qProvider,$urlRouterProvider){
    $provide.factory('$stateProvider', function () {
        return $stateProvider;
    });
    $provide.factory('$urlRouterProvider', function () {
       return $urlRouterProvider;
   });
   
     $qProvider.errorOnUnhandledRejections(false);
}]);