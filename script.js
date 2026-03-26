// Function to filter games based on categories
function filterGames(category) {
    const games = document.querySelectorAll('.game');
    games.forEach(game => {
        if (game.dataset.category === category || category === "all") {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}

// Search functionality for games
function searchGames() {
    const searchTerm = document.querySelector('#searchInput').value.toLowerCase();
    const games = document.querySelectorAll('.game');
    games.forEach(game => {
        const title = game.querySelector('.game-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}

// Function to launch a game in a new tab
function launchGame(gameUrl) {
    window.open(gameUrl, '_blank');
}

// Smooth animations for responsive interactions
const gameElements = document.querySelectorAll('.game');
gameElements.forEach(game => {
    game.addEventListener('mouseenter', () => {
        game.style.transition = "transform 0.2s";
        game.style.transform = "scale(1.05)";
    });

    game.addEventListener('mouseleave', () => {
        game.style.transform = "scale(1)";
    });
});

// Event listeners for search and filter
document.querySelector('#searchInput').addEventListener('input', searchGames);
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        filterGames(button.dataset.category);
    });
});
