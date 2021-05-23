function getCopyrightYear() {
	var d = new Date();
	var n = d.getFullYear();
	document.getElementById("copyrightYear").innerHTML = n;
}
function getLastModified() {
	var string = document.lastModified;
	document.getElementById("lastModified").innerHTML = string;
}
getCopyrightYear();
getLastModified();
