angular.module("toDoListApp", [])
.controller("mainCtrl", function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;
  $scope.learningNgChange = function() {
    console.log("An input has changed")
  };
})
.service("dataService", function($http){
  this.getTodos = $http.get('mock/todos.json')
  this.helloConsole = function(){
    console.log("you got served")
  }

})
