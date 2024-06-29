// Add an event listener when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the login form and add a submit event listener
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve entered username and password
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Example authentication logic (replace with your actual logic)
        if (username === "admin" && password === "password") {
            // Successful login, redirect to dashboard.html
            window.location.href = "dashboard.html";
        } else {
            // Invalid credentials, show error message
            alert("Invalid username or password. Please try again.");
        }
    });
});
