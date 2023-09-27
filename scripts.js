// JavaScript for Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    const typewriterText = document.querySelector(".typewriter-text");
    const textContent = typewriterText.textContent;
    const loginButton = document.querySelector(".button[href='login.html']");
    const registerButton = document.querySelector(".button[href='register.html']");

    typewriterText.textContent = ""; // Clear the text content

    let charIndex = 0;

    function type() {
        if (charIndex < textContent.length) {
            typewriterText.textContent += textContent.charAt(charIndex);
            charIndex++;
            setTimeout(type, 80); // Adjust typing speed here
        } else {
            // Enable the login and register buttons after typing
            loginButton.removeAttribute('disabled');
            registerButton.removeAttribute('disabled');
        }
    }

    // Start typing animation when the page loads
    type();

    loginButton.addEventListener("click", function () {
        window.location.href = "login.html"; // Replace with your login page URL
    });

    registerButton.addEventListener("click", function () {
        window.location.href = "register.html"; // Replace with your register page URL
    });
});
