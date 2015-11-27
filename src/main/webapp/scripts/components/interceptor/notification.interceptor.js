 'use strict';

angular.module('sgmembersApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sgmembersApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sgmembersApp-params')});
                }
                return response;
            }
        };
    });
