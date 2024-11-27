document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    }

    scrollToTopBtn.onclick = function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
});

function openModal() {
    document.getElementById("codingPlatformsModal").style.display = "block";
}
function closeModal() {
    document.getElementById("codingPlatformsModal").style.display = "none";
}
window.onclick = function(event) {
    const modal = document.getElementById("codingPlatformsModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

