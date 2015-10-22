'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    gestures = require("ui/gestures"),

    // additional requires
    viewModel = require('./formView1-view-model');

function onformView1ModelFormSubmit() {}

function onformView1ModelFormCancel() {
    helpers.back();
}

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        viewModel.on(viewModel.events.formView1ModelSubmit, onformView1ModelFormSubmit);

        viewModel.on(viewModel.events.formView1ModelCancel, onformView1ModelFormCancel);

        // additional pageInit
    }
}

exports.pageLoaded = pageLoaded;