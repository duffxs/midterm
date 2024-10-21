document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    console.log(JSON.stringify(formData, null, 2));

    document.getElementById('submitMessage').style.display = 'block';

    document.getElementById('contactForm').reset();
});