'use strict';

const Homey = require('homey');
const util = require('homey-rfdriver').util;
const DoorbellDevice = require('../../lib/devices/kaku/doorbell.js')

// To extend from another class change the line below to
// module.exports = RFDevice => class ACDB7000CDevice extends MyGenericDevice(RFDevice) {
// and define MyGenericDevice like so
// module.exports = RFDevice => class MyGenericDevice extends RFDevice {
module.exports = RFDevice => class ACDB7000CDevice extends DoorbellDevice(RFDriver) {

    onRFInit() {
        super.onRFInit();

        // Init your device here
    }

};
