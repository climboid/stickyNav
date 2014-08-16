'use strict';

angular.module('stikcyApp')
  .controller('MainCtrl', function ($scope, $window) {

    
  	$scope.togglePriceTicket = false;
    $scope.openPriceTicket = function () {
    	$scope.togglePriceTicket = !$scope.togglePriceTicket;
    };

    $scope.$on('scroll', function(newVal, oldVal){
    	console.log('newVal',newVal,'oldVal',oldVal);
    });

  });
