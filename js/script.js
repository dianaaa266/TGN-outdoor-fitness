document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (!scrollToTopBtn) {
        console.error("⚠️ No s'ha trobat el botó 'scrollToTopBtn'. Comprova que està a l'HTML!");
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add("show");
            scrollToTopBtn.classList.remove("hide");
        } else {
            scrollToTopBtn.classList.add("hide");
            setTimeout(() => {
                scrollToTopBtn.classList.remove("show");
            }, 300);
        }
    });

    // ✅ Funció per tornar a dalt amb efecte suau
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
