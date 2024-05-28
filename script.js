document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const close = document.querySelector('.close');

    document.querySelectorAll('.gallery-image').forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImage.src = image.src;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage) {
            lightbox.style.display = 'none';
        }
    });

    // Disable keyboard shortcuts for copy (Ctrl+C), cut (Ctrl+X), paste (Ctrl+V), and screenshot (PrintScreen)
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v') || e.key === 'PrintScreen') {
            e.preventDefault();
            alert('Copy, Cut, Paste, and Screenshot functionalities are disabled.');
        }
    });

    // Disable other ways to take a screenshot
    window.addEventListener('keyup', function(e){
        if (e.key === 'PrintScreen') {
            alert('Screenshots are disabled.');
        }
    });
});
