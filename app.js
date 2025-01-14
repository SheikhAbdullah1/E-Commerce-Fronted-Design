// // Countdown Timer Script
// // Set the date we're counting down to
// var countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// // Update the countdown every 1 second
// var x = setInterval(function () {
//   // Get current date and time
//   var now = new Date().getTime();

//   // Find the time remaining
//   var distance = countdownDate - now;

//   // Calculate days, hours, minutes, and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24)); // milliseconds * seconds * minutes * hours
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // milliseconds * seconds * minutes
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the countdown in the respective elements
//   document.getElementById("days").innerHTML = days + " <br>Days";
//   document.getElementById("hours").innerHTML = hours + " <br>Hours";
//   document.getElementById("minutes").innerHTML = minutes + " <br>Mins";
//   document.getElementById("seconds").innerHTML = seconds + " <br>Sec";

//   // If the countdown is over, display a message
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("days").innerHTML = "EXPIRED";
//     document.getElementById("hours").innerHTML = "";
//     document.getElementById("minutes").innerHTML = "";
//     document.getElementById("seconds").innerHTML = "";
//   }
// }, 1000);

// Parse URL parameters to get product or category details

// function getParams() {
//   const params = new URLSearchParams(window.location.search);
//   const data = {};
//   for (const [key, value] of params.entries()) {
//     data[key] = value;
//   }
//   return data;
// }

// // For categories.html: Navigate to product.html with category
// function navigateToProduct(category) {
//   window.location.href = `product.html?category=${category}`;
// }

// // For product.html: Handle product selection and navigate to cart.html
// function setupProductPage() {
//   const params = getParams();
//   const category = params.category || "Unknown";

//   // Display the category on the product page
//   const categoryElement = document.getElementById("category");
//   if (categoryElement) {
//     categoryElement.innerText = category;
//   }

//   // Handle "Order Now" button
//   const orderButton = document.getElementById("order-now");
//   if (orderButton) {
//     orderButton.addEventListener("click", () => {
//       const size = document.getElementById("size").value;
//       const color = document.getElementById("color").value;

//       // Redirect to cart.html with selected product details
//       const queryParams = `?category=${category}&size=${size}&color=${color}`;
//       window.location.href = `cart.html${queryParams}`;
//     });
//   }
// }

// // For cart.html: Display selected product details and calculate amount

// function setupCartPage() {
// const params = getParams();

// // Display selected product details
// const category = params.category || "N/A";
// const size = params.size || "N/A";
// const color = params.color || "N/A";

// document.getElementById("selected-category").innerText = category;
// document.getElementById("selected-size").innerText = size;
// document.getElementById("selected-color").innerText = color;

// // Example calculation: Random product price
// const pricePerItem = 1000; // Example price
// const quantity = 1; // Default quantity for now
// const totalAmount = pricePerItem * quantity;

// document.getElementById("total-amount").innerText = `Total: $${totalAmount}`;
// }

fetch("https://dummyjson.com/products/category-list")
  .then((res) => res.json()) // Convert the response to JSON
  .then((data) => {
    const categories = data; // Store the categories list
    const listContainer = document.getElementById("categories-list");

    // Loop through categories and append each to the list
    categories.forEach((category) => {
      const listItem = document.createElement("li");
      listItem.textContent = category; // Add category name to list item
      listContainer.appendChild(listItem); // Append item to list
    });
  })
  .catch((error) => console.error("Error:", error)); // Handle any errors
