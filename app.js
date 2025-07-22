// Menu toggle for mobile view
window.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidemenu = document.querySelector('.sidemenu');

    if (menuBtn && sidemenu) {
        menuBtn.addEventListener('click', function() {
            sidemenu.classList.toggle('open');
        });
    }

    // Optional: Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 600 && sidemenu.classList.contains('open')) {
            if (!sidemenu.contains(e.target) && !menuBtn.contains(e.target)) {
                sidemenu.classList.remove('open');
            }
        }
    });
});
