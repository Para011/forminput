document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value.trim();
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var errorMessage = '';

    // Validation
    if (!username) {
        errorMessage += 'Please enter a username.\n';
    }
if (gender === '') {
        errorMessage += 'Please select a gender.\n';
    }

    // Display errors or submit form
    if (errorMessage !== '') {
        alert(errorMessage);
    } else {
        var message = '';

        if (age >= 18) {
            message = `Hello ${username}, since you are ${age} years old, you're an adult. Welcome!`;
        } else {
            message = `Hello ${username}, since you are ${age} years old, you're a minor. Welcome!`;
        }
alert(message);
    }
});
