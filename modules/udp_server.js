var debug = require('debug')('Playground-Nodejs');
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    debug('--> UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    debug('--> ' + remote.address + ':' + remote.port + ' - ' + message);
});

server.on('close', function () {
    debug('--> closed');
});

server.on('error', function (err) {
    debug('--> ' + err.stack);
    server.close();
});

module.exports = server;