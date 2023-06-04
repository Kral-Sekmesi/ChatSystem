@echo off

REM Define the URL of the website you want to make the request to
set url=http://homurvegomur.github.io

REM Define the endpoint or route you want to connect to
set endpoint=/tester

REM Define the data you want to send to the chat server (if any)
set requestData={ "message": "Hello, chat server!" }

REM Make the HTTP request using curl
curl -X POST -H "Content-Type: application/json" -d "%requestData%" "%url%%endpoint%"
