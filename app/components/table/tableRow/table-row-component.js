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
    console.log(tablRowctrl.tasks)
    console.log(tasksService)
}
