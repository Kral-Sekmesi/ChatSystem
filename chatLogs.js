const fetch = require('node-fetch');

// Define the Discord webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1114937632795922542/6SxC0vLtTYUXt-83zX9ldZy9_nOc92qxpY5-o7RzItofFjru9h2MSP6FeaN-tVAZ6Tko';

// Function to send a chat log to Discord
async function sendChatLogToDiscord(message) {
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: message }),
        });

        if (response.ok) {
            console.log('Chat log sent to Discord successfully');
        } else {
            console.error('Failed to send chat log to Discord. Status code:', response.status);
        }
    } catch (error) {
        console.error('Error occurred while sending chat log to Discord:', error);
    }
}

// Example usage: Filter chat logs for specific words and send to Discord
function filterAndSendChatLogs(chatLogs) {
    const filteredChatLogs = chatLogs.filter(message =>
        !/(gay|g a y)/i.test(message) // Filter out messages containing "gay" or "g a y" (case-insensitive)
    );

    // Send each filtered chat log to Discord
    filteredChatLogs.forEach(message => {
        sendChatLogToDiscord(message);
    });
}

// Example array of chat logs
const chatLogs = [
    'Hello there!',
    'I love playing this game!',
    'That was a great match.',
    'Let\'s meet at the park.',
    'I hate that guy.',
    'This game is gay!',
    'What a g a y game!',
];

// Filter and send chat logs to Discord
filterAndSendChatLogs(chatLogs);