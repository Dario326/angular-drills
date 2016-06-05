angular.module("filter").controller("filterCtrl", function($scope, filterSrv){
    
    
    $scope.people = function(){
        $scope.people = filterSrv.getData();
    }
    $scope.people();
})