// Event listener for any "Details" button
document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', function () {
        const eventId = this.getAttribute('data-event');
        openPopup(eventId);
    });
});

// Open popup with the event details
function openPopup(eventId) {
    // Show the popup
    document.getElementById('popup').classList.remove('hidden');

    // Customize the content based on the eventId
    let eventDetails, eventImage, eventTitle;

    if (eventId === '1') {
        eventDetails = 'Participants will compete with their IoT-based line-tracing car & the one to reach the end...';
        eventImage = 'https://via.placeholder.com/600x300'; // Add a relevant image URL
        eventTitle = 'Tech Savvy Quiz';
    } else if (eventId === '2') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Valorant Clash';
    } else if (eventId === '3') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Escape Room';
    } else if (eventId === '4') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Reel It';
    } else if (eventId === '5') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Code Sprint';
    } else if (eventId === '6') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Idea Fusion';
    } else if (eventId === '7') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'QR Quest';
    } else if (eventId === '8') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'AI Prompt Battle';
    } else if (eventId === '9') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'BGMI';
    } else if (eventId === '10') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Clash of Minds';
    } else if (eventId === '11') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Trace X';
    } else if (eventId === '12') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Craft n Create';
    } else if (eventId === '13') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Cad Genesis';
    } else if (eventId === '14') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Robo Race';
    } else if (eventId === '15') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Obstacle Blitz';
    } else if (eventId === '16') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Tech Arena';
    } else if (eventId === '17') {
        eventDetails = 'This is the second event. Compete in tech challenges with your IoT device!';
        eventImage = 'https://via.placeholder.com/600x300'; // Another image URL
        eventTitle = 'Startup Mania';
    } else {
        eventDetails = 'No details available for this event';
        eventImage = 'https://via.placeholder.com/600x300';
        eventTitle = 'Event Details';
    }

    // Set dynamic content for the popup
    document.getElementById('popup-title').textContent = eventTitle;
    document.getElementById('popup-img').src = eventImage;
    document.getElementById('popup-details').textContent = eventDetails;
}

// Event listener for the "Close" button in the popup
document.getElementById('close-btn').addEventListener('click', function () {
    // Hide the popup
    document.getElementById('popup').classList.add('hidden');
});
