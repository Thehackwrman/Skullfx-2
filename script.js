const searchBar = document.getElementById("searchBar");
const container = document.getElementById("sectionsContainer");
const sections = Array.from(document.getElementsByClassName("section"));

searchBar.addEventListener("input", () => {
    const search = searchBar.value.toLowerCase();

    // Sort: match first
    const sorted = sections.sort((a, b) => {
        const aMatch = a.dataset.name.toLowerCase().includes(search);
        const bMatch = b.dataset.name.toLowerCase().includes(search);

        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
        return 0;
    });

    // Clear container
    container.innerHTML = "";

    // Put sorted items back
    sorted.forEach(sec => container.appendChild(sec));
});
