(function () {
    'use strict';
    angular.module('myWebsite').controller('HomeController', ['$scope',
        function ($scope) {
            $scope.ViewModels = {};
            $scope.ViewModels.MainMenuVisible = true;

            $scope.ViewModels.Content = [];

            function ViewInit() {
                $scope.ViewModels.Content.push({
                    icon: 'fa-instagram ',
                    title: "Instagram",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus enim"
                });
                $scope.ViewModels.Content.push({
                    icon: 'fa-twitter ',
                    title: "Twitter",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus enim"
                });
                $scope.ViewModels.Content.push({
                    icon: 'fa-facebook ',
                    title: "Facebook",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus enim"
                });
                $scope.ViewModels.Content.push({
                    icon: 'fa-pinterest-p ',
                    title: "Pinterest",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus enim"
                });
                $scope.ViewModels.Content.push({
                    icon: 'fa-google-plus ',
                    title: "Google Plus",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus enim"
                });
                $scope.ViewModels.Content.push({
                    icon: 'fa-github ',
                    title: "GitHub",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus enim"
                });
            }

            ViewInit();
        }
    ]);
})();