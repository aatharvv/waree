document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".bouncy");

    // Add animation effect when elements are visible on the screen
    images.forEach(img => {
        gsap.from(img, {
            y: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "top 60%",
                toggleActions: "play none none none",
            }
        });
    });
});

// Toggle Sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active"); // Add/remove the 'active' class to toggle sidebar visibility
}
