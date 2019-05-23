let menu = document.body.querySelectorAll("header nav ul li");

for(item of menu) {
	item.onclick = openMenuElements;
}

function openMenuElements(e) {
	let dataMenu,selecEl, childEl;
	for(item of menu) {
		/*dataMenu = item.getAttribute("data-menu");
		selecEl = "div[data-menu=\"" + dataMenu +"\"]";
		childEl = document.querySelector(selecEl);
		if (!childEl.classList.contains("close")) {
			childEl.classList.add("close");
		}*/
		item.classList.add("close");
	}
	let elementName = this.getAttribute("data-menu");
	let selectorEl = "div[data-menu=\"" + elementName +"\"]";
	//console.log(document.querySelectorAll(selectorEl));
	let openElement = document.querySelector(selectorEl);
	openElement.classList.toggle("close");

}

let pTags = document.querySelectorAll(".subjects p");

for( item of pTags) {
	item.onclick = openClose;
}

function openClose(e) {
		if (e.target.nextElementSibling.nodeName === "UL") {
			this.nextElementSibling.classList.toggle("close");
		}
}

