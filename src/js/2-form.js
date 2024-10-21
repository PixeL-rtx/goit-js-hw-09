const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
let formData = {
  email: '',
  message: '',
};
const Key = localStorage.getItem('feedback-form-state');
const saveInfo = () => {
  localStorage.setItem(Key, JSON.stringify(formData));
};

const handleInput = event => {
  formData[event.target.name] = event.target.value;
  saveInfo();
};

const loadFromLocal = () => {
  const saveData = localStorage.getItem(Key);
  if (saveData) {
    formData = JSON.parse(saveData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

const handleSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(Key);
  formData = { email: '', message: '' };
  form.reset();
};

form.addEventListener('input', handleInput);

form.addEventListener('submit', handleSubmit);

window.addEventListener('DOMContentLoaded', loadFromLocal);
