//var myApp = angular.module('gotApp', ['ngRoute']);

myApp.directive('characterDetails', function(){
    return{
        restrict: 'E',
        templateUrl: 'angular/templates/characterdetails-template.html'
    };
});