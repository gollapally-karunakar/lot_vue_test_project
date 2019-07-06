'use strict';

angular.module("myApp")
    .run(['$rootScope','$state','$stateProvider', '$urlRouterProvider',function($rootScope,$state,$stateProvider,$urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: function(){
                    return  '/views/home.html';
                },
                controller : 'HomeController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: function(){
                    return  '/views/dashboard.html';
                },
                controller : 'DashboardController'
            })
            .state('404', {
                url : '/404',
                template : function(){
                    return "<h1 class='error404'>404! Page Not Found</h1>";
                }
            });

            $urlRouterProvider.when('', '/home');
            $urlRouterProvider.otherwise(function(){
                return '/404';
        });
    }]);