// // Non-Minified Version:
// (function () {
// 'use strtict';
//
// angular.module('LunchCheck', [])
// .controller('LunchCheckController', LunchCheckController);
//
// LunchCheckController.$inject = ['$scope'];
// function LunchCheckController($scope){
//   $scope.CheckIt = function(){
//     if(!$scope.lunchText){
//       $scope.lunchMessage = 'red';
//       $scope.lMessage = "Please enter data first";
//     }
//     else{
//      $scope.lunchMessage = "green";
//      $scope.lMessage = "Enjoy!";
//       var str = $scope.lunchText;
//       var arr = new Array();
//
//       arr = str.split(",");
//       arr = arr.filter(function(e){return /\S/.test(e)});  //Empty items ('' or ' ') will not be included in total count
//
//       if(arr.length > 3){
//         $scope.lMessage = "Too Much!";
//       }
//     }
//
//   }
// }
// })();

//  Minified Version:
!function(){"use strtict";function e(e){e.CheckIt=function(){if(e.lunchText){e.lunchMessage="green",e.lMessage="Enjoy!";var n=e.lunchText;new Array;n.split(",").filter(function(e){return/\S/.test(e)}).length>3&&(e.lMessage="Too Much!")}else e.lunchMessage="red",e.lMessage="Please enter data first"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
