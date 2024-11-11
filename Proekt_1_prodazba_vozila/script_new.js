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
};

document.addEventListener('DOMContentLoaded', function() {
  // Star rating functionality
  const stars = document.querySelectorAll('.stars i');
  let currentRating = 0;

  stars.forEach(star => {
      star.addEventListener('click', function() {
          const rating = parseInt(this.getAttribute('data-index'));
         
          // Remove active class from all stars
          stars.forEach(s => s.classList.remove('active'));
         
          // Add active class to clicked star and all before it
          stars.forEach(s => {
              if (parseInt(s.getAttribute('data-index')) <= rating) {
                  s.classList.add('active');
                  s.style.color = '#ffd700'; // Gold color for active stars
              }
          });
         
          currentRating = rating;
      });

      // Add hover effects for stars
      star.addEventListener('mouseenter', function() {
          const rating = parseInt(this.getAttribute('data-index'));
         
          // Only show hover effect for unrated or current hover
          stars.forEach(s => {
              const index = parseInt(s.getAttribute('data-index'));
              if (index <= rating) {
                  s.style.color = '#ffd700';
              }
          });
      });

      star.addEventListener('mouseleave', function() {
          // Reset to current rating state
          stars.forEach((s, index) => {
              if (index < currentRating) {
                  s.style.color = '#ffd700';
              } else {
                  s.style.color = '#ccc';
              }
          });
      });
  });

  // Simplified heart functionality
  const heart = document.querySelector('.heart i');
  let isLiked = false;
 
  // Initialize heart color to gray
  heart.style.color = '#ccc';

  // Click handler for heart
  heart.addEventListener('click', function() {
      isLiked = !isLiked;
      this.style.color = isLiked ? '#ff4136' : '#ccc'; // Toggle between red and gray
  });
});