/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement =(tweetObj) => {
  const createTweet = {
    avatars: tweetObj.user.avatars,
    name: tweetObj.user.name,
    username: tweetObj.user.handle,
    content: tweetObj.content.text,
    time: timeago.format(tweetObj.created_at)
  }

  const $article = $('<article class="tweet">')
  const $header = $('<header>')
  const $div1 = $('<div>')
  const $h31 = $('<h3 class="name">')
  const $img = $(`<img class="imgPic" src='${createTweet.avatars}'/>`)
  const $h32 = $('<h3 class="username">')
  const $p = $('<p>')
  const $footer = $('<footer>')
  const $small1 = $('<small>')
  const $small2 = $('<small>')
  const $i1 = $('<i class="fas fa-solid fa-flag">')
  const $i2 = $('<i class="fas fa-sharp fa-solid fa-retweet">')
  const $i3 = $('<i class="fas fa-solid fa-heart">')

  $div1.append($img, $h31)

  $small2.append($i1, $i2, $i3);


  $footer.append($small1, $small2);

  $header.append($div1, $h32);

  $article.append($header, $p, $footer)

  $h31.text(createTweet.name)
  $h32.text(createTweet.username)

  $p.text(createTweet.content)

  $small1.text(createTweet.time)


  console.log($article)

  return $article

}

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    const newTweet = createTweetElement(tweet);
    $('#tweets-container').prepend(newTweet);
  }
}

const loadTweets = () => {
  $.ajax({
    method: 'GET',
    url: '/tweets'
  }).then((tweets) => {
    renderTweets(tweets);
  })
}


const addTweet = function(event) {
  event.preventDefault();

  $('#error-message').text('').slideUp();

  const formInput = $('#tweet-text');
  const length = formInput.val().length;

  if (length === 0 || typeof length === null) {
    $('#error-message').text('Invalid tweet input, please enter a tweet!').slideDown();
    return;
  }

  if (length > 140){
    $('#error-message').text('Tweet must be 140 characters or less!').slideDown();
    return;
  }

 const data = $(this).serialize();

 $.ajax({
    method: 'POST',
    url: '/tweets/',
    data: data
  }).then(() => {
    formInput.val('')
    loadTweets();
  });

}

$(document).ready(function() {
    
  //grab form from DOM
  
  $('form').on('submit', addTweet);
  loadTweets();
});



