'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    backButtonHidden: true,

    pageTitle: 'Home',
    // additional properties
});

module.exports = ViewModel;