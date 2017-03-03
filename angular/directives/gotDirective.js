//var myApp = angular.module('gotApp', ['ngRoute']);

myApp.directive('ngBhc', function(){
    return{
        templateUrl: 'angular/templates/bhc-template.html',
        link: function(scope, element, attrs){
            scope.getType = function(url){
                if(url.indexOf('houses') == -1 && url.indexOf('characters') == -1 && url.indexOf('books') != -1){
                return 'panel-heading panel-books';
                }
                else if(url.indexOf('books') == -1 && url.indexOf('characters') == -1 && url.indexOf('houses') != -1){
                return 'panel-heading panel-houses';
                }
                else{
                return 'panel-heading panel-characters';
                }
            }
            }
    };
});