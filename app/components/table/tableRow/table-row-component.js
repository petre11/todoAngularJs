angular.module('toDoApp').component('tableRowComponent', {
    templateUrl: 'app/components/table/tableRow/table-row-component.html',
    controller: TableRowController,
    bindings: {
        buttonColor: '=',
        inputName: '@',
        selectName: '@'
    }
});

function TableRowController($scope,tasksService) {
    var tablRowctrl = this;
    tablRowctrl.tasks = tasksService.getTasks()

  tablRowctrl.doneTask = function (task) {
    task.done ? task.done = false : task.done = true;
  };

  tablRowctrl.removeTask = function (index) {
    tablRowctrl.tasks.splice(index, 1);
  }
}
