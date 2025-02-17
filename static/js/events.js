// Wait until the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all the "Details" buttons
    const detailsButtons = document.querySelectorAll('.details-btn');
    
    // Get the popup elements
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const popupImg = document.getElementById('popup-img');
    const popupDetails = document.getElementById('popup-details');
    const popupRounds = document.getElementById('popup-rounds');
    const popupTeamMembers = document.getElementById('popup-team-members');
    const popupPrice = document.getElementById('popup-price');
    const popupCoordinator = document.getElementById('popup-coordinator');
    const popupName = document.getElementById('event-name');
    
    // Event listener for each Details button
    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event');
            
            // Fetch event data based on the eventId (this can be fetched from an API or hardcoded)
            // Below is an example of hardcoded data:
            const eventDetails = getEventDetails(eventId);
            
            // Update the popup content with the event details
            popupName.textContent = eventDetails.name;
            popupImg.src = eventDetails.image;
            popupDetails.textContent = eventDetails.description;
            popupRounds.textContent = `Rounds: ${eventDetails.rounds}`;
            popupTeamMembers.textContent = `Team Members: ${eventDetails.teamMembers}`;
            popupPrice.textContent = `Price: $${eventDetails.price}`;
            popupCoordinator.textContent = `Coordinator: ${eventDetails.coordinator}`;
            
            // Show the popup
            popup.classList.remove('hidden');
        });
    });
    
    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', function() {
        popup.classList.add('hidden');
    });
});

// Example function to get event details by eventId
function getEventDetails(eventId) {
    // This would normally fetch data from a server, but here's a basic example:
    const eventData = {
        1: {
            name: "Tech Savvy Quiz",
            description: "Participants will compete with their IoT-based line-tracing car & the one to reach the end.",
            image: "static/assets/bgmi_banner.png",
            rounds: 3,
            teamMembers: 4,
            price: 50,
            coordinator: "John Doe"
        },
        2: {
            name: "Valorant Clash",
            description: "Participants will compete in a solo Valorant tournament.",
            image: "https://via.placeholder.com/600x300",
            rounds: 5,
            teamMembers: 1,
            price: 100,
            coordinator: "Jane Smith"
        },
        3: {
            name: "IoT Showdown",
            description: "Tech teams will battle it out with their innovative IoT projects.",
            image: "https://via.placeholder.com/600x300",
            rounds: 4,
            teamMembers: 3,
            price: 150,
            coordinator: "Alice Johnson"
        },
        // Add more events as needed...
    };
    
    return eventData[eventId] || {
        name: "Unknown Event",
        description: "No details available.",
        image: "https://via.placeholder.com/600x300",
        rounds: 0,
        teamMembers: 0,
        price: 0,
        coordinator: "Unknown"
    };
}
