angular.module('toDoApp').component('tableComponent', {
    templateUrl: 'app/components/table/table-component.html',
    controller: TableController,
    bindings: {
        buttonColor: '=',
        inputName: '@',
        selectName: '@'
    }
});

function TableController($scope) {
    var tablctrl = this;

}
