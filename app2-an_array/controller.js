angular.module("arrayApp").controller("arrayCtrl", function($scope, arraySrv){
    $scope.people = function(){
        $scope.people = arraySrv.getData();
    }
    $scope.people();
})