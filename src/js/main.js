import './vendor';
import './helpers';
import './components/social';
import { ieFix } from './vendor/ie-fix';
import { vhFix } from './vendor/vh-fix';
import { actualYear } from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';



ieFix();
vhFix();
actualYear();
scrollToAnchor.init();


header.init();
lazyLoading.init();

window.addEventListener("DOMContentLoaded", () => {
	const textFade = document.querySelector(".text-fade");
	textFade.classList.add("text-fade--animated");
	document.querySelector(".preloader").classList.add("preloader--closed")
	document.querySelector("html").style.overflowY = "auto"
})

