(function() {

    var TaskController = function ($scope,$routeParams, tasksService) {

        var tc = $scope;
        var taksId = $routeParams.taskId;

        tc.task = tasksService.getTask(taksId);

        };

    TaskController.$inject = ['$scope','$routeParams', 'tasksService'];

    angular.module('toDoApp')
        .controller('TaskController', TaskController);

}());
