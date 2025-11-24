const search = document.getElementById("search");
const cards = document.querySelectorAll(".section-card");

search.addEventListener("input", () => {
    let value = search.value.toLowerCase();

    cards.forEach(card => {
        let name = card.textContent.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
});
