const form = document.querySelector('form');
const output = document.querySelector('#output');

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {};
  
  for (let [key, value] of formData) {
    data[key] = value;
  }

  output.innerHTML = JSON.stringify(data);

  fetch('../server/server.php')
  .then(response => response.text())
  .then(data => {
    alert(data);
  })
  .catch(() => {
    alert('Произошла ошибка при отправке запроса.');
  });
    
  form.reset();
};

form.addEventListener('submit', handleSubmit);
