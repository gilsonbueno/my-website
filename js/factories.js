(function () {
    'use strict';
    var app = angular.module('myWebsite');

    app.factory('dataFactory', ['$http', 'appSettings',
        function ($http, appSettings) {

            function requestConfig(url, action) {
                return {
                    method: action,
                    url: url,
                    headers: { "Content-Type": "application/json"}
                };
            }

            function requestConfigData(url, data, action) {
                return {
                    method: action,
                    url: url,
                    data: data,
                    headers: { "Content-Type": "application/json"}
                };
            }

            var dataFactory = {};

            dataFactory.GetAllPerson = function () {
                try {
                    var query = 'person/';
                    var url = appSettings.ApiUrl + query;
                    return $http(requestConfig(url, 'GET'));
                } catch (e) {
                    return null;
                }
            };

            dataFactory.PostPerson = function (request) {
                try {
                    var query = 'person/';
                    var url = appSettings.ApiUrl + query;
                    return $http(requestConfigData(url, request, 'POST'));
                } catch (e) {
                    return null;
                }
            };

            dataFactory.PutPerson = function (request, id) {
                try {
                    var query = 'person/' + id;
                    var url = appSettings.ApiUrl + query;
                    return $http(requestConfigData(url, request, 'PUT'));
                } catch (e) {
                    return null;
                }
            };

            dataFactory.DeletePerson = function (id) {
                try {
                    var query = 'person/' + id;
                    var url = appSettings.ApiUrl + query;
                    return $http(requestConfig(url, 'DELETE'));
                } catch (e) {
                    return null;
                }
            };

            dataFactory.GetPersonById = function (id) {
                try {
                    var query = 'person/' + id;
                    var url = appSettings.ApiUrl + query;
                    return $http(requestConfig(url, 'GET'));
                } catch (e) {
                    return null;
                }
            };
            return dataFactory;
        }
    ]);
})();