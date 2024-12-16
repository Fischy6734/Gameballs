function sendMessage(event) {
    event.preventDefault();
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();

    if (messageText) {
        const messageList = document.getElementById('chat-messages');
        const newMessage = document.createElement('li');
        newMessage.classList.add('sender');
        newMessage.textContent = messageText;
        messageList.appendChild(newMessage);
        input.value = '';
        messageList.scrollTop = messageList.scrollHeight; // Scroll to the bottom
    }
}
