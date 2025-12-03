// Simple welcome function
function sayHello() {
    alert("Welcome to Healthy Nutrition!");
}

// Form submission handler
function submitForm() {
    let name = document.getElementById("name").value;

    if (name.trim() === "") {
        alert("Please enter your name before submitting.");
        return false;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
    return false; // prevents actual page reload for demo
}
function submitFormBackend() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email) {
        alert("Please fill in your name and email.");
        return false;
    }

    // Send POST request to backend
    fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.querySelector(".contact-form").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Try again.");
    });

    return false; // prevent default form submission
}
