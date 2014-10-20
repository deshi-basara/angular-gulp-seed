(function() {
    'use strict';

    angular
        .module('app')
        .directive('agsProgress', agsProgress);

    function agsProgress() {
        var directive = {
            restrict: 'E',
            templateUrl: 'scripts/directives/progress/progress.ags.tpl.html',
            scope: {
                test: '='
            },
            link: link,
            controller: 'JobCtrl',
            controllerAs: 'ctrl'
        };
        return directive;

        /////////////////

        function link(scope, element, attrs) {
            // get the progress bar element
            var progressBar = element.children().children();

            // listen for progress changes
            scope.$watch('test', function(val) {

                // animate the width
                progressBar.css({
                    width: val + '%'
                });

                // change the percentage
                scope.progress = val;

            });
        }

    };
})();