var webSocket = new WebSocket("ws://127.0.0.1:8080");
var messageTextArea = document.getElementById("messageTextArea");

webSocket.onopen = function(message){
    messageTextArea.value += "Server connect...\n";
};

webSocket.onclose = function(message){
    messageTextArea.value += "Server Disconnect...\n";
};

webSocket.onerror = function(message){
    messageTextArea.value += "error...\n";
};

webSocket.onmessage = function(message){
    messageTextArea.value += "Recieve From Server => "+message.data+"\n";
};

function sendMessage(){
    var message = document.getElementById("textMessage");
    messageTextArea.value += "Send to Server => "+message.value+"\n";
    webSocket.send(message.value);
    message.value = "";
}
function disconnect(){
webSocket.close();
}