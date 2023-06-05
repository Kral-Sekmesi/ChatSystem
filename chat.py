import requests
import json

# Define the Discord webhook URL
webhook_url = 'https://discord.com/api/webhooks/1114937632795922542/6SxC0vLtTYUXt-83zX9ldZy9_nOc92qxpY5-o7RzItofFjru9h2MSP6FeaN-tVAZ6Tko'

# Function to send a chat log to Discord
def send_chat_log_to_discord(message):
    payload = {
        'content': message
    }
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.post(webhook_url, data=json.dumps(payload), headers=headers)

    if response.status_code == 200:
        print('Chat log sent to Discord successfully')
    else:
        print('Failed to send chat log to Discord. Status code:', response.status_code)

# Example usage: Filter chat logs for specific words and send to Discord
def filter_and_send_chat_logs(chat_logs):
    filtered_chat_logs = [message for message in chat_logs if not any(word in message.lower() for word in ['gay', 'g a y'])]

    # Send each filtered chat log to Discord
    for message in filtered_chat_logs:
        send_chat_log_to_discord(message)

# Example list of chat logs
chat_logs = [
    'Hello there!',
    'I love playing this game!',
    'That was a great match.',
    'Let\'s meet at the park.',
    'I hate that guy.',
    'This game is gay!',
    'What a g a y game!',
]

# Filter and send chat logs to Discord
filter_and_send_chat_logs(chat_logs)
