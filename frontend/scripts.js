document.addEventListener('DOMContentLoaded', function() {
    const images = [];
    for (let i = 0; i < 10; i++) {
        images.push(`photos/${i}.jpg`);
    }

    const carouselInner = document.getElementById('carouselItems');
    const photoGrid = document.getElementById('photoGrid');

    images.forEach((image, index) => {
        // Create carousel item
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
        carouselItem.innerHTML = `<img src="${image}" class="d-block w-100" alt="Photo ${index}">`;
        carouselInner.appendChild(carouselItem);
    });
});
