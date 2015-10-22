'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    service = require('./dataListView-service'),

    // additional requires
    viewModel = require('./dataListView-view-model');

function onListViewItemTap(args) {
    var itemData = viewModel.get("listItems")[args.index];

    helpers.navigate({
        moduleName: "components/dataListView/itemDetails/itemDetails",
        context: itemData.details
    });
}
exports.onListViewItemTap = onListViewItemTap;

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    service.getAllRecords()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {
                itemsList.push({

                    header: item.Text,

                    details: {

                        image: item.Picture,

                        header: item.Text,

                    }

                });
            });

            viewModel.set('listItems', itemsList);
        });

    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

exports.pageLoaded = pageLoaded;