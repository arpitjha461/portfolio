console.log("Portfolio loaded successfully");
document.addEventListener("DOMContentLoaded", function () {
    const profileWrapper = document.querySelector(".profile-wrapper");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 120) {
            profileWrapper.classList.add("scrolled");
        } else {
            profileWrapper.classList.remove("scrolled");
        }
    });
});
