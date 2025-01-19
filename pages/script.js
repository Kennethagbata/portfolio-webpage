document.getElementById('viewPortfolioBtn').addEventListener('click', function() {
    document.getElementById('portfolio').classList.toggle('hidden');
    document.getElementById('contact').classList.toggle('hidden');
});

// Carousel functionality
const carouselItems = document.querySelectorAll('.carousel-item');
let currentCarouselIndex = 0;

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function nextCarouselItem() {
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
    showCarouselItem(currentCarouselIndex);
}

function prevCarouselItem() {
    currentCarouselIndex = (currentCarouselIndex - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentCarouselIndex);
}

// Initialize carousel
showCarouselItem(currentCarouselIndex);

// Event listeners for carousel controls
document.querySelector('[data-carousel-next]').addEventListener('click', nextCarouselItem);
document.querySelector('[data-carousel-prev]').addEventListener('click', prevCarouselItem);

// Automatic sliding every 10 seconds
setInterval(nextCarouselItem, 10000);