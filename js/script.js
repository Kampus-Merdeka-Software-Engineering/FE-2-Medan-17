function navigate(sectionId) {
    // scroll to a certain section
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

//navigate shop now 
function navigateToOurProducts() {
  // Use window.location.href to navigate to the desired section
  window.location.href = 'index.html#our-products';
}
//navigate to footer
function navigateToFooter() {
  // Use window.location.href to navigate to the desired section
  window.location.href = 'index.html#footer';
}

// lightbox image gallery
document.addEventListener('DOMContentLoaded', function () {
  let currentImageIndex = 0;
  const galleryLinks = document.querySelectorAll('#gallery ul li a');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-content');
  const closeButton = document.querySelector('.close-btn');
  const leftButton = document.querySelector('.nav-btn.left');
  const rightButton = document.querySelector('.nav-btn.right');

  function openLightbox(imageSrc, index) {
      lightboxContent.innerHTML = `<img src="${imageSrc}" alt="Enlarged Image" class="enlarged-image">`;
      lightbox.style.display = 'block';
      currentImageIndex = index;
  }

  function closeLightbox() {
      lightbox.style.display = 'none';
  }

  function navigateImage(direction) {
      currentImageIndex = (currentImageIndex + direction + galleryLinks.length) % galleryLinks.length;
      openLightbox(galleryLinks[currentImageIndex].href, currentImageIndex);
  }

  // Add click event listeners to each image link
  galleryLinks.forEach((link, index) => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          openLightbox(link.href, index);
      });
  });

  // Add click event listeners for close and navigation buttons
  closeButton.addEventListener('click', closeLightbox);
  leftButton.addEventListener('click', () => navigateImage(-1));
  rightButton.addEventListener('click', () => navigateImage(1));

  // Add keyboard navigation using left and right arrow keys
  document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
          closeLightbox();
      } else if (event.key === 'ArrowLeft') {
          navigateImage(-1);
      } else if (event.key === 'ArrowRight') {
          navigateImage(1);
      }
  });

  // Add click event listener to the enlarged image for closing
  lightboxContent.addEventListener('click', closeLightbox);
});

// validate contact us form
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === '') {
    displayError('name-error');
    return false;
  }

  if (email === '' || !isValidEmail(email)) {
    displayError('email-error');
    return false;
  }

  if (message === '') {
    displayError('message-error');
    return false;
  }

  // If all validations pass, you can submit the form
  return true;
}

function isValidEmail(email) {
  // You can implement a more sophisticated email validation if needed
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function fillInput(inputId) {
  // You can implement this function if needed
}

function displayError(errorId, message) {
  var errorElement = document.getElementById(errorId);
  errorElement.style.display = 'block';
  errorElement.innerText = message;
}













// go to the cart page

function redirectToBuyForm() {
  window.location.href = 'cart.html';
}

//cart


const product = [
  {
    id: 0,
    image: 'assets/images/product1.png',
    title: 'Strawberry Cheesecake',
    price: 12,
},
{
    id: 1,
    image: 'assets/images/product2.png',
    title: 'Chocolate Cake',
    price: 11,
},
{
    id: 2,
    image: 'assets/images/product3.png',
    title: 'Lemon Meringue Cake',
    price: 16,
},
{
    id: 3,
    image: 'assets/images/product4.png',
    title: 'Blueberry Cake',
    price: 12,
},
{
  id: 4,
    image: 'assets/images/product5.png',
    title: 'Apple Pie',
    price: 13,
},
{
  id: 5,
    image: 'assets/images/product6.png',
    title: 'Pumpkin Pie',
    price: 17,
},
{
  id: 6,
    image: 'assets/images/product7.png',
    title: 'Peacan Pie',
    price: 16,
},
{
  id: 7,
    image: 'assets/images/product8.png',
    title: 'Cranberry Pie',
    price: 15,
},
{
  id: 8,
    image: 'assets/images/product9.png',
    title: 'Classic Cookie',
    price: 5,
},
{
  id: 9,
    image: 'assets/images/product10.png',
    title: 'Oreo Cookie',
    price: 7,
},
{
  id: 10,
    image: 'assets/images/product11.png',
    title: 'Fruity Pebbles Cookie',
    price: 5,
},
{
id: 11,
image: 'assets/images/product12.png',
title: 'Double Choco Smores',
price: 7,
},
{
id: 12,
image: 'assets/images/product13.png',
title: 'Unicorn Cupcake',
price: 6,
},
{
id: 13,
image: 'assets/images/product14.png',
title: 'Gingerbread',
price: 5,
},
{
id: 14,
image: 'assets/images/product15.png',
title: 'X-mas Tart',
price: 20,
},
{
id: 15,
image: 'assets/images/product16.png',
title: 'X-mas Cupcakes',
price: 25,
}
];

const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>$ ${price}.00</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
      `</div>
      </div>`
  )
}).join('')

const cart = [];

function addtocart(a) {
  const existingProductIndex = cart.findIndex((item) => item.id === categories[a].id);

  if (existingProductIndex !== -1) {
    // Product already in the cart, increment quantity
    cart[existingProductIndex].quantity++;
  } else {
    // Product not in the cart, add with quantity 1
    cart.push({ ...categories[a], quantity: 1 });
  }

  displaycart();
}


function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function incrementQuantity(index) {
  cart[index].quantity++;
  displaycart();
}

function decrementQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    // If quantity is 1, remove the item from the cart
    cart.splice(index, 1);
  }
  displaycart();
}

function displaycart() {
  let total = 0;
  document.getElementById("count").innerHTML = cart.length;

  const cartItemsHTML = cart.map((items, j) => {
    var { image, title, price, quantity } = items;
    total += price * quantity;

    // Update the quantity beside the cart icon
    const quantityElementId = `quantity-${j}`;
    return (
      `<div class='cart-item'>
        <div class='row-img'>
          <img class='rowimg' src=${image}>
        </div>
        <p style='font-size:12px;'>${title}</p>
        <div>
          <button onclick='decrementQuantity(${j})'>-</button>
          <span id="${quantityElementId}">${quantity}</span>
          <button onclick='incrementQuantity(${j})'>+</button>
        </div>
        <h2 style='font-size: 15px;'>$ ${(price * quantity).toFixed(2)}</h2>` +
      `<i class='fa-solid fa-trash' onclick='delElement(${j})'></i></div>`
    );
  });

  document.getElementById("cartItem").innerHTML = cartItemsHTML.join('');
  document.getElementById("total").innerHTML = `$ ${total.toFixed(2)}`;
}

// button see more product to go cart 
function navigate(destination, sectionId) {
 
  window.location.href = destination ;
}

// to main page
function goBack() {
  // Navigate back to the index.html page
  window.location.href = 'index.html#our-products';
}

// to buy page 
function goToBuyPage() {
  // Check if the cart is empty
  if (cart.length === 0) {
    alert("Please add items to your cart before proceeding to buy.");
  } else {


    // Proceed to the buy page
  window.location.href = 'buy.html';
}
}

// to main page
function goBackCart() {
  // Navigate back to the cart.html page
  window.location.href = 'cart.html';
}

// order details validation


  function validateBillingAddress() {
    var fullName = document.querySelector('input[name="fullName"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var address = document.querySelector('input[name="address"]').value;
    var city = document.querySelector('input[name="city"]').value;
    var state = document.querySelector('input[name="state"]').value;
    var zipCode = document.querySelector('input[name="zipCode"]').value;

    // Check if any of the fields are empty
    if (!fullName || !email || !address || !city || !state || !zipCode) {
      alert('Please fill in all billing address fields.');
      return false;
    }

    return true;
  }

  function validatePaymentForm() {
    var paymentType = document.querySelector('input[name="paymentType"]:checked');
    var ewalletNumber = document.querySelector('input[name="ewalletNumber"]').value;

    // Check if payment type is selected
    if (!paymentType) {
      alert('Please select a payment type.');
      return false;
    }

    // Check if e-wallet number is provided
    if (ewalletNumber.trim() === '') {
      alert('Please enter your e-wallet number.');
      return false;
    }

    // You can add more specific validation for the e-wallet number if needed

    return true;
  }

  function validateForm() {
    return validateBillingAddress() && validatePaymentForm();
  }

  function proceedToCheckout() {
    if (validateForm()) {
      // Form is valid, show success message and proceed
      alert('Checkout successful!');
      // Add code to redirect to the next page or perform further actions
    } else {
      // Form is not valid, show error message
      alert('Please complete your form.');
    }
  }



 








