// Landmark data
const landmarks = {
    ganapati: {
        title: "Ganapati Ghat Wai",
        description: "A beautiful riverside ghat with a prominent Ganesh temple, known for its spiritual significance and scenic views.",
        image: "https://example.com/ganapati.jpg" // Replace with actual image URL
    },
    kashi: {
        title: "Kashi Vishweshwar Temple",
        description: "An ancient Shiva temple often compared to Varanasi's Kashi Vishwanath, with exquisite architecture.",
        image: "https://example.com/kashi.jpg"
    },
    menawali: {
        title: "Menawali Ghat",
        description: "A picturesque ghat along the Krishna river, famous for its stone steps and peaceful atmosphere.",
        image: "https://example.com/menawali.jpg"
    },
    dhom: {
        title: "Dhom Dam",
        description: "A large dam on Krishna river offering breathtaking views and a popular spot for picnics.",
        image: "https://example.com/dhom.jpg"
    },
    mahableshwar: {
        title: "Mahableshwar",
        description: "Not to be confused with the hill station, this is a sacred site with ancient temples in WAI.",
        image: "https://example.com/mahableshwar.jpg"
    }
};

// Get the modal element
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");

// Get all buttons and add click event
const buttons = document.querySelectorAll("button[data-landmark]");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const landmarkId = this.getAttribute("data-landmark");
        showLandmark(landmarkId);
    });
});

// Close modal when clicking X
document.querySelector(".close").addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Function to show landmark details
function showLandmark(landmarkId) {
    const landmark = landmarks[landmarkId];
    
    modalTitle.textContent = landmark.title;
    modalContent.innerHTML = `
        <img src="${landmark.image}" alt="${landmark.title}" style="max-width:100%; height:auto; margin-bottom:15px;">
        <p>${landmark.description}</p>
    `;
    
    modal.style.display = "block";
}