/*
 * <!--  Copyright (C) 2014 Alexander "Evisceration" Martinz
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * -->
 */

// http://nodejs.org/api/dgram.html

var debug = require('debug')('Playground-Nodejs');
var dgram = require('dgram');
var client = require('./udp_client');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    debug('--> UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    debug('--> ' + remote.address + ':' + remote.port + ' - ' + message);

    if (message == 'Heyho') {
        var notifier = require('node-notifier');
        notifier.notify({
            'title': 'Device connected!',
            'message': 'Connection received from ' + remote.address + ':' + remote.port
        });
    }

    var reply = new Buffer('Reply via UDP!');
    client.send(reply, 0, reply.length, remote.port, remote.address, function (err, bytes) {
        if (err) {
            debug(err.stack);
            return;
        }
        debug('--> UDP message sent to ' + remote.address + ':' + remote.port);
    });
});

server.on('close', function () {
    debug('--> closed');
});

server.on('error', function (err) {
    debug('--> ' + err.stack);
    server.close();
});

module.exports = server;
