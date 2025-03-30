// JavaScript untuk animasi scroll dan interaktivitas tambahan
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-btn');
    ctaButton.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('#paket').offsetTop,
            behavior: 'smooth'
        });
    });
});
