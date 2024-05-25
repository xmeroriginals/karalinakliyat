window.addEventListener('load', function() {
    const logo = document.querySelector('.logo');
    const overlay = document.querySelector('.overlay');
    
    setTimeout(() => {
        logo.classList.add('fade-out');
    }, 501);

    setTimeout(() => {
        overlay.classList.add('fade-out');
    }, 1101);

    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1301);
});
