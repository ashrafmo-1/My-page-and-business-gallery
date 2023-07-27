document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };
    const msgSent = document.querySelector(".contact-message")

    // Send the email using emailJS
    emailjs.send('service_mlix524', 'template_3q4wxrp', formData, '6QvUOksXSN0oTjN1s')
        .then(function(response) {
            console.log('Email sent!', response.status, response.text);
            swal("email Done!", "Thank You", "success")
        }, function(error) {
            console.log('Error sending email:', error);
            alert('An error occurred while sending the email.');
        });
});