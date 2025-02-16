$(document).ready(function() {
  // Modal functions
  function openModal(modalId) {
      $(`#${modalId}`).css('display', 'flex');
  }

  function closeModal(modalId) {
      $(`#${modalId}`).css('display', 'none');
  }

  // Modal open button handlers
  $('.login').on('click', function(e) {
      e.preventDefault();
      openModal('loginModal');
  });

  $('.signup').on('click', function(e) {
      e.preventDefault();
      openModal('signupModal');
  });

  $('.test-drive').on('click', function(e) {
      e.preventDefault();
      openModal('carModal');
  });

  // Close modal when clicking outside
  $(window).on('click', function(event) {
      if ($(event.target).hasClass('modal')) {
          closeModal($(event.target).attr('id'));
      }
  });

  // Star rating functionality
  let currentRating = 0;
  const $stars = $('.stars i');

  $stars.on({
      // Click handler
      click: function() {
          const rating = parseInt($(this).data('index'));
          
          // Remove active class and reset colors
          $stars.removeClass('active').css('color', '#ccc');
          
          // Add active class and set color for selected stars
          $stars.filter(function() {
              return parseInt($(this).data('index')) <= rating;
          }).addClass('active').css('color', '#ffd700');
          
          currentRating = rating;
      },
      
      // Hover enter handler
      mouseenter: function() {
          const rating = parseInt($(this).data('index'));
          
          $stars.filter(function() {
              return parseInt($(this).data('index')) <= rating;
          }).css('color', '#ffd700');
      },
      
      // Hover leave handler
      mouseleave: function() {
          $stars.each(function(index) {
              $(this).css('color', index < currentRating ? '#ffd700' : '#ccc');
          });
      }
  });

  // Heart functionality
  const $heart = $('.heart i');
  let isLiked = false;

  // Initialize heart color
  $heart.css('color', '#ccc');

  // Heart click handler
  $heart.on('click', function() {
      isLiked = !isLiked;
      $(this).css('color', isLiked ? '#ff4136' : '#ccc');
  });

  // Comment functionality
  const $commentForm = $('#commentForm');
  const $commentInput = $('#commentInput');
  const $commentsContainer = $('#commentsContainer');

  // Submit comment handler
  $commentForm.on('submit', function(e) {
      e.preventDefault();
      const commentText = $commentInput.val().trim();

      if (commentText) {
          // Create a new comment element
          const $newComment = $('<div class="comment"></div>');
          $newComment.text(commentText);

          // Add a delete button to the comment
          const $deleteButton = $('<button class="delete-comment">Delete</button>');
          $deleteButton.on('click', function() {
              $newComment.remove(); // Remove the comment when delete button is clicked
          });

          // Append the delete button to the comment
          $newComment.append($deleteButton);

          // Append the new comment to the comments container
          $commentsContainer.append($newComment);

          // Clear the input field
          $commentInput.val('');
      }
  });
});