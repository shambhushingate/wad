// Search functionality
const searchButton = document.querySelector('.search-box button');
searchButton.addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-box input').value;
    if (searchTerm.trim() !== '') {
        alert(`Searching for: "${searchTerm}"`);
        // In a real app, this would filter products or redirect to search results
    }
});

// Make table rows clickable
const tableRows = document.querySelectorAll('table tbody tr');
tableRows.forEach(row => {
    row.addEventListener('click', function() {
        const orderId = this.cells[0].textContent;
        alert(`Viewing details for order ${orderId}`);
        // In a real app, this would open an order details modal/page
    });
});

// Simple animation for cards
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
});

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);