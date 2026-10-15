# 📋 Student Issues - PixelDex

This document contains five beginner-friendly GitHub issues for practicing Git, GitHub, and web development with the PixelDex Pokémon app.

---

## 1. Customize the PixelDex header and colors

**Difficulty:** Easy  
**Branch:** `feature/customize-header`

### Description
The current header uses a basic color scheme and lacks visual flair. Customize the header with your own theme colors and add a fun pixel art-inspired design. Update the color palette in `style.css` and add personal touches to the header in `index.html`.

### Files Involved
- `index.html` (header section)
- `style.css` (CSS variables and header styles)

### Learning Objective
Learn how to modify CSS variables, update HTML structure, and understand the relationship between HTML and CSS for visual customization.

### Acceptance Criteria
- [ ] Header has a unique visual style (e.g., gradient background, custom border, animated element)
- [ ] All color variables in `:root` have been updated with a new theme
- [ ] The Pokémon logo/text is still visible and readable
- [ ] No existing functionality is broken

### Testing Instructions
1. Open the app in your browser
2. Verify the header has your custom colors and styling
3. Check that the text is readable
4. Ensure hover effects and transitions still work

### Suggested Branch Name
`feature/customize-header`

### Optional Hint
Try using a CSS gradient for the header background or add a subtle shadow. Remember to update all color references in CSS to match your new theme!

---

## 2. Display a different Pokémon using PokéAPI

**Difficulty:** Easy  
**Branch:** `feature/display-different-pokemon`

### Description
The app currently displays only Pikachu. Modify `script.js` to fetch and display a different Pokémon (e.g., "charmander", "bulbasaur", "squirtle", or "eevee") instead of Pikachu.

### Files Involved
- `script.js` (change the Pokémon name in the fetch URL)

### Learning Objective
Learn how to modify a fetch URL to retrieve different data from the same API endpoint, and understand how API responses work.

### Acceptance Criteria
- [ ] The app displays a Pokémon other than Pikachu
- [ ] The Pokémon card shows the correct image, name, and ID
- [ ] The Pokémon name is properly capitalized in the display
- [ ] No errors appear in the browser console

### Testing Instructions
1. Open the app in your browser
2. Check that the displayed Pokémon matches your chosen Pokémon
3. Verify the image URL is correct and loads properly
4. Open the browser console (F12) to ensure no errors

### Suggested Branch Name
`feature/display-different-pokemon`

### Optional Hint
The PokeAPI URL format is `https://pokeapi.co/api/v2/pokemon/[name]`. Replace "pikachu" with your chosen Pokémon's name (all lowercase).

---

## 3. Fetch and display the first 20 Pokémon

**Difficulty:** Medium  
**Branch:** `feature/first-20-pokemon`

### Description
Currently, the app fetches only one Pokémon. Modify `script.js` to fetch the first 20 Pokémon from the PokéAPI and display them in a grid. You'll need to use the `limit` and `offset` query parameters or the list endpoint.

### Files Involved
- `script.js` (modify to fetch multiple Pokémon and loop through results)

### Learning Objective
Learn how to work with API lists/pagination, iterate over arrays, and dynamically create multiple DOM elements.

### Acceptance Criteria
- [ ] The app displays the first 20 Pokémon in a grid layout
- [ ] Each Pokémon card shows the image, name, and ID
- [ ] Cards are properly spaced and responsive
- [ ] The app handles the larger dataset without errors

### Testing Instructions
1. Open the app in your browser
2. Count the number of Pokémon cards displayed (should be 20)
3. Verify each card shows the correct Pokémon data
4. Resize the browser window to test responsive grid layout

### Suggested Branch Name
`feature/first-20-pokemon`

### Optional Hint
PokeAPI has a list endpoint at `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`. You'll need to loop through the results array and create a card for each Pokémon.

---

## 4. Implement Pokémon search by name

**Difficulty:** Medium  
**Branch:** `feature/search-pokemon`

### Description
The search input field exists but doesn't work yet. Implement search functionality in `script.js` so users can type a Pokémon name and see matching results from the first 20 Pokémon. The search should be case-insensitive and filter dynamically as the user types.

### Files Involved
- `script.js` (add event listener and filtering logic)
- `index.html` (optional: add a "Clear" button or reset functionality)

### Learning Objective
Learn how to add event listeners, implement search/filter logic, and manipulate the DOM dynamically based on user input.

### Acceptance Criteria
- [ ] Typing in the search box filters Pokémon by name
- [ ] Search is case-insensitive (e.g., "PIKACHU" matches "pikachu")
- [ ] Results update in real-time as the user types
- [ ] Clearing the search shows all Pokémon again
- [ ] No results show "No Pokémon found" message

### Testing Instructions
1. Open the app in your browser
2. Type "pika" and verify Pikachu appears
3. Type "char" and verify Charmander appears
4. Type "XYZ" (non-existent) and verify "No Pokémon found" shows
5. Clear the search box and verify all Pokémon display again

### Suggested Branch Name
`feature/search-pokemon`

### Optional Hint
Use the `input` event listener on the search field. Create a `filterPokemon()` function that checks if each Pokémon's name includes the search term using `.toLowerCase()`.

---

## 5. Improve API error handling and user feedback

**Difficulty:** Medium  
**Branch:** `feature/improve-error-handling`

### Description
The current error handling is basic (just displays an error message). Improve the error handling by:
- Adding a loading state while fetching data
- Displaying specific error messages for different failure scenarios (network error, Pokémon not found, API timeout)
- Adding retry functionality for failed requests
- Implementing a timeout for fetch requests

### Files Involved
- `script.js` (enhanced error handling and loading states)

### Learning Objective
Learn best practices for API error handling, user feedback patterns, and handling asynchronous operations with proper states.

### Acceptance Criteria
- [ ] A loading spinner or message appears while data is being fetched
- [ ] Different error messages for different failure scenarios (e.g., "Network error", "Pokémon not found", "Server error")
- [ ] A "Try Again" button appears when requests fail
- [ ] Fetch requests timeout after 10 seconds with an appropriate message
- [ ] Loading state is removed once data loads or fails

### Testing Instructions
1. Open the app in your browser
2. Check that a loading indicator appears briefly
3. Disconnect your network and verify a proper error message appears
4. Click "Try Again" and verify it retries the request
5. Open DevTools → Network tab and throttle to "Slow 3G" to test timeout behavior

### Suggested Branch Name
`feature/improve-error-handling`

### Optional Hint
Create helper functions: `showLoading()`, `showError(message)`, `hideLoading()`. Use `Promise.race()` with `setTimeout` to implement fetch timeouts.

---

## 🎯 Getting Started with Issues

1. Create a new branch from `main` using the suggested branch name
2. Make your changes
3. Test locally using a local server (e.g., `python -m http.server 8000`)
4. Commit your changes with descriptive messages
5. Push the branch and open a pull request (when using GitHub)

**Remember:** Small, frequent commits are better than one large commit!
