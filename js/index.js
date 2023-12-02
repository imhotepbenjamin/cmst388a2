// script.js
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submitBtn').addEventListener('click', function () {
    submitForm();
  });

  document.getElementById('resetBtn').addEventListener('click', function () {
    resetForm();
  });

  // Add focus and blur event listeners to required fields
  const requiredFields = document.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    field.addEventListener('focus', function () {
      // Remove red border when the field is focused
      this.style.borderColor = '';
    });

    field.addEventListener('blur', function () {
      // Add red border if the required field is empty
      if (this.value.trim() === '') {
        this.style.borderColor = 'red';
      }
    });
  });
});

function submitForm() {
  // Reset all error messages and borders
  resetErrorMessages();

  // Check for required fields
  const requiredFields = document.querySelectorAll('[required]');
  for (const field of requiredFields) {
    const value = field.value.trim();
    if (value === '') {
      // Add red border to the required field
      field.style.borderColor = 'red';
      return; // Stop further processing
    }
  }

  // Check for other errors
  const errors = checkForErrors();

  if (errors.length > 0) {
    // Display errors
    displayErrors(errors);
  } else {
    // All data is valid, proceed with form submission
    document.getElementById('contactForm').submit();
  }
}

function resetForm() {
  // Reset all form fields to blank state
  document.getElementById('contactForm').reset();

  // Reset all error messages and borders
  resetErrorMessages();
}

function resetErrorMessages() {
  document.querySelectorAll('.error').forEach(errorElement => {
    errorElement.textContent = '';
  });

  // Reset borders for all fields
  document.querySelectorAll('.row input, .row select, .row textarea').forEach(element => {
    element.style.borderColor = '';
  });
}

function checkForErrors() {
  const errors = [];

  // Example: Check for errors in the firstName field
  const firstName = document.getElementById('firstName').value.trim();
  if (firstName === '') {
    errors.push('First Name is required.');
    document.getElementById('firstNameError').textContent = 'First Name is required.';
  }

  // Add more checks for other form fields

  return errors;
}

function displayErrors(errors) {
  alert('Please fix the following errors:\n\n' + errors.join('\n'));
}
