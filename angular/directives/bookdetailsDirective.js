//var myApp = angular.module('gotApp', ['ngRoute']);

myApp.directive('bookDetails', function(){
    return{
        restrict: 'E',
        templateUrl: 'angular/templates/bookdetails-template.html'
    };
});