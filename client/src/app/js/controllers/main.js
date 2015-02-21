angular.module('testApp')
    .controller('MainController', ['PingService', function (pingService) {
    // Store the controller instance reference in 'self'.
    // Keep track of the controller instance for nested functions.
    var self = this;

    self.messages = [];

    // This function sends a request to the REST server.
    self.ping = function (param) {
        pingService.ping(param)
        .then(function(response){
            self.messages.push(response.data.contents)
        }, function() {
            console.error('Error while accessing REST backend. Check server context name. Verify the client uses the correct hostname.');
        });
    };

    self.clear = function () {
        self.messages = [];
    };

    // Initialize the context message by calling the server
    // on application startup.
    self.ping("Safety First!");
}]);
