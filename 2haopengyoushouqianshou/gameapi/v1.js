<%if request.querystring="e=http%3A%2F%2Fyx8.com%2Fgame%2Fhaopengyoushouqianshou%2F" then    server.transfer("v1.js_e=http%3A%2F%2Fyx8.com%2Fgame%2Fhaopengyoushouqianshou%2F") %>(function(d, params, env, apiHost, hosts) {
    // set params
    (function(regex, qs, tokens) {
        regex = /[?&]?([^=]+)=([^&]*)/g;
        qs = d.location && d.location.search ? d.location.search.split('+').join(' ') : '';

        while ((tokens = regex.exec(qs))) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
    })();

    // Google Tag Manager
    /*
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            './gameapi/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'famobi_dataLayer', 'GTM-PBT7JT');
		*/

    env = params.fg_env || 'prod';
    apiHost = hosts[env];
    // load script
    (function(d, url, fgJS, firstJS) {
        fgJS = d.createElement('script');
        firstJS = d.getElementsByTagName('script')[0];
        fgJS.src = url + "?_location=" + encodeURIComponent(d.location);
        firstJS.parentNode.insertBefore(fgJS, firstJS);
    })(d, './gameapi/script/4638e320-4444-4514-81c4-d80a8c662371.js');

})(document, {}, '', '', {
    'dev': 'api.dev',
    'staging': 'api.staging.gc',
    'staging.aws': 'api.staging.aws',
    'staging.gc': 'api.staging.gc',
    'prod': 'api'
});