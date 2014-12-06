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