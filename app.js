const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('nav');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

    // Toggle scroll lock on the body
    if (offScreenMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';  // Disable scrolling
    } else {
        document.body.style.overflow = '';  // Re-enable scrolling
    }
});
