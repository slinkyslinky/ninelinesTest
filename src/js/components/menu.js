export default function () {
	const nav = document.getElementById("nav");
	const burger = document.getElementById("menu__burger")
	const html = document.querySelector("html")


	function toggleMenu() {
		burger.classList.toggle("menu__burger--opened")
		nav.classList.toggle("nav--opened")


		if (html.style.overflowY === "hidden") {
			html.style.overflowY = "auto"
		} else if (html.style.overflowY === "auto") {
			html.style.overflowY = "hidden"
		}
	}

	burger.addEventListener("click", toggleMenu)


	nav.addEventListener("click", (e) => {
		if (html.offsetWidth < 1025) {
			if (e.target.classList.contains("js-to-anchor")) {
				toggleMenu()
			}
		}

	})
}
