(function () {

    'use strict';

    angular
        .module('app')
        .controller('JobCtrl', JobCtrl);

    JobCtrl.$inject = ['ngTableParams', 'JobService'];

    /**
     * Handles the dash-board view and all interactions
     */
    function JobCtrl(ngTableParams, JobService) {
        var ctrl = this;

        /**
         * Is called when files were selected for uploading.
         * @param  {[Array]} $files [Array of files selected]
         * @return {[type]}         [description]
         */
        function onFileSelect($files) {
            ctrl.filesInUploadQueue = $files;

            // foreach file start an upload
            for(var i = 0; i < $files.length; i++) {
                var currentFile = $files[i];

                // upload the current file
                JobService.uploadFile(currentFile).then(function(success) {
                    console.log(success);
                }, function(error) {
                    console.log(error);
                }, function(update) {
                    ctrl.test = update;
                    console.log(ctrl.test);
                });
            }
        }

        //////////////////////

        angular.extend(ctrl, {
            test: 0,
            filesInUploadQueue: [],

            onFileSelect: onFileSelect
        });

    }

})();