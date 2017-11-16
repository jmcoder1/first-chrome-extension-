
function click(e) {
	chrome.tabs.executeScript(null,
		{code:"document.body.style.backgroundImage='url(" + images[e.target.id]
			+ ""}); //change the colour to the colour clicked
	window.close(); //close the pop up window

}

document.addEventListener('DOMContentLoaded', function () {
	//listen when dom is completely loaded 
	var divs = document.querySelectorAll('div'); //find all divs
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener("click", click); // wait for click
	}
});

var images = {
	L: "http://kawapaper.com/d/3177-3/Kawapaper_Death-Note_0000041_1024x768.jpg",
	BB: "http://images6.fanpop.com/image/photos/35600000/Beyond-Birthday-beyond-birthday-35653508-1600-1769.jpg",
	Near: "http://img03.deviantart.net/28f7/i/2011/159/3/a/death_note__near__n_by_kurdasmahltlover-d3idbdk.png",
	Mellow: "http://images6.fanpop.com/image/photos/35600000/M-Symbol-Mello-death-note-35697772-550-682.png",
}
