# AngularJS Webapp
## 1. Intro
A template application where the client is implemented using AngularJS and the server
is a REST service using Apache CXF.

## 2. Project Structure
* The client is pure JavaScript, based on AngularJS.
* The server is an Apache CXF REST server.
* The client is embedded in the server using overlays.

## 3. Developer Tools
### 3.1. Git

Git needs to be installed (for the npm and bower packages which are downloaded from github).

### 3.2. Bower Problems

If you experience problems that bower fails to download packages from git:// you should configure git to use https:// protocol.
This is the case if the Maven build does not create a app/bower_components directory containing the bower dependencies.

    git config --global url."https://".insteadOf git://

### 3.3. IntelliJ Support
#### 3.3.1. Required Plugins

These plugins have to be installed separately from the IntelliJ repository.

* Node plugin
* Karma plugin
* Angular plugin
* LiveEdit plugin

#### 3.3.2. CORS access REST from IntelliJ built-in Server

Trick to start the app without deploying to the server or without rebuilding the server.
Simply run/debug the HTML page from within IntelliJ.

* Start the REST server, we will not use the app installed in the server.
* Run/Debug the HTML for the app from within IntelliJ. The $http requests must go to the REST server address. Some adjustments might have to be made so that the host/port can be adjusted.
* You have to modify the JetBrains Browser Plugin (options). Add the pattern 'http://localhost:8080/*' to the force CORS box.
The artifact names of the top-level project and the 'fileName' of the web server should be the same in order for this trick to work out of the box. This is because IntelliJ built-in server assumes that the top-level name is the application context name.
* A restart of the browser might be necessary after changing the options.

If you forget the last step, you will get "Access-Control-Allow-Origin") errors in the browser.
This is an indication that the CORS settings are not configured correctly or the configuration is not yet active.


### 3.4. Other

* PostMan Chrome plugin is a good REST client.
* ng-inspector Chrome plugin.
* (AngularJS Batarang Chrome plugin.)

## 4. Notes
* The application context is automatically derived from the index.html URL. The application should automatically work independent of the application context name.
