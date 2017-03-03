//var myApp = angular.module('gotApp', ['ngRoute']);

myApp.controller('bhcDetailsController',['$http', '$routeParams', '$scope', function($http, $routeParams, $scope){

    var baseUrl = 'http://anapioficeandfire.com/api/';

    $scope.urlobj = JSON.parse($routeParams.idtype);

    $scope.povCharacters = [];//array for fetching povcharacters of a particular book
    $scope.cadetBranches =[];//array for fetching cadetbranches of a patricular house
    $scope.allegiances = [];//array for fetching allegiances of a patricular character
    $scope.books = [];//array for fetching books of a patricular character
    $scope.povBooks = [];//array for fetching povbooks of a patricular character

    $scope.getBhcDetails = function (){

    var id = $scope.urlobj.id;
    var type = $scope.urlobj.type;
    $http({
        method : 'GET',
        url    : baseUrl +type + '/' + id
    }).then(function successCallback(response){
        $scope.bhc = response.data;
        //console.log($scope.bhc);

        if(type == 'books'){

            $scope.showBook = true;

            for(var i=0; i<$scope.bhc.povCharacters.length; i++){
              $http({
              method : 'GET',
              url    : $scope.bhc.povCharacters[i]
              }).then(function successCallback(response){
              $scope.povCharacters.push(response.data.name);
              //console.log($scope.povCharacters);
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then
            }//end for
        }// end if

        else if(type == 'houses'){

            $scope.showHouse = true;

            $http({
              method : 'GET',
              url    : $scope.bhc.currentLord
              }).then(function successCallback(response){
              $scope.currentLord = response.data.name;
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then

            $http({
              method : 'GET',
              url    : $scope.bhc.heir
              }).then(function successCallback(response){
              $scope.heir = response.data.name;
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then

            $http({
              method : 'GET',
              url    : $scope.bhc.overlord
              }).then(function successCallback(response){
              $scope.overlord = response.data.name;
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then

            $http({
              method : 'GET',
              url    : $scope.bhc.founder
              }).then(function successCallback(response){
              $scope.founder = response.data.name;
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then

            for(var i=0; i<$scope.bhc.cadetBranches.length; i++){
              $http({
              method : 'GET',
              url    : $scope.bhc.cadetBranches[i]
              }).then(function successCallback(response){
              $scope.cadetBranches.push(response.data.name);
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then
            }//end for

        }//end else if

        else{

            $scope.showCharacter = true;

            $http({
              method : 'GET',
              url    : $scope.bhc.father
              }).then(function successCallback(response){
              $scope.father = response.data.name;
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then

            $http({
              method : 'GET',
              url    : $scope.bhc.mother
              }).then(function successCallback(response){
              $scope.mother = response.data.name;
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then

            $http({
              method : 'GET',
              url    : $scope.bhc.spouse
              }).then(function successCallback(response){
              $scope.spouse = response.data.name;
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then

            for(var i=0; i<$scope.bhc.allegiances.length; i++){
              $http({
              method : 'GET',
              url    : $scope.bhc.allegiances[i]
              }).then(function successCallback(response){
              $scope.allegiances.push(response.data.name);
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then
            }//end for

            for(var j=0; j<$scope.bhc.books.length; j++){
              $http({
              method : 'GET',
              url    : $scope.bhc.books[j]
              }).then(function successCallback(response){
              $scope.books.push(response.data.name);
              //console.log($scope.books);
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then
            }//end for

            for(var k=0; k<$scope.bhc.povBooks.length; k++){
              $http({
              method : 'GET',
              url    : $scope.bhc.povBooks[k]
              }).then(function successCallback(response){
              $scope.povBooks.push(response.data.name);
              //console.log($scope.povBooks);
              }, function errorCallback(response){
              alert("Some error occurred. Check the console.");
              console.log(response);
              });//end then
            }//end for

        }//end else if


        }, function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        });

   }// end getBhcDetails

    }]);// end of bhcDetailsController