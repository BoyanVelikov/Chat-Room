function chatRoom() {
   function message() {
      let div = document.createElement("div");
      div.classList.add("message", "my-message");
      chatInput = document.getElementById("chat_input");
      let abc = document.getElementById("chat_messages");
      div.textContent = chatInput.value;
      abc.appendChild(div);
      chatInput.value = '';
   }
   const sendButton = document.getElementsByTagName("button")[0];
   sendButton.addEventListener('click', message);
}