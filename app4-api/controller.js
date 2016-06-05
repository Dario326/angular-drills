angular.module("httpRequest").controller("httpCtrl", function($scope, httpSrv){
    
    $scope.person = function(){ 
        $scope.person = httpSrv.getData()
        .then(function(results){
            return results.data;
        })
    }
    $scope.person(); 
})