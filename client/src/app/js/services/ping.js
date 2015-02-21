angular.module('testApp')
    .factory('PingService', ['UtilService', '$http', function (util, $http) {
    // Store the service instance reference in 'self'.
    // Keep track of the controller instance for nested functions.
    var self = this;
    var serverCtx = util.getContext();

    // This function sends a request to the REST server.
    self.ping = function (param) {
        // Return the promise.
        return $http.get(serverCtx + '/rest/hello', {params: {name: param}});
    };

    return {
        ping : self.ping
    }
}]);
