document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const gridContainer = document.getElementById('pokemon-grid');
  let allPokemon = [];

  // TODO: Issue #1 - Fetch first 20 Pokémon from PokeAPI
  // Endpoint: https://pokeapi.co/api/v2/pokemon?limit=20
  // Store results in allPokemon

  // TODO: Issue #2 - Render Pokémon cards to the DOM
  // Create .pokemon-card elements with image, name, and id
  // Append to gridContainer

  // TODO: Issue #3 - Implement search/filter functionality
  // Listen to 'input' event on searchInput
  // Filter allPokemon and re-render grid

  console.log('Pixeldex initialized. Ready for git issues.');
});
