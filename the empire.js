
// Search functionality
const searchInput = document.getElementById('searchInput');
const foodItems = document.querySelectorAll('.food-item');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    foodItems.forEach(item => {
        const itemName = item.querySelector('.item-name').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Dynamic menu display
const menuSection = document.querySelector('.menu-items');

const foodItemsData = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 5 },
    { name: 'Salad', price: 8 }
];

function displayFoodItems() {
    menuSection.innerHTML = '';
    foodItemsData.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <h3 class="item-name">${item.name}</h3>
            <p class="item-price">$${item.price}</p>
        `;
        menuSection.appendChild(foodItem);
    });
}

displayFoodItems();


