console.log("Script loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    const toggleElement = document.getElementById('categoryToggle');
    const dropdownElement = document.getElementById('categoryDropdown');

    toggleElement.addEventListener('click', function() {
        dropdownElement.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!toggleElement.contains(event.target) && !dropdownElement.contains(event.target)) {
            dropdownElement.classList.add('hidden');
        }
    });
});