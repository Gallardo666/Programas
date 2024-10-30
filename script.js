// script.js
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            const isOpen = dropdownContent.classList.contains('show');

            // Cerrar todos los dropdowns
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('show'); // Cierra el dropdown
            });

            // Alternar el dropdown actual
            if (!isOpen) {
                dropdownContent.classList.add('show'); // Abre el dropdown
            }
        });
    });
});
