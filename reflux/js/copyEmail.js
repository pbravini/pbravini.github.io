// Copy email message
document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyEmailButton');
    const copyMessage = document.getElementById('copyMessage');

    copyButton.addEventListener('click', function (e) {
        e.preventDefault();
        const email = this.getAttribute('data-email');

        navigator.clipboard.writeText(email).then(function () {
            // Show the copy message
            copyMessage.style.display = 'inline';

            // Hide the message after 3 seconds
            setTimeout(function () {
                copyMessage.style.display = 'none';
            }, 3000);
        }).catch(function (error) {
            console.error('Failed to copy: ', error);
        });
    });
});