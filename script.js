document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const input = document.getElementById('message-input');
    const messageText = input.value.trim();

    if (messageText) {
        // Display the user message
        displayMessage(messageText, 'user');

        // Clear the input
        input.value = '';

        // Simulate a bot response (you can replace this with actual bot logic)
        setTimeout(() => {
            const botResponse = "You said: " + messageText; // Simple echo
            displayMessage(botResponse, 'bot');
        }, 1000);
    }
});

function displayMessage(text, sender) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);

    // Scroll to the bottom of the messages
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
