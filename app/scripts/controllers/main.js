'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    function checkDux(item)
    {
        for (var i = 0; i< $scope.todos.length; i++)
        { if($scope.todos[i] == item)
            return false; 
        }
        return true;
    }
    $scope.todos=['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function(){
        if(checkDux($scope.todo))
            $scope.todos.push($scope.todo);
        $scope.todo = '';
    };

    $scope.removeTodo = function(index){
        $scope.todos.splice(index,1);
    }
  });
