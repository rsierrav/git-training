document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('pokemon-grid');

  // fetch() retrieves data from a network resource (the PokeAPI) and returns a Promise.
  async function loadPikachu() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
      if (!response.ok) throw new Error('Failed to fetch Pokémon data');
      const data = await response.json();

      const card = document.createElement('div');
      card.className = 'pokemon-card';
      card.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <h2>${data.name}</h2>
        <p>ID: ${data.id}</p>
      `;

      gridContainer.appendChild(card);
    } catch (error) {
      gridContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
  }

  loadPikachu();
});
