// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Load the saved image URL from localStorage
    var savedImage = localStorage.getItem('savedImage');

    // Get the image element
    var imageElement = document.getElementById('profile-image');

    // Set the initial image source from localStorage or use a default image
    imageElement.src = savedImage || 'default-image.jpg';
});

function handleFileSelect(event) {
    var fileInput = event.target;
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Update the image source with the selected file
            document.getElementById('profile-image').src = e.target.result;

            // Save the new image source to localStorage
            localStorage.setItem('savedImage', e.target.result);
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(file);
    }
}

