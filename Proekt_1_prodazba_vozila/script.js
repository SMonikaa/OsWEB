// Get the scrolling bar element
const scrollingBar = document.getElementById('scrollingBar');

// Track scroll position
let lastScrollTop = 0;

// Toggle the visibility of the scrolling bar on scroll
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  // If scrolling down, hide the bar; if scrolling up, show it
  if (currentScroll > lastScrollTop) {
    scrollingBar.classList.add('hide');
  } else {
    scrollingBar.classList.remove('hide');
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});

// Open and close modals with general functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Attach open functions to buttons
function openLoginModal() {
  openModal('loginModal');
  console.log("hi")
}

function openSignupModal() {
  openModal('signupModal');
}
function openCarModal() {
  openModal('carModal');
}

// Close modals when clicking outside of them
window.onclick = function(event) {
  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");

  if (event.target === loginModal) {
    closeModal('loginModal');
  }
  if (event.target === signupModal) {
    closeModal('signupModal');
  }
  if(event.target == carModal){
    closeModal('carModal');
  }
};

function updateYearRange() {
  var slider = document.getElementById("year-slider");
  var yearMin = document.getElementById("year-min");
  var yearMax = document.getElementById("year-max");
  yearMin.textContent = slider.value;
  yearMax.textContent = slider.value;
}

// Function to reset the year filter
function resetYearFilter() {
  var slider = document.getElementById("year-slider");
  slider.value = 1900;
  updateYearRange();
} 1