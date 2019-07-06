"use strict";

angular.module("myApp").controller("DashboardController",dashboardController);

dashboardController.$inject = [
    "$scope",
    "$http",
    "AppService"
];

function dashboardController(
    $scope,
    $http,
    AppService
){
    $scope.posts = [];
    $scope.isOpenCreateForm = false;
    $scope.isOpenEditForm = false;
    $scope.editRowValues = {};
    $scope.showMessagesDiv = false;
    $scope.showMessageContent = '';

    //Get the data from posts
    $scope.getApiData = function(){
        AppService.getData().then(function(response){
            console.log("response",response);
            $scope.posts = response.data;
        },function (error) {
            console.log('error: ', error);
		});
    }
    $scope.getApiData();
    
    //Create new post
    $scope.createNewPost = function(newValues){
        console.log("new post",newValues);
        if(newValues && newValues.title && newValues.body){
            var body = {
                "title": newValues.title,
                "body": newValues.body,
                "userId": 1
            }
            AppService.createPost(body).then(function(response){
                showSuccessAndErrorMsgs(true,'Posted Successfully !');
            },function (error) {
                showSuccessAndErrorMsgs(true,'Sorry,Try again !');
            });    
        }
        $scope.isOpenCreateForm = false;
    }

    //Get current row values
    $scope.getCurrentRowValues = function(values){
        $scope.editRowValues = values;
        $scope.isOpenEditForm = !$scope.isOpenEditForm; 
    }
    //Edit post
    $scope.editPost = function(editValues){
        $scope.isOpenEditForm = false;
        console.log('editValues: ', editValues);

        AppService.editPost(editValues).then(function(response){
            showSuccessAndErrorMsgs(true,'Updated Post Successfully !');
        },function (error) {
            showSuccessAndErrorMsgs(true,'Sorry,Try again !');
        });    
    }


    //delete post
    $scope.deletePost = function(id,index){
        console.log("id",id);
        AppService.deletePost(id).then(function(response){
            $scope.posts.splice(index,1);
            showSuccessAndErrorMsgs(true,'Post Deleted Successfully !');
        },function (error) {
            console.log("Sorry,Try again");
            showSuccessAndErrorMsgs(true,'Sorry,Try again !');
        }); 
    }


    //close form
    $scope.closeForm = function(type){
        if(type == 'edit'){
            $scope.isOpenEditForm = false;
        }else if(type == 'create'){
            $scope.isOpenCreateForm = false;
        }
    }

    function showSuccessAndErrorMsgs(flag,text){
        $scope.showMessagesDiv = flag;
        $scope.showMessageContent = text;
    }

    $scope.close = function(){
        $scope.showMessagesDiv = false;
    }
}