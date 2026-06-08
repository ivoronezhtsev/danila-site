function toggleContacts() {
    const el = document.getElementById('contact-overlay');
    if (el) {
        el.classList.toggle('opacity-0');
        el.classList.toggle('pointer-events-none');
    }
}

function toggleBio() {
    const el = document.getElementById('bio-overlay');
    if (el) {
        el.classList.toggle('opacity-0');
        el.classList.toggle('pointer-events-none');
    }
}
window.openLightbox = function (src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');

    if (lightbox && img) {
        img.src = src;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
};

window.closeLightbox = function () {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
    }
};
let currentIndex = 0;
const slider = document.getElementById('slider');
const totalSlides = slider.children.length;

function updateSlider() {
    // Сдвиг должен быть строго кратен 100%
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Опционально: Автоматическое переключение каждые 5 секунд
setInterval(nextSlide, 5000);