// Property Data
const properties = [
    {
        id: 1,
        title: "Modern Villa",
        address: "123 Green Street, Beverly Hills",
        price: "$1,250,000",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        agent: "John Smith"
    },
    {
        id: 2,
        title: "Luxury Apartment",
        address: "456 Downtown Avenue, New York",
        price: "$850,000",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        agent: "Sarah Johnson"
    },
    {
        id: 3,
        title: "Country House",
        address: "789 Rural Road, Austin",
        price: "$950,000",
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        agent: "Mike Brown"
    }
];

// Load properties
document.addEventListener('DOMContentLoaded', function() {
    const propertiesContainer = document.getElementById('properties');
    
    properties.forEach(property => {
        propertiesContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card property-card">
                    <img src="${property.image}" class="card-img-top" alt="${property.title}">
                    <div class="card-body">
                        <h5 class="card-title">${property.title}</h5>
                        <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${property.address}</p>
                        <p class="price">${property.price}</p>
                        <button class="btn btn-primary" onclick="contactAgent('${property.agent}')">
                            <i class="fas fa-phone"></i> Contact Agent
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
});

// Contact functions
function showContact() {
    alert("📞 Call us at: (555) 123-4567\n✉ Email: info@dreamhomes.com");
}

function contactAgent(agentName) {
    alert(`Contact ${agentName} at:\n📞 (555) 987-6543\n✉ ${agentName.toLowerCase().replace(' ', '.')}@dreamhomes.com`);
}