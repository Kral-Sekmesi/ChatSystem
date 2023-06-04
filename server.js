const PING = require("./ping/ping.js");
const express = require("./express.js");
const Express = require("express");
const chat = require("./chat.js");
const pong = require("./pong/pong.js");
const status = require("./status.js");

document.addEventListener("DOMContentLoaded", function() {
    var statusElement = document.getElementById("status");

    // Get the status code from the URL parameter
    var params = new URLSearchParams(window.location.search);
    var statusCode = params.get("code");

    // Display the status code on the page
    statusElement.innerText = "Status Code: " + statusCode;
});

// This is just an example, you can modify it according to your needs
window.onload = function() {
    setTimeout(function() {
        document.getElementById('status').classList.add('hide');
    }, 3000);
};
