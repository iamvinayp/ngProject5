//var myApp = angular.module('gotApp', ['ngRoute']);
// custom filter for pushing objects with blank 'name' field to end
// of the sorted array of objects
myApp.filter('pushToEnd', function(){
    var results = [];
    return function(dataArray, sortProp){
            var orderedArray = dataArray.filter(function(value){
                return value[sortProp];
            });
            var pushedArray = dataArray.filter(function(value){
                return (value[sortProp] == "");
            });
           results = orderedArray.concat(pushedArray);
           return results;
           }
});