// Display a welcome message in the console
console.log("Welcome to My Website!");

// Add a button click handler
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("click", () => {
            alert(`You clicked on ${section.querySelector("h2").textContent}`);
        });
    });
});
