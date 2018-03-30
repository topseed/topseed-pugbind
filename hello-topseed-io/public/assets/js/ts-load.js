if (!window.Promise) {
	var js = document.createElement('script'); js.src='//cdn.jsdelivr.net/es6-promise-polyfill/1.2.0/promise.min.js'; document['head'].appendChild(js)
}

if (!window.fetch) {
	var js = document.createElement('script'); js.src='//cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js'; document['head'].appendChild(js)
}

//polyfill for _load endsWith
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(searchString, position) {
		var subjectString = this.toString()
		if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
			position = subjectString.length
		}
		position -= searchString.length
		var lastIndex = subjectString.lastIndexOf(searchString, position)
		return lastIndex !== -1 && lastIndex === position
	}
}

var TS = { //class:

	_load: function(url, resolve, reject){
		var isCss = url.toLowerCase().endsWith('.css')
		var isHtml = url.toLowerCase().endsWith('.html')
		var el = document.createElement(isCss||isHtml?'link':'script')
		el.onload = function(){ //IE9 min
			resolve(url)
		}
		el.onerror = function(){ 
			reject(url)
		}
		if (isCss||isHtml) {
			el.href = url
			el.rel = isCss?'stylesheet':'import'
			if (isCss) el.type = 'text/css'
		} else {
			console.log('_load:'+url)
			el.src = url
			el.async = true
		}
		document['head'].appendChild(el)
	}

	, load: function(url){
		return new Promise(function (resolve, reject) {
			TS._load(url, resolve, reject)
		})
	}

	, appReady: false

	, signalAppReady: function() {
		TS.appReady = true
	}

	, onAppReady: function(pinit) {
		if (TS.appReady  && 'undefined' != typeof jQuery) { // wait for libs loaded.
			console.log('app-ready!')
			pinit()
		} else {
			setTimeout(function() {//wait X milliseconds then loop and recheck if ready
				console.log(',') // likely TS.signalAppReady() was not called
				TS.onAppReady(pinit)//loop
			} ,60)
		}//else
	}//()

	, loadOnAppReady: function(lib, pinit){
		if(TS.appReady) {
			console.log('main?')
			TS.load(lib).then(pinit)
		} else {
			setTimeout(function() {//wait X milliseconds then loop and recheck if ready
				console.log(',') // likely TS.signalAppReady() was not called
				TS.loadOnAppReady(lib, pinit)//loop
			} ,60)
		}//else
	}

}//class

