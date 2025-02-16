// Get Modal Elements
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open Modal Function
openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

// Close Modal Function
closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});
