function handleAlert() {
    console.log('Alert triggered');
  }
  
  const buttons = document.querySelectorAll('.alert-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', handleAlert);
  });