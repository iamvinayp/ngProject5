//var myApp = angular.module('gotApp', ['ngRoute']);

myApp.directive('houseDetails', function(){
    return{
        restrict: 'E',
        templateUrl: 'angular/templates/housedetails-template.html'
    };
});