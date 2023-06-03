// Define the URL of the website you want to make the request to
const url = 'http://kral-sekmesi.glitch.me';

// Define the endpoint or route you want to connect to
const endpoint = '/'; // Replace with the actual endpoint

// Define the data you want to send to the chat server (if any)
const requestData = {
    // Replace with the data you want to send
    message: 'Hello, chat server!'
};

// Make the HTTP request
fetch(url + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Request successful');
            console.log('Response code:', response.status);
            return response.json();
        } else {
            throw new Error('Request failed');
        }
    })
    .then(responseData => {
        console.log('Response body:', responseData);
        // Handle the response data
    })
    .catch(error => {
        console.error('Error:', error.message);
        // Handle the error
    });