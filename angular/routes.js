//var myApp = angular.module('gotApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            // location of the template
        	templateUrl		: 'views/home-view.html',
        	// Which controller it should use
        })
        .when('/bhc',{
            templateUrl     : 'views/allbhc-view.html',
            controller      : 'mainController'
        })
        .when('/bhcdetails/:idtype',{
            templateUrl     : 'views/bhcdetails-view.html',
            controller      : 'bhcDetailsController'
        })
        .otherwise(
            {
                redirectTo:'/home'
                //template   : '<h1>404 page not found</h1>'
            });
}]);