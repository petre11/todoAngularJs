angular.module('toDoApp').component('formComponent', {
    templateUrl: 'app/components/form/form-component.html',
    controller: FormController,
    bindings: {
        buttonColor: '=',
        inputName: '@',
        selectName: '@'
    }
});

function FormController($scope,tasksService) {
    var formctrl = this;
    var tasks = tasksService.getTasks();

    formctrl.priority = tasksService.getPrioryty();

  formctrl.addTask = function (task,priority) {
    var newTask = {
      id:tasks.length,
      name:task,
      priority:priority,
      done:false
    };

    if(task !== "" && priority !== undefined) tasks.push(newTask);

  };

}
