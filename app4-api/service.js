angular.module("httpRequest").service("httpSrv", function($http, httpUrl){
    this.getData = function(){
        return $http.get(httpUrl.url + "people/1")
    }
})