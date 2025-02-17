document.addEventListener("DOMContentLoaded", function() {
    function openModal(eventId) {
        document.getElementById(eventId).classList.remove("hidden");
    }

    function closeModal(eventId) {
        document.getElementById(eventId).classList.add("hidden");
    }

    // Expose functions to the global scope so they can be accessed in the HTML
    window.openModal = openModal;
    window.closeModal = closeModal;
});
