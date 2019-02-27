(function () {
    'use strict';
    var app = angular.module('myWebsite');

    app.directive('appMainMenu', function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'views/partials/directives/app-menu.html'
        };
    });

    app.directive('appSetVisibility', [
        '$rootScope', function($rootScope) {
            return {
                restrict: 'A',
                transclude: false,
                link: function(scope, element) {
                    $rootScope.$watch('IsAuthenticated', function() {
                        if ($rootScope.IsAuthenticated) {
                            if (element.hasClass('d-none'))
                                element.removeClass('d-none');
                        } else {
                            element.addClass('d-none');
                        }
                    }, true);
                }
            };
        }
    ]);

})();