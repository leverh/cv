//  Navigation
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        // Update button states
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.setAttribute('aria-selected', 'false');
        });
        button.setAttribute('aria-selected', 'true');

        // Update section visibility
        document.querySelectorAll('.section').forEach(section => {
            section.setAttribute('aria-hidden', 'true');
        });
        const sectionId = button.getAttribute('aria-controls');
        document.getElementById(sectionId).setAttribute('aria-hidden', 'false');
    });
});