
 // http://github.com/muicss/loadjs/issues/56

 // https://jsfiddle.net/muicss/4791kt3w
function require(bundleIds, callbackFn) {
	bundleIds.forEach(function(bundleId) {
		if (!loadjs.isDefined(bundleId)) loadjs(bundles[bundleId], bundleId)
	})
	loadjs.ready(bundleIds, callbackFn)
}


// polyfills
if (!window.Promise) {
	/* load bundle 'promise' */
	loadjs(['//cdn.jsdelivr.net/es6-promise-polyfill/1.2.0/promise.min.js'], 'promise')
}
else loadjs.done('promise') /* we already have it */

if (!window.fetch) {
	loadjs(['//cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js'], 'fetch')
}
else loadjs.done('fetch')

/* load bundle 'core' */
loadjs([
	'//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js',
	'//cdn.jsdelivr.net/npm/signals@1.0.0/dist/signals.min.js'
], 'core' /* bundle ID */, {
	async: false //required due to loadjs bug with bundles
})

// ready = "when done with bundle(s)"
loadjs.ready(['core','promise','fetch'], function () {
	window['SITE'] = new signals.Signal() //site events
	console.log('site done')
	loadjs.done('site') // "done with bundle 'site'", need this because we're not loading js here
})

loadjs.ready('site', function() {
	loadjs([ '//cdn.jsdelivr.net/npm/semantic-ui@2.3.0/dist/semantic.css',
	'//cdn.jsdelivr.net/npm/semantic-ui@2.3.0/dist/semantic.js',
	'//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
	], 'style')
})


console.log('setup v1.04.01')