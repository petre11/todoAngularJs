angular.module('toDoApp').component('formComponent', {
    templateUrl: 'app/components/form/form-component.html',
    controller: FormController,
    bindings: {
        buttonColor: '=',
        inputName: '@',
        selectName: '@'
    }
});

function FormController($scope) {
    var formctrl = this;
}
