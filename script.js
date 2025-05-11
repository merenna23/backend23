
async function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (!message) return;

  const messagesDiv = document.getElementById('messages');
  messagesDiv.innerHTML += `<div><strong>Você:</strong> ${message}</div>`;

  const response = await fetch('/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: message })
  });

  const data = await response.json();
  messagesDiv.innerHTML += `<div><strong>Robô:</strong> ${data.text}</div>`;

  // Rosto muda expressão
  const mouth = document.getElementById('mouth');
  mouth.textContent = '😄';
  setTimeout(() => mouth.textContent = '😐', 2000);

  input.value = '';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
