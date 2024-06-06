document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('user-registration-form');
    const propertyForm = document.getElementById('property-form');
    const filterForm = document.querySelector('.filter-form');
    const propertyList = document.getElementById('property-list');

    // User Registration Form Submission
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Simulate registration process
        alert('User registered successfully!');
        // Clear the form fields
        registrationForm.reset();
    });

    // Property Posting Form Submission
    propertyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Simulate property posting process
        alert('Property posted successfully!');
        // Clear the form fields
        propertyForm.reset();
    });

    // Filter Form Submission
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Simulate filter application process
        alert('Filters applied successfully!');
    });

    // Handle Button Click (Interested)
    propertyList.addEventListener('click', function(event) {
        if (event.target.classList.contains('interested-btn')) {
            // Simulate interested button click
            alert('Interested button clicked!');
        }
    });
});

