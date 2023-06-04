// Define the URL of the chat server
const chatServerUrl = "http://homurvegomur.github.io";

// Function to send a chat message
function sendChatMessage(message) {
    // Define the endpoint to send the chat message
    const endpoint = "/tester"; // Replace with the actual chat endpoint on the server

    // Define the data payload for the request
    const requestData = {
        message: message
    };

    // Make the HTTP request to send the chat message
    fetch(chatServerUrl + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (response.ok) {
                console.log("Chat message sent successfully");
            } else {
                throw new Error("Failed to send chat message");
            }
        })
        .catch(error => {
            console.error("Error sending chat message:", error);
        });
}

// Function to receive and process chat messages
function receiveChatMessages() {
    // Define the endpoint to receive chat messages
    const endpoint = "/chat"; // Replace with the actual chat endpoint on the server

    // Make the HTTP request to receive chat messages
    fetch(chatServerUrl + endpoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to retrieve chat messages");
            }
        })
        .then(responseData => {
            // Process the received chat messages
            console.log("Received chat messages:", responseData);
            // Implement your logic to display/process the chat messages as needed
        })
        .catch(error => {
            console.error("Error retrieving chat messages:", error);
        });
}

// Example usage: sending a chat message
sendChatMessage("Hello, chat server!");

// Example usage: receiving chat messages every 5 seconds
setInterval(receiveChatMessages, 5000);