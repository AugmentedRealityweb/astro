document.getElementById('sendBtn').addEventListener('click', function() {
    var chatInput = document.getElementById('chatInput');
    var chatBody = document.getElementById('chatBody');
    var message = chatInput.value.trim();

    if (message) {
        var messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');

        var senderElement = document.createElement('div');
        senderElement.classList.add('message-sender');
        senderElement.textContent = 'You';

        var contentElement = document.createElement('div');
        contentElement.classList.add('message-content');
        contentElement.textContent = message;

        messageElement.appendChild(senderElement);
        messageElement.appendChild(contentElement);

        chatBody.appendChild(messageElement);
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
