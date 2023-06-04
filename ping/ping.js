// Create a new XMLHttpRequest object
var request = new XMLHttpRequest();

// Set up a callback function to handle the response
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        // Request successful, do something with the response
        var response = request.responseText;
        console.log(response);
    }
};

// Specify the HTTP method and URL of the resource
var method = 'GET';
var url = 'http://localhost:8080/data';

// Open the request
request.open(method, url, true);

// Set any headers, if required
request.setRequestHeader('Content-Type', 'application/json');

// Set any additional request parameters, if required
// request.setRequestHeader('Authorization', 'Bearer your_token');

// Send the request
request.send();
