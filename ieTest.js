if (/Microsoft|MSIE|Edge|Trident|NET/.test(navigator.userAgent)) {
	document.execCommand("Stop");
	window.location = "https://www.google.com/chrome/browser/desktop/";
}
