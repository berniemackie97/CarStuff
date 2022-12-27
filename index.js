// Get the modal element
var modal = document.getElementById("carModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalButton");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Select the open modal button and the nav bar
const openModalButton = document.querySelector('[data-toggle="modal"]');
const navBar = document.querySelector('nav');

// Add an event listener to the open modal button that listens for a click event
openModalButton.addEventListener('click', () => {
  // Toggle the modal-open class on the nav bar
  navBar.classList.toggle('modal-open');
});

// Select the close modal button
const closeModalButton = document.querySelector('[data-dismiss="modal"]');

// Add an event listener to the close modal button that listens for a click event
closeModalButton.addEventListener('click', () => {
  // Toggle the modal-open class on the nav bar
  navBar.classList.toggle('modal-open');
});

