// Handle registration
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const mobile = document.getElementById('mobile').value.trim();
        const email = document.getElementById('email').value.trim();
  
        if (!/^\d{10}$/.test(mobile)) {
          alert("Mobile number must be exactly 10 digits.");
          return;
        }
  
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert("Enter a valid email.");
          return;
        }
  
        const userData = {
          firstName,
          lastName,
          dob,
          gender,
          mobile,
          email
        };
  
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
  
        alert("User registered successfully!");
        this.reset();
      });
    }
  
    // Display users if on display.html
    const userList = document.getElementById('userList');
    if (userList) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.length === 0) {
        userList.innerHTML = "<p>No users registered yet.</p>";
      } else {
        users.forEach((user, index) => {
          userList.innerHTML += `
            <div class="user">
              <h3>User ${index + 1}</h3>
              <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
              <p><strong>Date of Birth:</strong> ${user.dob}</p>
              <p><strong>Gender:</strong> ${user.gender}</p>
              <p><strong>Mobile:</strong> ${user.mobile}</p>
              <p><strong>Email:</strong> ${user.email}</p>
            </div>
          `;
        });
      }
    }
  });
  
  // 📦 ZIP GENERATOR
  function downloadZip() {
    const zip = new JSZip();
  
    // Sample HTML content
    const indexHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>User Registration</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2>User Registration</h2>
      <form id="registrationForm">
        <input type="text" id="firstName" placeholder="First Name" required />
        <input type="text" id="lastName" placeholder="Last Name" required />
        <input type="date" id="dob" required />
        <div class="gender">
          Gender:
          <label><input type="radio" name="gender" value="Male" required /> Male</label>
          <label><input type="radio" name="gender" value="Female" /> Female</label>
        </div>
        <input type="tel" id="mobile" placeholder="Mobile Number (10 digits)" required />
        <input type="email" id="email" placeholder="Email" required />
        <button type="submit">Register</button>
      </form>
      <a href="display.html" class="link">View Registered Users</a>
      <button onclick="downloadZip()">Download Project as ZIP</button>
    </div>
    <script src="script.js"></script>
  </body>
  </html>`;
  
    const displayHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Registered Users</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2>Registered Users</h2>
      <div id="userList"></div>
      <a href="index.html" class="link">Go Back</a>
    </div>
    <script src="script.js"></script>
  </body>
  </html>`;
  
    const styleCss = `
  body {
    font-family: Arial, sans-serif;
    background: #f9f9f9;
    padding: 20px;
  }
  
  .container {
    max-width: 600px;
    background: white;
    padding: 30px;
    margin: auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  h2 {
    text-align: center;
  }
  
  input[type="text"],
  input[type="date"],
  input[type="tel"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
  }
  
  .gender {
    margin: 10px 0;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #0288d1;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0277bd;
  }
  
  .link {
    display: block;
    margin-top: 20px;
    text-align: center;
    color: #0288d1;
    text-decoration: none;
  }
  
  .user {
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 10px;
  }
  `;
  
    // Add all files
    zip.file("index.html", indexHtml.trim());
    zip.file("display.html", displayHtml.trim());
    zip.file("style.css", styleCss.trim());
    zip.file("script.js", downloadZip.toString().split("function")[0].trim()); // this script
  
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "UserRegistrationApp.zip");
    });
  }
  