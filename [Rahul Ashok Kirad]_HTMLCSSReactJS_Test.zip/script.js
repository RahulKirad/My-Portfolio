document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();


    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

   
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (phoneNumber.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    
    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password
    };

    console.log(formData);
    alert("Form submitted successfully!");
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
