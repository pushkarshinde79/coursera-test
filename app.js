(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter) {
  $scope.name = "";
  $scope.totalLength=0;
  $scope.msg = "";

  $scope.displayLength = function(){
  //  var totalStringLength = 1 ;calculateStringLength($scope.name);
    $scope.totalLength = = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
    if($scope.totalLength <= 3)
    {
      $scope.msg = "Enjoy !";
    }
    if($scope.totalLength > 3)
    {
      $scope.msg = "Too much !";
    }

  // $scope.upper = function () {
  //   var upCase = $filter('uppercase');
  //   $scope.name = upCase($scope.name);
  // };
}

})();
