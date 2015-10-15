var WebSocketServer = require("ws").Server;
var http = require("http");
var express = require("express");
var polyServe = require("polyserve");
var app = express();
var port = process.env.PORT || 8080;
var verbose = process.env.PORT || false;


/*
 * Modifies polyserves startServer function, 
 * adding a callback, with the server and express app
 */
function startServer(port, callback) {
    port = port || 8080;
    console.log('Starting Modified Polyserve on port ' + port);

    var app = express();
    var polyserve = polyServe.makeApp();

    app.use('/components/', polyserve);

    console.log('Files in this directory are available at localhost:' +
        port + '/components/' + polyserve.packageName + '/...');

    return callback(app, app.listen(port));
}

//If polyserve returned its server, it would be polyServe.startServer
var server = startServer(port, function (app, server) {
    //Create a new WebSocket server, attaching it to PolyServe
    var wss = new WebSocketServer({
        server: server
    });

    console.log("WebSocket server created");

    //Web a client connects
    wss.on("connection", function (ws) {
        //Generate a timestamp every second, and send it to the client
        var id = setInterval(function () {
            if (verbose) console.log("sending test response...");
            ws.send(JSON.stringify(new Date()), function () {})
        }, 1000);

        if (verbose) console.log("websocket connection open");

        ws.on("close", function () {
            if (verbose) console.log("websocket connection close");
            clearInterval(id);
        });
    });
});