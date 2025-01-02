document.querySelectorAll('video').forEach(video => {
    video.addEventListener('click', () => {
        // Toggle play/pause on click
        if (video.paused) {
            video.play(); // Play the video if it's paused
            console.log('Video playing!');
        } else {
            video.pause(); // Pause the video if it's playing
            console.log('Video paused!');
        }
    });
});

// Add smooth scrolling for anchor links (if you plan to have them later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adjust videos based on window size (for full-screen adaptation on smaller devices)
window.addEventListener("resize", function() {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        if (window.innerWidth <= 480) {
            video.style.width = "100%";
        } else {
            video.style.width = "45%";
        }
    });
});
