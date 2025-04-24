document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // You can replace this with actual form submission logic
    alert(`Message sent from ${name} (${email}):\n\n${message}`);
});