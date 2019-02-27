(function () {
    'use-strict';
    angular.module('myWebsite').controller('PersonListController', ['$scope', 'dataFactory', '$location',
        function ($scope, dataFactory, $location) {
            $scope.ViewModels = {};
            $scope.ViewModels.MainMenuVisible = true;

            $scope.ViewActions = {};

            $scope.ViewActions.Create = function () {
                $location.path('/person');
            }

            $scope.ViewActions.Put = function (id) {
                $location.path('/person/' + id);
            }

            $scope.ViewActions.Delete = function (id) {
                $scope.DeleteId = id;
            }

            $scope.ViewActions.ConfirmDelete = function () {
                dataFactory.DeletePerson($scope.DeleteId)
                    .then(function () {
                        viewInit();
                    });
            }

            function viewInit() {
                dataFactory.GetAllPerson()
                    .then(function (response) {
                        $scope.ViewModels.Person = response.data;
                    }, function () {
                        $scope.ViewModels.Person = null;
                    });
            }

            viewInit();
        }
    ])
})();