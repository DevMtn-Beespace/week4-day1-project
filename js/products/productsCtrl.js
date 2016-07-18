angular.module('miniRoutingApp')
.controller('productsCtrl',function($scope, $stateParams, productSvc) {
  $scope.testProducts = "test products";

  if ($stateParams.id === 'shoes') {
    $scope.productData = productSvc.shoeData;
  } else if ($stateParams.id === 'socks') {
    $scope.productData = productSvc.sockData;
  }

});
