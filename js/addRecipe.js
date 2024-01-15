function previewImage(event) {
    const input = event.target;
        const preview = document.getElementById('imagePreview');

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                preview.src = e.target.result;
            };

        reader.readAsDataURL(input.files[0]);
        } else {
            preview.src = '';
    }
}

function characterCount() {
    let maxCount = 100;
    let descInput = document.getElementById('desc');
    let charCount = document.getElementById('charCount');

    let remainingCharacter = maxCount - descInput.value.length;
    charCount.textContent = remainingCharacter + " / " + maxCount; 
}

function addIngredient() {
    const container = document.getElementById('ingredientContainer');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'newInputs[]';
    newInput.placeholder = 'Add Ingredients';
    newInput.maxLength = 100;

    container.appendChild(newInput);
    container.appendChild(document.createElement('br'));
}

function browseButton() {
    document.getElementById('browseButton').addEventListener('click', function () {
            document.getElementById('addImage').click();
        });
}