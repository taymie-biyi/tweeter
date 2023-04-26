$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').keyup(function() {
    const maxLength = 140;
    let count = $(this).val().length;
    const charCount = maxLength - count;
    const counter = $(this).parent()[0][2];
    $(counter).text(charCount)

    if (charCount < 0) {
      $(counter).addClass('red-counter')
    } else {
      $(counter).removeClass('red-counter');
    }
  });

});