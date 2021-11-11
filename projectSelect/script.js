const imgs = ["32", "50"];
function randomImg() {
	document.getElementById("random").innerHTML = "<img src=\"" + imgs[Math.floor(Math.random() * imgs.length)] + "px_filler.png\">";
}