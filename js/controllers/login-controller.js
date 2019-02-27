(function() {
    'use strict';
    angular.module('myWebsite').controller('LoginController', [ '$scope', '$location', '$rootScope',
        function($scope, $location, $rootScope) {
            $rootScope.IsAuthenticated = false;
            $scope.ViewActions = {};
            $scope.ViewModels = {};
            $scope.ViewModels.MainMenuVisible = false;
            $scope.ViewModels.Login = {
                Password: "",
                UserName: "",
                UserNameInvalid: false,
                PasswordInvalid: false
            }

            $scope.ViewActions.Login = function(){
                $scope.ViewModels.Login.UserNameInvalid = false;
                $scope.ViewModels.Login.PasswordInvalid = false;
                if ($scope.ViewModels.Login.UserName !== "" && $scope.ViewModels.Login.Password !== "") {
                    $rootScope.IsAuthenticated = true;
                    $location.path('/home');
                } else {
                    $scope.ViewModels.Login.UserNameInvalid = true;
                    $scope.ViewModels.Login.PasswordInvalid = true;
                }
            }
        }
    ]);
})();