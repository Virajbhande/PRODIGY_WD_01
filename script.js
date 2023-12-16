(function () {
    document.addEventListener('DOMContentLoaded', function () {
        let scrollPosition = window.scrollY;
        let isScrollVisible = false;
        let currentIndex = 0;
        const images = document.querySelectorAll('.image-slider img');
        const totalImages = images.length;

        function toggleScrollVisibility() {
            const body = document.body;
            body.classList.toggle('scroll-visible', !isScrollVisible && body.scrollHeight > body.clientHeight);
        }

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.opacity = i === index ? 1 : 0;
            });
        }

        function nextImage() {
            images[currentIndex].style.opacity = 0;
            currentIndex = (currentIndex + 1) % totalImages;
            images[currentIndex].style.opacity = 1;
        }

        window.addEventListener('scroll', function () {
            scrollPosition = window.scrollY;
            toggleScrollVisibility();
        });

        showImage(currentIndex);

        setInterval(nextImage, 3000);
    });
})();



