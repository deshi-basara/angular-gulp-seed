(function() {

    'use strict';

    angular
        .module('app')
        .factory('JobService', JobService);

    JobService.$inject = ['$upload', 'config', '$q'];

    /**
     * Service for uploading jobs
     */
    function JobService($upload, config, $q) {

        var service = {
            uploadUrl: '/api/job/upload',

            uploadFile: uploadFile
        };

        return service;

        ///////////////


        /**
         * Upload the handed file to the rest api.
         * @param  {File Object}  loginObj [File data from angular-file-upload]
         * @return {Promise}               [Resolve: true | Reject: false]
         */
        function uploadFile(fileObj) {
            var q = $q.defer();

            console.log(fileObj);

            // make the request
            $upload.upload({
                method: 'POST',
                url: config.apiUrl + service.uploadUrl,
                file: fileObj
            }).progress(function(evt) {
                // calculate the progress in percentage and notify
                q.notify(parseInt(100.00 * evt.loaded / evt.total));
            }).success(function(data, status, header, config, responseText) {
                q.resolve(true);
            }).error(function(data, status, header, config, responseText) {
                q.notify(23);
                q.reject(false);
            });

            return q.promise;

        }
    }


})()