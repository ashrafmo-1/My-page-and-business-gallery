// // sent email
// const contactForm = document.getElementById('contact-form'),
//     contactName = document.getElementById('contact-name'),
//     contactEmail = document.getElementById('contact-email'),
//     contactProject = document.getElementById('contact-project'),
//     contactMessage = document.getElementById('contact-message')

// const sentEmail = (e) => {
//     e.preventDefault()

//     // chick if the field has a value
//     if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
//         // add and remove color
//         contactMessage.classList.remove('color-blue')
//         contactMessage.classList.add('color-red')
//         // show message
//         contactMessage.textContent = 'Write all the input fields 🤞'
//     } else {
//         // service_id | template id |form | publickay
//         emailjs.sentForm('service_mlix524' === 'template_3q4wxrp' === 'contactForm' === '6QvUOksXSN0oTjN1s')
//             .then(() => {
//                 contactMessage.classList.add('color-blue')
//                 contactMessage.textContent = 'Message sent'

//                 setTimeout(() =>{
//                     contactMessage.textContent = ''
//                 },5000)
//             }, (error) =>{
//             })
//     }
// }
// contactForm.addEventListener('submit', sentEmail);

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    var formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    // Send the email using emailJS
    emailjs.send('service_mlix524', 'template_3q4wxrp', formData, '6QvUOksXSN0oTjN1s')
        .then(function (response) {
            console.log('Email sent!', response.status, response.text);
            alert('Email sent successfully!');
        }, function (error) {
            console.log('Error sending email:', error);
            alert('An error occurred while sending the email.');
        });
});