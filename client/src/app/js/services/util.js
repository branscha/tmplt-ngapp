angular.module('testApp').factory('UtilService', [function () {
  // Function to find the web application context name
  // dynamically. JBoss uses the war name by default, Tomcat does not
  // use an application context name by default.
  var getContextImpl = function () {
     // Take the base meta tag in account if there was one specified.
     var base = document.getElementsByTagName('base')[0];
     if (base && base.href && (base.href.length > 0)) {
        base = base.href;
     } else {
        // Use the unmodified document location as a starting point.
        base = document.URL;
     }
     // Now cut out the second part from the base URL
     // http://server:port/WE-WANT-THIS-PIECE/...
     var candidate = base.substr(0, base.indexOf("/", base.indexOf("/", base.indexOf("//") + 2) + 1));

     // Development Environment trick.
     // Replace IntelliJ test server address by our REST address.
     // You must configure the JetBrains IDE plugin to accept other URL's than the source URL!
     candidate = candidate.replace('63342', '8080');

     // Finally
     return candidate;
  };

  return {
     getContext: getContextImpl
  }
}]);
