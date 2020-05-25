(function(){
//'use strict'
//var x = "hello";
var stringLength=0;

angular.module('myFirstApp',[])

.controller ('myFirstController',myFirstController);
//myFirstController.$inject = [$scope];
function myFirstController($scope)
{

   $scope.name = "";
   $scope.totalLength=0;
   $scope.msg = "";

   $scope.displayLength = function(){
     var totalStringLength = 1; //calculateStringLength($scope.name);
     $scope.totalLength = totalStringLength;
     if($scope.totalLength <= 3)
     {
       $scope.msg = "Enjoy !";
     }
     if($scope.totalLength > 3)
     {
       $scope.msg = "Too much !";
     }
}


 //function calculateStringLength(string){
//      var tokens = string.split(',');
  //    stringLength = tokens.length;
    //  if(stringLength == 1 && tokens[0] == "")
      //{
        //  stringLength--;
    //  }
  //  return stringLength;

  //};

})();
