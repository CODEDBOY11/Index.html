// Food data (replace this with your list of food items)
const foodItems = [
    { name: "Pizza", imageUrl: "https://img.freepik.com/free-photo/top-view-pizza-with-red-pepper-tomato-sauce-with-copy-space_23-2148765350.jpg?w=360&t=st=1693614805~exp=1693615405~hmac=832e9413a8bdcc6c44f439482325009ce93c22374679b48ba9c2cf40a61d4f42" },
    { name: "Burger", imageUrl:"https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=360&t=st=1693615515~exp=1693616115~hmac=05e20751f4e112be5db7515b977c7c18b6fb7672c702cfba7afbc4eb8b5bffa6"},
    { name: "Salad", imageUrl:"https://img.freepik.com/free-photo/top-view-homemade-delicious-salad-with-many-ingredients-plate-black-green-mix-colors-background_179666-20005.jpg?w=360&t=st=1693615692~exp=1693616292~hmac=3ce85e97333aab77e4b610da2308b0af91f3b5f0fcf31d4ab26d8ad9c9b29ea0"},
    { name: "Sushi", imageUrl: "sushi.jpg" },
    { name: "Ice Cream", imageUrl: "icecream.jpg" }
];

// Function to perform the search
function searchFood() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('results');

    // Filter food items based on the search term
    const matchingItems = foodItems.filter(item => item.name.toLowerCase().includes(searchTerm));

    // Display the results
    if (matchingItems.length > 0) {
        const resultList = matchingItems.map(item => `
            <div class="food-item">
                <img src="${item.imageUrl}" alt="${item.name}">
                <p>${item.name}</p>
            </div>
        `).join('');
        results.innerHTML = `<h2>Search Results:</h2><div class="food-items">${resultList}</div>`;
    } else {
        results.innerHTML = '<p>No matching food items found.</p>';
    }
}

// Attach the search function to the button click event
document.getElementById('searchButton').addEventListener('click', searchFood);