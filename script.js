
const goToTopButton = document.getElementById("goToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
});

goToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
