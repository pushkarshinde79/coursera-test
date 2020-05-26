(function () {
'use strict';

var stringLength=0;

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter) {
  $scope.name = "abc";
  $scope.totalLength=0;
  $scope.msg = "4";

  $scope.displayLength = function(){
      var string = $scope.name;
      var tokens = string.split(',');
      stringLength = tokens.length;
      if(stringLength == 1 && tokens[0] == "")
      {
          stringLength--;
      }
      $scope.totalLength = stringLength;

    if($scope.totalLength <= 3)
    {
      $scope.msg = "Enjoy !";
    }
    if($scope.totalLength > 3)
    {
      $scope.msg = "Too much !";
    }
  //  $scope.msg = "Hi";
};
  // $scope.upper = function () {
  //   var upCase = $filter('uppercase');
  //   $scope.name = upCase($scope.name);
  // };
}

})();
