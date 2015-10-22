'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Form',

    events: {
        formView1ModelSubmit: 'formView1ModelSubmit',
        formView1ModelCancel: 'formView1ModelCancel'
    },

    onformView1ModelFormSubmit: function() {
        this.notify({
            eventName: this.events.formView1ModelFormSubmit
        });
    },

    onformView1ModelFormCancel: function() {
        this.notify({
            eventName: this.events.formView1ModelFormCancel
        });
    },

    // additional properties
});

module.exports = ViewModel;