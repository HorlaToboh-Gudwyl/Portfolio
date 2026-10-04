// STEP 1: Create toy objects
const toys = [
    {
        id: 1,
        name: "Teddy Bear",
        emoji: "🧸",
        price: 15
    },
    {
        id: 2,
        name: "Racing Car",
        emoji: "🏎️",
        price: 20
    },
    {
        id: 3,
        name: "Robot",
        emoji: "🤖",
        price: 25
    },
    {
        id: 4,
        name: "Soccer Ball",
        emoji: "⚽",
        price: 12
    },
    {
        id: 5,
        name: "Puzzle",
        emoji: "🧩",
        price: 10
    },
    {
        id: 6,
        name: "Doll",
        emoji: "🪆",
        price: 18
    }
];

// STEP 2: Create an empty cart array
let cart = [];

// STEP 3: Function to display toys on the page
function displayToys() {
    const toyList = document.getElementById("toy-list");

    // Clear the list first
    toyList.innerHTML = "";

    // Loop through each toy
    toys.forEach(function(toy) {

        // Create toy card
        const toyCard = document.createElement("div");
        toyCard.className = "toy-card";

        toyCard.innerHTML = `
            <div class="toy-emoji">${toy.emoji}</div>
            <div class="toy-name">${toy.name}</div>
            <div class="toy-price">$${toy.price}</div>
            <button onclick="addToCart(${toy.id})">Add to Cart</button>
        `;

        toyList.appendChild(toyCard);
    });
}

// STEP 4: Add toy to cart
function addToCart(toyId) {
    const toy = toys.find(function(toy) {
        return toy.id === toyId;
    });

    cart.push(toy);

    console.log("Cart:", cart);
}

// STEP 5: Display toys when the page loads
displayToys();