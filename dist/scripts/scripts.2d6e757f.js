"use strict";angular.module("mytodoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("mytodoApp").controller("MainCtrl",["$scope",function(a){function b(b){for(var c=0;c<a.todos.length;c++)if(a.todos[c]===b)return!1;return!0}a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.todos=["Item 1","Item 2","Item 3"],a.addTodo=function(){b(a.todo)&&a.todos.push(a.todo),a.todo=""},a.removeTodo=function(b){a.todos.splice(b,1)}}]),angular.module("mytodoApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);