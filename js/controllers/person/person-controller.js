(function () {
    'use-strict';
    angular.module('myWebsite').controller('PersonController', ['$scope', 'dataFactory', '$location', '$routeParams',
        function ($scope, dataFactory, $location, $routeParams) {
            $scope.PersonId = $routeParams.id;
            $scope.ViewModels = {};
            $scope.ViewModels.MainMenuVisible = true;
            $scope.ViewModels.Person = {
                name: '',
                age: ''
            }

            $scope.ViewActions = {};

            $scope.ViewActions.Cancel = function () {
                $location.path('/personlist');
            }

            $scope.ViewActions.Submit = function () {
                if ($scope.PersonId != undefined) {
                    Put();
                } else {
                    Post();
                }
            }

            function Post() {
                var request = {
                    name: $scope.ViewModels.Person.name,
                    age: $scope.ViewModels.Person.age
                };
                dataFactory.PostPerson(request)
                    .then(function () {
                        $location.path('/personlist');
                    });
            }

            function Put() {
                var request = {
                    name: $scope.ViewModels.Person.name,
                    age: $scope.ViewModels.Person.age
                };
                dataFactory.PutPerson(request, $scope.PersonId)
                    .then(function () {
                        $location.path('/personlist');
                    });
            }

            function viewInit() {
                if ($scope.PersonId != undefined) {
                    dataFactory.GetPersonById($scope.PersonId)
                        .then(function (response) {
                            $scope.ViewModels.Person = response.data;
                        }, function () {
                            $scope.ViewModels.Person = null;
                        });
                }
            }

            viewInit();
        }
    ])
})();