(function() {
    
    var TasksController = function ($scope, tasksService) {

        var tcs = $scope;

        tcs.tasks = tasksService.getTasks();
        tcs.priority = ['Low','Normal','High'];

        tcs.addTask = function (task,priority) {
            var newTask = {
                id:tcs.tasks.length,
                name:task,
                priority:priority,
                done:false
            };

            if(task !== "" && priority !== undefined) {
                tcs.tasks.push(newTask);
            }

        };

        tcs.doneTask = function (task) {
            task.done ? task.done = false : task.done = true;
        };

        tcs.removeTask = function (index) {
            tcs.tasks.splice(index, 1);
        }

      };

    TasksController.$inject = ['$scope', 'tasksService'];

    angular.module('toDoApp')
      .controller('TasksController', TasksController);
    
}());
