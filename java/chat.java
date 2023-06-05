import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class DiscordWebhookExample {

    private static final String WEBHOOK_URL = "https://discord.com/api/webhooks/1114937632795922542/6SxC0vLtTYUXt-83zX9ldZy9_nOc92qxpY5-o7RzItofFjru9h2MSP6FeaN-tVAZ6Tko";

    public static void main(String[] args) {
        String[] chatLogs = {
                "Hello there!",
                "I love playing this game!",
                "That was a great match.",
                "Let's meet at the park.",
                "I hate that guy.",
                "This game is gay!",
                "What a g a y game!"
        };

        filterAndSendChatLogs(chatLogs);
    }

    private static void filterAndSendChatLogs(String[] chatLogs) {
        for (String message : chatLogs) {
            String lowerCaseMessage = message.toLowerCase();
            if (!lowerCaseMessage.contains("gay") && !lowerCaseMessage.contains("g a y")) {
                sendChatLogToDiscord(message);
            }
        }
    }

    private static void sendChatLogToDiscord(String message) {
        try {
            URL url = new URL(WEBHOOK_URL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setDoOutput(true);

            String payload = "{\"content\": \"" + message + "\"}";

            OutputStream outputStream = connection.getOutputStream();
            outputStream.write(payload.getBytes());
            outputStream.flush();
            outputStream.close();

            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                System.out.println("Chat log sent to Discord successfully");
            } else {
                System.out.println("Failed to send chat log to Discord. Response code: " + responseCode);
            }

            connection.disconnect();
        } catch (Exception e) {
            System.out.println("Error occurred while sending chat log to Discord: " + e.getMessage());
        }
    }
}
