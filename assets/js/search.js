document.getElementById("searchButton").addEventListener("click", function(e) {
    e.preventDefault();
    let searchInput = document.getElementById("searchInput").value.trim();
    let searchMessage = document.getElementById("searchMessage");

    if (searchInput) {
        searchMessage.textContent = `Você buscou por: ${searchInput}`;
        searchMessage.style.display = "block";
    } else {
        searchMessage.style.display = "none"; // Oculta se o input estiver vazio
    }
});
