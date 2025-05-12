// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    // Optional: Define a threshold slightly below the top to trigger sticky
    const stickyThreshold = 1; // pixels

    if (header) {
        const handleScroll = () => {
            if (window.scrollY > stickyThreshold) {
                header.classList.add('is-sticky');
            } else {
                header.classList.remove('is-sticky');
            }
        };

        // Debounce scroll handler for performance
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleScroll, 15); // Adjust delay as needed
        }, { passive: true }); // Use passive listener for better scroll performance

        // Initial check in case the page loads scrolled down
        handleScroll();
    }

    //--- Optional: Basic Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
         if (menuToggle && mainNav) {
         menuToggle.addEventListener('click', () => {
             mainNav.classList.toggle('is-active'); // You'll need CSS for .is-active
             // Add ARIA attributes for accessibility
             const isExpanded = mainNav.classList.contains('is-active');
             menuToggle.setAttribute('aria-expanded', isExpanded);
         });
     }
    //end

});

// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the select element by its ID
    const languageSelect = document.getElementById('language-select');

    // Check if the element exists to prevent errors
    if (languageSelect) {
        // Add an event listener that triggers when the selected option changes
        languageSelect.addEventListener('change', function() {
            // Get the value of the selected option (this is the URL)
            const selectedUrl = this.value;

            // Check if the selectedUrl is not empty (i.e., the placeholder wasn't selected)
            if (selectedUrl) {
                // Redirect the browser to the new URL
                window.location.href = selectedUrl;
            }
        });
    } else {
        console.error("Error: The select element with ID 'language-select' was not found.");
    }
});
