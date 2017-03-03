//var myApp = angular.module('gotApp', ['ngRoute']);

myApp.controller('mainController',['$http','$location', '$anchorScroll', '$scope', function($http, $location, $anchorScroll, $scope){

    var baseUrl = 'http://anapioficeandfire.com/api/';
    $scope.gotData = [];
    $scope.gotBooksData = [];
    $scope.gotHousesData = [];
    $scope.gotCharactersData = [];

    // setting initial sorting as ascending
    $scope.sortProp = "+name";

    // get all the GoT books data
    $scope.getBooks = function (){

    $http({
        method : 'GET',
        url    : baseUrl + 'books?page=1&pageSize=50'
    }).then(function successCallback(response){
        $scope.gotBooksData = response.data;
        for(var i=0;i<$scope.gotBooksData.length;i++){
            $scope.gotData.push($scope.gotBooksData[i]);
        }
        //console.log($scope.gotData);
        }, function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        });
    }// end getBooks()

// get all the GoT houses data
    $scope.getHouses = function (pageNumber){

    $http({
        method : 'GET',
        url    : baseUrl + 'houses?page=' +pageNumber +'&pageSize=50'
    }).then(function successCallback(response){
        $scope.gotHousesData = response.data;
        for(var i=0;i<$scope.gotHousesData.length;i++){
            $scope.gotData.push($scope.gotHousesData[i]);
        }
        if (response && response.data.length > 0){
            $scope.getHouses(pageNumber+1);
        }
        else{
        //console.log($scope.gotData)
        }
        }, function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        });
    }// end getHouses()

    // get all the GoT characters data
    $scope.getCharacters = function (pageNumber){

    $http({
        method : 'GET',
        url    : baseUrl + 'characters?page=' +pageNumber +'&pageSize=50'
    }).then(function successCallback(response){
        $scope.gotCharactersData = response.data;
        for(var i=0;i<$scope.gotCharactersData.length;i++){
            $scope.gotData.push($scope.gotCharactersData[i]);
        }
        if (response && response.data.length > 0){
            $scope.getCharacters(pageNumber+1);
        }
        else{
        //console.log($scope.gotData);
        }
        }, function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        });
    }// end getHouses()

    $scope.getHeading = function(url){
        if(url.indexOf('houses') == -1 && url.indexOf('characters') == -1 && url.indexOf('books') != -1){
        $scope.heading = "BOOK";
        return $scope.heading;
        }
        else if(url.indexOf('books') == -1 && url.indexOf('characters') == -1 && url.indexOf('houses') != -1){
        $scope.heading = "HOUSE";
        return $scope.heading;
        }
        else{
        $scope.heading = "CHARACTER";
        return $scope.heading;
        }
    }

    $scope.getIcon = function(url){
        if(url.indexOf('houses') == -1 && url.indexOf('characters') == -1 && url.indexOf('books') != -1){
        return 'fa fa-book';
        }
        else if(url.indexOf('books') == -1 && url.indexOf('characters') == -1 && url.indexOf('houses') != -1){
        return 'fa fa-shield';
        }
        else{
        return 'fa fa-user';
        }
    }

    $scope.getUrlPrameters = function (url){

    $scope.urlobj = {};
    var initialUrl = url.split("//");
    var finalUrl = initialUrl[1].split("/");
    $scope.urlobj.id = finalUrl[finalUrl.length-1];
    $scope.urlobj.type = finalUrl[finalUrl.length-2];

    return $scope.urlobj;

    }// end getUrlPrameters()

    $scope.scrollTo = function(scrollArea) {
        $location.hash(scrollArea);
        //$anchorScroll.yOffset = 70;
        $anchorScroll();
    }

    }]);// end of 'mainController'