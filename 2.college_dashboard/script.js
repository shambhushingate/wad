// Simple interactive features
document.querySelector('button').addEventListener('click', function() {
    const searchTerm = document.querySelector('input').value;
    alert(`You searched for: ${searchTerm}`);
});

// Update student count randomly for demo
setInterval(() => {
    const count = Math.floor(Math.random() * 50) + 1200;
    document.getElementById('student-count').textContent = count.toLocaleString();
}, 3000);

// Add new announcement
const announcements = document.getElementById('announcement-list');
setTimeout(() => {
    const newItem = document.createElement('li');
    newItem.textContent = "New: Exam Admit cards are available at office";
    announcements.prepend(newItem);
}, 5000);