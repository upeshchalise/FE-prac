const bgImageEle = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    imageScroll();
});

function imageScroll() {
    bgImageEle.style.opacity = 1 - window.pageYOffset / 900;
    bgImageEle.style.backgroundSize = 160 - window.pageYOffset / 10 +"%";
}