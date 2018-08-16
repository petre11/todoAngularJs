(function () {
   var tasksService = function () {
       var tasks = [
           {
               id:0,
               name:'Learn Angular js',
               priority:'High',done:false,
           },
           {
               id:1,
               name:'Visit Mumbai',
               priority:'Low',
               done:false,
           }
       ],
         priority = ['Low','Normal','High'];

       this.getTasks = function () {
           return tasks;
       };

       this.getTask = function (taskId) {

           return tasks[taskId]
       };

     this.getPrioryty = function (taskId) {

       return priority
     };

   };

    angular.module('toDoApp').service('tasksService', tasksService);
}());
