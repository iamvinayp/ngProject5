//var myApp = angular.module('gotApp', ['ngRoute']);
// custom filter for displaying specific category content
myApp.filter('category', function(){
    var bool;
    var results = [];
    return function(dataArray, categoryType){
            if(!categoryType){
              return dataArray;
            } // end if
            else{
              results = dataArray.filter(function(value, index, array){
                  for(var key in value){
                    if(key == "url"){
                      bool = ( value[key].indexOf(categoryType) > 0 );
                    }
                  }
                    return bool;
              });
              return results;
            } // end else
           } // end function(dataArray, categoryType, url)
}); // end filter