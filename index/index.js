// JavaScript to handle dropdown toggle on hover and click
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Function to show dropdown content
    function showDropdown() {
        const dropdownMenu = dropdownToggle.closest('.dropdown-menu');

        // Show dropdown content
        dropdownContent.style.display = 'block';

        // Add open class to dropdown menu
        dropdownMenu.classList.add('open');

        // Rotate arrow for hover state
        const arrow = dropdownToggle.querySelector('.arrow');
        arrow.style.transform = 'rotate(90deg)';
    }

    // Function to hide dropdown content
    function hideDropdown() {
        const dropdownMenu = dropdownToggle.closest('.dropdown-menu');

        // Hide dropdown content
        dropdownContent.style.display = 'none';

        // Remove open class from dropdown menu
        dropdownMenu.classList.remove('open');

        // Rotate arrow back to original state
        const arrow = dropdownToggle.querySelector('.arrow');
        arrow.style.transform = 'none';
    }

    // Toggle dropdown on hover and click
    dropdownToggle.addEventListener('mouseenter', showDropdown);
    dropdownToggle.addEventListener('mouseleave', hideDropdown);
    dropdownContent.addEventListener('mouseenter', showDropdown);
    dropdownContent.addEventListener('mouseleave', hideDropdown);

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const dropdownMenu = dropdownToggle.closest('.dropdown-menu');

        if (dropdownMenu.classList.contains('open')) {
            hideDropdown(); // Hide dropdown if already open
        } else {
            showDropdown(); // Show dropdown if closed
        }
    });
});

function copyToClipboard() {
    var link = "https://confismp.uk";
    
    navigator.clipboard.writeText(link).then(function() {
        alert("Link copied to clipboard!");
    }).catch(function(error) {
        console.error("Failed to copy text: ", error);
    });
}