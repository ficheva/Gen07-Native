var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    url: '//testtap.telerik.com/bs-api/v1/',

    apiKey: 'yO45egqOINKPi80k',
    scheme: 'https'
});

module.exports = provider;