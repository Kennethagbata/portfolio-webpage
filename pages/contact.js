// Include the EmailJS SDK in your HTML file
// <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            message: message
        }).then(function(response) {
            alert('Thank you for your message!');
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
    } else {
        alert('Please fill in all fields.');
    }
});
