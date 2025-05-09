// Display an alert with the travel instructions
function showInfo(message) {
    alert("How to Reach:\n" + message);
  }
  
  // You can also add more interactive features here later
  // Example: Scroll to top
  document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerText = "↑ Top";
    scrollBtn.className = "btn btn-success position-fixed";
    scrollBtn.style.bottom = "20px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.display = "none";
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
    document.body.appendChild(scrollBtn);
  
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });
  });
  