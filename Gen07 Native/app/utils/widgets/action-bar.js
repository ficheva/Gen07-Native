'use strict';
var frame = require('ui/frame');

function backTap() {
    frame.topmost().goBack();
}

function onIndex() {
    frame.topmost().navigate('components/navigation/navigation');
}

exports.backTap = backTap;
exports.onIndex = onIndex;
