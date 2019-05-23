let menu = document.body.querySelectorAll("header nav ul li");

for(item of menu) {
	item.onclick = openMenuElements;
}

function openMenuElements(e) {
	let dataMenu,selecEl, childEl;
	for(item of menu) {
		dataMenu = item.getAttribute("data-menu");
		childEl = document.getElementsByClassName(dataMenu)[0];
		if (!childEl.classList.contains("close")) {
			childEl.classList.add("close");
		}
	}
	let elementName = this.getAttribute("data-menu");
	
	let openElement = document.getElementsByClassName(elementName)[0];
	openElement.classList.toggle("close");

}

let pTags = document.querySelectorAll(".subjects-page p");

for( item of pTags) {
	item.onclick = openClose;
}

function openClose(e) {
		if (e.target.nextElementSibling.nodeName === "UL") {
			this.nextElementSibling.classList.toggle("close");
		}
}

let housesTags = document.querySelectorAll(".student-page h2");

for( item of housesTags) {
	item.onclick = openHouse;
}

function openHouse(e) {
		this.nextElementSibling.classList.toggle("close");
}

