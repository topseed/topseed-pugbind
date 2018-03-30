loadjs([
	'//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js',
	'//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
	'//cdn.jsdelivr.net/npm/signals@1.0.0/dist/signals.min.js'
], 'PRELoadBx123', {
	async: false //required due to loadjs bug with bundles
});
loadjs.ready('PRELoadBx123', function () {
	window['SITE'] = new signals.Signal(); //site events
	console.log('site setup');
	loadjs.done('PRELoadB');
});