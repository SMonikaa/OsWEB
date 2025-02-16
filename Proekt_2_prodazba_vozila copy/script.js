
// Open and close modals with general functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Attach open functions to buttons
function openLoginModal() {
  openModal('loginModal');
  console.log('Login modal opened');
}

function openSignupModal() {
  openModal('signupModal');
  console.log('Signup modal opened');
}

function openCarModal() {
  openModal('carModal');
  console.log('Car modal opened');
}

// Close modals when clicking outside of them
window.onclick = function (event) {
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const carModal = document.getElementById('carModal');

  if (event.target === loginModal) {
    closeModal('loginModal');
  }
  if (event.target === signupModal) {
    closeModal('signupModal');
  }
  if (event.target === carModal) {
    closeModal('carModal');
  }
};

// Scrolling bar functionality
const scrollingBar = document.getElementById('scrollingBar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    scrollingBar.classList.add('hide');
  } else {
    scrollingBar.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});