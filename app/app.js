
(function() {

    var app = angular.module('toDoApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'TasksController',
                templateUrl: 'app/templates/tasks.html'
            })
            .when('/tasks/:taskId', {
                controller: 'TaskController',
                templateUrl: 'app/templates/task.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

}());
