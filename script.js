document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guestbook-form');
  const nameInput = document.getElementById('name');
  const messageInput = document.getElementById('message');
  const messageList = document.getElementById('message-list');

  const savedMessages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
  savedMessages.forEach(addMessageToDOM);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (name && message) {
      const entry = { name, message, date: new Date().toLocaleString('fr-FR') };
      addMessageToDOM(entry);
      savedMessages.push(entry);
      localStorage.setItem('guestbookMessages', JSON.stringify(savedMessages));
      nameInput.value = '';
      messageInput.value = '';
    }
  });

  function addMessageToDOM(entry) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${entry.name}</strong> <em>(${entry.date})</em><br>${entry.message}`;
    messageList.prepend(li);
  }
});
