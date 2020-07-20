
const mq = window.matchMedia( "(max-width: 767px)" );


if (mq.matches) {

    // Menu
    const navbar = document.getElementById('Navbar');
    const burgerMenu = document.getElementById('burgerMenu');
    const closeMenu = document.getElementById('CloseMenu');

    burgerMenu.addEventListener("click", () => {
        if( !navbar.classList.contains('active') ) {
            navbar.classList.add('active');
        }
    });

    closeMenu.addEventListener("click", () => {
        if( navbar.classList.contains('active') ) {
            navbar.classList.remove('active');
        }
    });
    
    // Filtros
    const sidebar = document.getElementById('Sidebar');
    const btnFiltrar = document.getElementById('Filtrar');
    const close = document.getElementById('Close');

    btnFiltrar.addEventListener("click", () => {
        if( !sidebar.classList.contains('active') ) {
            sidebar.classList.add('active');
        }
    });

    close.addEventListener("click", () => {
        if( sidebar.classList.contains('active') ) {
            sidebar.classList.remove('active');
        }
    });

} else {


}