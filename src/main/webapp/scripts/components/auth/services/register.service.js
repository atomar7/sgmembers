'use strict';

angular.module('sgmembersApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


