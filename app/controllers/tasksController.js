

(function() {
    
    var TasksController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.tasks = [
            {name:'Learn Angular js', priority:'High',done:false},
            {name:'Visit Mumbai', priority:'Low',done:false},
            ];

        $scope.priority = ['Low','Normal','High'];

        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
            console.log($scope);
        };
        
        $scope.addTask = function (task,priority) {
            var newTask = {
                name:task,
                priority:priority,
                done:false
            };

            if(task !== "" && priority !== undefined) {
                $scope.tasks.push(newTask);
                console.log($scope.tasks)
            }

        };

        $scope.doneTask = function (task) {
            task.done ? task.done = false : task.done = true;
        };

        $scope.removeTask = function (index) {
            $scope.tasks.splice(index, 1);
        }

      };

    TasksController.$inject = ['$scope'];

    angular.module('customersApp')
      .controller('TasksController', TasksController);
    
}());