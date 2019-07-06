"use strict";

angular.module("myApp").controller("HomeController",homeController);

homeController.$inject = [
    "$scope",
    "$http",
    "AppService",
    "$state"
];

function homeController(
    $scope,
    $http,
    AppService,
    $state
){
    $scope.loginObj = {};
    $scope.showMessagesDiv = false;
    $scope.showMessageContent = '';
    $scope.login = function(values){
        console.log('values: ', values);
        if(values && values.Username && values.password && (values.Username == 'karunakar' && values.password == "karunakar@123")){
            $state.go('dashboard');
        }else{
            $state.go('home');
            showSuccessAndErrorMsgs(true,'Please enter valid username and password');
        }
    }

    function showSuccessAndErrorMsgs(flag,text){
        $scope.showMessagesDiv = flag;
        $scope.showMessageContent = text;
        setTimeout(function(){
            $scope.showMessagesDiv = false;
            console.log('$scope.showMessagesDiv: ', $scope.showMessagesDiv);
        },1000);
    }
}