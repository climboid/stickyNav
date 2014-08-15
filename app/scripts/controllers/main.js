'use strict';

angular.module('stikcyApp')
  .controller('MainCtrl', function ($scope) {
    
  	$scope.togglePriceTicket = false;
    $scope.openPriceTicket = function () {
    	$scope.togglePriceTicket = !$scope.togglePriceTicket;
    };

  });
