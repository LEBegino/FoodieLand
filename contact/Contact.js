document.addEventListener("DOMContentLoaded", function() {
    
    // Function to validate form fields
    function validateForm() {
        var name = document.querySelector('.name').value.trim();
        var email = document.querySelector('.email').value.trim();
        var subject = document.querySelector('.subject').value.trim();
        var message = document.querySelector('textarea[name="message"]').value.trim();
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }
    
    // Helper function to validate email with a simple regex
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to handle form submission
    function submitForm(event) {
        event.preventDefault();
        
        if (!validateForm()) {
            return; // Form is not valid
        }
        
        // If form is valid, do something with the form data
        // For demonstration, we'll just print it to the console
        var formData = {
            name: document.querySelector('.name').value,
            email: document.querySelector('.email').value,
            subject: document.querySelector('.subject').value,
            enquiry: document.querySelector('#enquiry').value,
            message: document.querySelector('textarea[name="message"]').value
        };
        
        console.log('Form Data:', formData);
        
        // Here you would typically make an AJAX request to your server
        // To send the formData object to your server, you might use fetch API or XMLHttpRequest
        
        // Provide user feedback
        alert('Thank you for your message!');
        
        // Optionally clear the form
        // event.target.reset();
    }
    
    // Attach the submitForm function to the form's submit event
    var form = document.querySelector('form');
    form.addEventListener('submit', submitForm);
});