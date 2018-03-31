
 // http://github.com/muicss/loadjs/issues/56

 // https://jsfiddle.net/muicss/4791kt3w/

function require(bundleIds, callbackFn) {
	bundleIds.forEach(function(bundleId) {
		if (!loadjs.isDefined(bundleId)) loadjs(bundles[bundleId], bundleId)
	})
	loadjs.ready(bundleIds, callbackFn)
}

loadjs([
	'//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js',
	'//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
	'//cdn.jsdelivr.net/npm/signals@1.0.0/dist/signals.min.js'
], 'PRELoadBx123', {
	async: false //required due to loadjs bug with bundles
})
loadjs.ready('PRELoadBx123', function () {
	window['SITE'] = new signals.Signal() //site events
	console.log('site setup')
	loadjs.done('PRELoadB') // this is ready
})


// this needs a fix, like a bundleReadyIE before PRELoadB fires - this is not deterministic:
if (!window.Promise) {
	var js = document.createElement('script'); js.src='//cdn.jsdelivr.net/es6-promise-polyfill/1.2.0/promise.min.js'; document['head'].appendChild(js)
}

if (!window.fetch) {
	var js = document.createElement('script'); js.src='//cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js'; document['head'].appendChild(js)
}