document.getElementById('confirmPassword').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    const message = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
  
    if (password === confirmPassword && password !== '') {
      message.textContent = 'Passwords match';
      message.style.color = 'green';
      submitBtn.disabled = false;
    } else {
      message.textContent = 'Passwords do not match';
      message.style.color = 'red';
      submitBtn.disabled = true;
    }
  });
  