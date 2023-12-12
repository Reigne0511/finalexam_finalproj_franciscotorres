document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings: ["Programming", "Designing", "Web Development"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    var typedRica = new Typed(".home#HomeRica .home-content h4[style*='--i:12'] .text", {
        strings: ["Web Development", "Graphic Design", "UI/UX Design"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    
    const toTop = document.querySelector(".top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });
});
