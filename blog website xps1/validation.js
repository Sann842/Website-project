function validateForm() {
    var name = document.forms["Contact"]["name"].value;
    var email = document.forms["Contact"]["email"].value;
    var phone = document.forms["Contact"]["phone"].value;
    var query = document.forms["Contact"]["query"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (phone == "") {
        alert("Phone number must be filled out");
        return false;
    }
    if (!isValidPhoneNumber(phone)) {
        alert("Phone number is invalid");
        return false;
    }
    // Query box can remain empty, so no validation needed
    alert("Form Submitted Successfully!")
    return true;
}

function isValidPhoneNumber(phone) {
    // Simple phone number validation (10 digits)
    return /^\d{10}$/.test(phone);
}
