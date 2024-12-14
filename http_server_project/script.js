document.getElementById('get-home').addEventListener('click', () => {
  fetch('http://localhost:3028/')
    .then(response => response.text())
    .then(data => {
      document.getElementById('home-content').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('data-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  fetch('http://localhost:3028/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('data-response').innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('get-status').addEventListener('click', () => {
  fetch('http://localhost:3028/status')
    .then(response => response.json())
    .then(data => {
      document.getElementById('status-content').innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
});

