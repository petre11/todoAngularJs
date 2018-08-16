(function() {

    var TasksController = function ($scope, tasksService) {

        var tcs = $scope;


      };

    TasksController.$inject = ['$scope', 'tasksService'];

    angular.module('toDoApp')
      .controller('TasksController', TasksController);

}());
