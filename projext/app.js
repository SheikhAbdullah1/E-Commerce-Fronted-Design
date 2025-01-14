// // fetch("https://dummyjson.com/products/category-list")
// // fetch("fetch('https://dummyjson.com/products/1")
// //   .then((response) => response.json())
// //   .then((data) => {
// //     const categoriesList = document.getElementById("categories-list");
// //     const categoryImages = {
// //       Electronics: "../images/images/Casual_court_men.png",
// //     };

// //     data.forEach((category) => {
// //       const listItem = document.createElement("li");
// //       const categoryImage =
// //         categoryImages[category] || "http://via.placeholder.com/100x100"; // Placeholder image if not found

// //       const imgElement = document.createElement("img");
// //       imgElement.src = categoryImage;
// //       imgElement.alt = category;
// //       imgElement.style = "width: 50px; height: 50px; margin: 5px;";

// //       listItem.appendChild(imgElement);
// //       categoriesList.appendChild(listItem);
// //     });
// //   })
// //   .catch((error) => console.error("Error fetching categories:", error));

// // fetch("https://dummyjson.com/products/featured")
// //   .then((response) => response.json())
// //   .then((data) => {
// //     const featuredProductsList = document.getElementById("featured-products-list");

// //     data.forEach((product) => {
// //       const productCard = document.createElement("div");
// //       productCard.className = "col-md-3 mb-4";

// //       productCard.innerHTML = `
// //         <div class="card h-100">
// //           <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
// //           <div class="card-body">
// //             <h5 class="card-title">${product.title}</h5>
// //             <p class="card-text">${product.description}</p>
// //             <p class="card-text"><strong>$${product.price}</strong></p>
// //           </div>
// //         </div>
// //       `;

// //       featuredProductsList.appendChild(productCard);
// //     });
// //   })
// //   .catch((error) => console.error("Error fetching featured products:", error));

// // fetch('https://dummyjson.com/products')
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log(data);
// //     // Use data to populate your e-commerce site
// //   })
// //   .catch(error => console.error('Error fetching products:', error));

// // Fetch data from API
// fetch('https://dummyjson.com/products')
//   .then(response => response.json())  // Parse the JSON response
//   .then(data => {
//     // Get the product images from the response
//     data.products.forEach(product => {
//       console.log('Product Name:', product.name);  // Display product name
//       console.log('Product Image:', product.image);  // Display image URL

//       // Create an image element to display on the page
//       const imgElement = document.createElement('img');
//       imgElement.src = product.image;
//       imgElement.alt = product.name;
//       imgElement.style.width = '200px';  // You can adjust the size as needed

//       // Append the image to a container on your page
//       const container = document.getElementById('products-container');
//       container.appendChild(imgElement);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching product data:', error);
//   });
