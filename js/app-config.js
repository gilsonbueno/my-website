(function () {
    'use strict';

    var app = angular.module('myWebsite', ['ngRoute']);

    app.config([
        '$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                })
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                })
                .when('/home', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                })
                .when('/personlist', {
                    templateUrl: 'views/person-list.html',
                    controller: 'PersonListController'
                })
                .when('/person', {
                    templateUrl: 'views/person.html',
                    controller: 'PersonController'
                })
                .when('/person/:id', {
                    templateUrl: 'views/person.html',
                    controller: 'PersonController'
                });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });
        }
    ]);
})();