// Form validation for Contact Us section
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting immediately

  // Get form fields
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;

  // Simple validation
  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return; // Stop execution if validation fails
  }

  // If validation passes, show success message
  alert("Thank you for your message! We will get back to you soon.");
  
  // Clear the form after submission
  document.querySelector('form').reset();
});

// Example of how to handle modal popups
// Opening a modal when "Request Ambulance" is clicked (using Bootstrap modals)
const ambulanceModal = new bootstrap.Modal(document.getElementById('ambulanceModal'));
const vetModal = new bootstrap.Modal(document.getElementById('vetModal'));

// Modal open when clicking 'Request Ambulance' button
document.querySelector('[data-bs-toggle="modal"][data-bs-target="#ambulanceModal"]').addEventListener('click', function() {
  ambulanceModal.show();
});

// Modal open when clicking 'View Vets' button
document.querySelector('[data-bs-toggle="modal"][data-bs-target="#vetModal"]').addEventListener('click', function() {
  vetModal.show();
});

// Example: You can add more functionality here if needed, like showing a thank you message after form submission, etc.
