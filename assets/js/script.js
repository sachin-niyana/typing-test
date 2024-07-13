document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const nameInput = document.getElementById("name");
  const passwordInput = document.getElementById("password");
  const passwordFeedback = document.getElementById("passwordFeedback");
  const submitBtn = document.getElementById("submitBtn");

  function validatePassword(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return {
      isValid: hasUppercase && hasNumber,
      feedback: `Password must contain at least one uppercase letter and one number.`,
    };
  }

  function validateForm() {
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    const passwordValidation = validatePassword(password);

    if (name && passwordValidation.isValid) {
      submitBtn.disabled = false;
      passwordFeedback.textContent = "";
    } else {
      submitBtn.disabled = true;
      passwordFeedback.textContent = passwordValidation.feedback;
    }
  }

  nameInput.addEventListener("input", validateForm);
  passwordInput.addEventListener("input", validateForm);

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!submitBtn.disabled) {
      window.location.href = "Typing Speed Project.html"; // Replace with your desired second page URL
    }
  });
});
