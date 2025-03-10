document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".grid-item");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
     items.forEach(item => {
        observer.observe(item);
    });
});
