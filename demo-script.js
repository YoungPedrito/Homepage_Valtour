// Demo script to make only the "Servizi" button and "Sport ed Esperienze" option functional

document.addEventListener('DOMContentLoaded', function() {
    // We'll use CSS for the demo banner instead of JavaScript

    // Make sure the Servizi dropdown works and block Gallery dropdown
    const serviziMenuItems = document.querySelectorAll('#menu-item-6154, #menu-item-18724');
    serviziMenuItems.forEach(item => {
        // Make the entire Servizi menu item clickable to toggle dropdown
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const subMenu = item.querySelector('.sub-menu');
            if (subMenu) {
                if (subMenu.style.display === 'block') {
                    subMenu.style.display = 'none';
                } else {
                    subMenu.style.display = 'block';
                }
            }
        });
    });

    // Block Gallery dropdown and all other dropdowns except Servizi
    const allMenuItems = document.querySelectorAll('.menu-item-has-children');
    allMenuItems.forEach(item => {
        // Skip Servizi menu items
        if (item.id === 'menu-item-6154' || item.id === 'menu-item-18724') {
            return;
        }

        // Block dropdown functionality
        item.classList.add('no-dropdown');

        // Prevent dropdown toggle
        const toggleButton = item.querySelector('.toggle-sub-menu');
        if (toggleButton) {
            toggleButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
            });
        }

        // Prevent dropdown display on hover
        const subMenu = item.querySelector('.sub-menu');
        if (subMenu) {
            subMenu.style.display = 'none';
            subMenu.style.pointerEvents = 'none';
        }
    });

    // Prevent default action on all links except Servizi and Sport ed Esperienze
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a');
        if (target) {
            // Allow only Servizi dropdown and Sport ed Esperienze links
            const isServiziLink = target.closest('#menu-item-6154') || target.closest('#menu-item-18724');
            const isSportLink = target.closest('#menu-item-6174') || target.closest('#menu-item-18726');

            if (isServiziLink && !isSportLink) {
                // Prevent navigation for Servizi link but allow dropdown toggle
                e.preventDefault();
                return;
            }

            if (isSportLink) {
                // Redirect Sport ed Esperienze link to the specified URL
                e.preventDefault();
                window.location.href = 'https://valtour-aloe.vercel.app/';
                return;
            }

            // For all other links, prevent default action
            if (target.getAttribute('href') !== 'javascript:void(0);') {
                e.preventDefault();
            }
        }
    }, true);
});
