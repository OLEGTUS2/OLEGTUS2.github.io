document.addEventListener('DOMContentLoaded', () => {

    let menu = document.getElementById('menu'),
        headerNav = document.querySelector('.header_nav'),
        title = headerNav.querySelectorAll('a')[2],
        main = document.querySelector('.main');

    title.addEventListener('click', () => {
            if (menu.style.display === 'flex') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'flex';
            }
    });

    main.addEventListener('click', closeModal);

    function closeModal() {
        menu.style.display="none";
    }
});