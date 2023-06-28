const form = document.querySelector('form');
const output = document.querySelector('#output');

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const jsonData = {};
  
  for (let [key, value] of formData) {
    jsonData[key] = value;
  }

  const jsonString = JSON.stringify(jsonData);

  output.innerHTML = jsonString;

  fetch('../server/server.php')
  .then(response => response.text())
  .then(data => {
    alert(data);
  })
  .catch(() => {
    alert('Произошла ошибка при отправке запроса.');
  });
    
  form.reset();
}

form.addEventListener('submit', handleSubmit);
