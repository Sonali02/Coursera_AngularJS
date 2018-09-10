(function () {
'use strict';
 angular.module('myctrl',[])
 .controller('myctrl',function($scope){
  $scope.name="";
  $scope.totalValue=0;
  $scope.displayNUmeric=function(){
  var totalNameValue=calculateNumericForString($scope.name);
  $scope.totalvalue=totalNameValue;
  };
  function calculateNumericForString(string){
  var totalStringValue=0;
  for(var i=0;i<string.length;i++){
  totalStringValue+=string.charCodeAt(i);
  }
  return totalStringValue;
  });
 })();
