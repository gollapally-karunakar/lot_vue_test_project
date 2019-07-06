angular.module("myApp")
    .factory("AppService",appService);

appService.$inject = [
    "$http",
    "$q"
];

function appService(
    $http,
    $q
){
    return {
        getData : getData,
        createPost : createPost,
        editPost : editPost,
        deletePost : deletePost
    }

    /** 
     * Get from the API
    */
    function getData(){
        var appUrl = "https://jsonplaceholder.typicode.com/posts";

        var request = $http({
            method:'GET',
            url:appUrl
        });
        return (request
                    .then(getDataSuccess)
                    .catch(getDataError));
        //Success function
        function getDataSuccess(response){
            return (response);
        }
        
        //Error Handling
        function getDataError(response){
            if(!angular.isObject(response.data) || !response.data.message){
                return ($q.reject(response.data))
            }
            return ($q.reject(response.data.message));
        }
    }

    /** 
     * Create posts
    */
   function createPost(body){
        var appUrl = "https://jsonplaceholder.typicode.com/posts";
        var request = $http({
            method:'POST',
            url:appUrl,
            body:body,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        return (request.then(getDataSuccess).catch(getDataError));
        //Success function
        function getDataSuccess(response){
            return (response);
        }
        
        //Error Handling
        function getDataError(response){
            if(!angular.isObject(response.data) || !response.data.message){
                return ($q.reject(response.data))
            }
            return ($q.reject(response.data.message));
        }
    }
    /** 
     * Edit posts
    */
   function editPost(params){
        var appUrl = "https://jsonplaceholder.typicode.com/posts/"+params.id;
        var request = $http({
            method:'PUT',
            url:appUrl,
            body:JSON.stringify(params.body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        return (request
                    .then(getDataSuccess)
                    .catch(getDataError));
        //Success function
        function getDataSuccess(response){
            return (response);
        }
        
        //Error Handling
        function getDataError(response){
            if(!angular.isObject(response.data) || !response.data.message){
                return ($q.reject(response.data))
            }
            return ($q.reject(response.data.message));
        }
    }

    /** 
     * delete post
    */
   function deletePost(id){
        var appUrl = "https://jsonplaceholder.typicode.com/posts/"+id;
        var request = $http({
            method:'DELETE',
            url:appUrl,
        });
        return (request
                    .then(getDataSuccess)
                    .catch(getDataError));
        //Success function
        function getDataSuccess(response){
            return (response);
        }
        
        //Error Handling
        function getDataError(response){
            if(!angular.isObject(response.data) || !response.data.message){
                return ($q.reject(response.data))
            }
            return ($q.reject(response.data.message));
        }
    }
}
