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

var express = require('express');
var router = express.Router();
var udp_client = require('../modules/udp_client');

var PORT = 1337;
var HOST = '127.0.0.1';

/* GET home page. */
router.get('/', function (req, res) {
    var message = new Buffer('Hello via UDP!');

    udp_client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) {
            res.send(err.stack);
            return;
        }
        res.send('UDP message sent to ' + HOST + ':' + PORT);
    });
});

module.exports = router;
