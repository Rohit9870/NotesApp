// app/javascript/toggle_password.js

document.addEventListener('turbolinks:load', function() {
    document.body.addEventListener('click', function(event) {
      if (event.target.classList.contains('toggle-password')) {
        console.log("Eye icon clicked");
        event.target.classList.toggle("fa-eye");
        event.target.classList.toggle("fa-eye-slash");
  
        const input = event.target.closest('.input-group').querySelector('input');
        if (input.getAttribute("type") === "password") {
          input.setAttribute("type", "text");
        } else {
          input.setAttribute("type", "password");
        }
      }
    });
  });
  