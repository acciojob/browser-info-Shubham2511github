// user browser name
var browserName = navigator.userAgent;
// version of browser
var version = navigator.appVersion;

// create div element
var divElement = document.createElement("div");
// set id for divelement
divElement.id = "browser-info";
// textcontent inside div
divElement.textContent = "You are using " + browserName + " version " + version;
// add div inside document
document.body.appendChild(divElement);


