document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#home a[href^="#"]');
    Array.from(links).forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            if (!link.classList.contains('active')) {
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
            let targetId = link.getAttribute('href'),
                targetEl = document.querySelector(targetId),
                targetElTop = Math.floor(targetEl.getBoundingClientRect().top);
            window.scrollBy({
                top: targetElTop,
                behavior: 'smooth'
            });
            window.history.pushState('', '', targetId);
        });
    });
});