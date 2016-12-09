var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/dashboard.html',
        controller: 'FoodController'
    })
    .when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'NewFoodController'
    })
    .otherwise({
        redirectTo: '/'
    })
})