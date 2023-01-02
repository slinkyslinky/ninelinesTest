export default function () {

	const footer = document.querySelector("footer")
	const button = document.getElementById("up-button")
	const top = document.getElementById("main")

	if (window.scrollY + window.innerHeight >= footer.offsetTop) {
		if (!button.classList.contains("up-button--active")) {
			button.classList.add("up-button--active")
		}
	}

	if (window.scrollY <= top.offsetHeight) {
		if (button.classList.contains("up-button--active")) {
			button.classList.remove("up-button--active")
		}
	}


}
