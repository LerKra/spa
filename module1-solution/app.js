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
//       $scope.lunchMessage = "Please enter data first";
//     }
//     else{
//      $scope.lunchMessage = "Enjoy!";
//       var str = $scope.lunchText;
//       var ary = new Array();
//
//       ary = str.split(",");
//       if(ary.length > 3){
//         $scope.lunchMessage = "Too Much!";
//       }
//     }
//
//   }
// }
// })();

// //  Minified Version:
!function(){"use strtict";function e(e){e.CheckIt=function(){if(e.lunchText){e.lunchMessage="Enjoy!";var n=e.lunchText,c=new Array;c=n.split(","),c.length>3&&(e.lunchMessage="Too Much!")}else e.lunchMessage="Please enter data first"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
