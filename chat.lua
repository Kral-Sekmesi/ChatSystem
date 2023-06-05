local HttpService = game:GetService("HttpService")

-- Define the Discord webhook URL
local webhookUrl = "https://discord.com/api/webhooks/1114937632795922542/6SxC0vLtTYUXt-83zX9ldZy9_nOc92qxpY5-o7RzItofFjru9h2MSP6FeaN-tVAZ6Tko"

-- Function to send a chat log to Discord
local function sendChatLogToDiscord(message)
    local payload = {
        content = message
    }
    local headers = {
        ["Content-Type"] = "application/json"
    }

    local response = HttpService:PostAsync(webhookUrl, HttpService:JSONEncode(payload), headers)

    if response == "ok" then
        print("Chat log sent to Discord successfully")
    else
        print("Failed to send chat log to Discord. Response:", response)
    end
end

-- Example usage: Filter chat logs for specific words and send to Discord
local function filterAndSendChatLogs(chatLogs)
    local filteredChatLogs = {}

    for _, message in ipairs(chatLogs) do
        local lowerCaseMessage = string.lower(message)
        if not (string.find(lowerCaseMessage, "gay") or string.find(lowerCaseMessage, "g a y")) then
            table.insert(filteredChatLogs, message)
        end
    end

    -- Send each filtered chat log to Discord
    for _, message in ipairs(filteredChatLogs) do
        sendChatLogToDiscord(message)
    end
end

-- Example array of chat logs
local chatLogs = {
    "Hello there!",
    "I love playing this game!",
    "That was a great match.",
    "Let's meet at the park.",
    "I hate that guy.",
    "This game is gay!",
    "What a g a y game!",
}

-- Filter and send chat logs to Discord
filterAndSendChatLogs(chatLogs)
