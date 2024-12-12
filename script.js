document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        if (this.textContent.includes("Client")) {
            openModal("clientForm");
        } else if (this.textContent.includes("Pet Sitter")) {
            openModal("sitterForm");
        }
    });
});

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};
