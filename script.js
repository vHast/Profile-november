document.addEventListener('DOMContentLoaded', function () {
    const nightModeBtn = document.getElementById('nightmode-btn');
    const body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        // Toggle dark mode class on the body
        body.classList.toggle('dark-mode');

        // Update styles based on dark mode status
        const isDarkMode = body.classList.contains('dark-mode');
        updateStyles(isDarkMode);

        // Save the user's preference in local storage
        localStorage.setItem('dark-mode', isDarkMode);
    }

    // Function to update styles based on dark mode status
    function updateStyles(isDarkMode) {
        const darkModeStyles = document.getElementById('dark-mode-styles');
        if (isDarkMode) {
            darkModeStyles.href = 'styles-dark.css';
        } else {
            darkModeStyles.href = ''; // Use an empty string for the default styles
        }
    }

    // Initialize styles based on user's preference
    if (localStorage.getItem('dark-mode')) {
        body.classList.add('dark-mode');
        updateStyles(true);
    }

    // Add click event listener to the nightmode-btn
    nightModeBtn.addEventListener('click', toggleDarkMode);
});