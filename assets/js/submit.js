document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // You can add form validation here

        // Show success message
        document.getElementById('successMessage').style.display = 'block';
    });
});
