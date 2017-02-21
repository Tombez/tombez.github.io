if (navigator.appName == 'Microsoft Internet Explorer' || navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/) || navigator.userAgent.match(/Edge/)) {
	document.execCommand("Stop");
	window.location = 'https://www.google.com/chrome/browser/desktop/';
}