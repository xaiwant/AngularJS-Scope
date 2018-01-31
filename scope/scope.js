	  
   var myApp = angular.module('myApp', []);
       myApp.run(function($rootScope) {
            $rootScope.name = "Shekhar";
            $rootScope.job = "Drupal Module Lead";
       });
       myApp.controller('myCtrl', function($scope) {
            $scope.name = "Jaywant Topno";
            $scope.job = "Drupal Developer";
       });
       myApp.controller('yourCtrl', function($scope) {
            $scope.name = "Ram";
            $scope.job = " Drupal Architect";
       });