angular
  .module('app')
  .component('pageComponent', {
    templateUrl: 'app/components/PageHeader.html',
    controller: Header,
    bindings: {
      todos: '='
    }
  });

/** @ngInject */
function Header(todoService) {
  this.todoService = todoService;
}

Header.prototype = {
  handleSave: function (text) {
    if (text.length !== 0) {
      this.todos = this.todoService.addTodo(text, this.todos);
    }
  }
};
