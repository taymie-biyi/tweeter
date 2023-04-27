/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const createTweetElement = function($tweetObj) {
  const $tweet = $(`
  <article class="tweet">
    <header>
      <h3 class="name"><img src="${$tweetObj.user.avatars}"/>${$tweetObj.user.name}</h3>
      <h3 class="username">${$tweetObj.user.handle}</h3>
    </header>
    <p>${$tweetObj.content.text}</p>
    <footer>
      <small>(${timeago.format($tweetObj.created_at)})</small>
      <div>
        <small>
          <i class="fas fa-solid fa-flag"></i>
          <i class="fas fa-sharp fa-solid fa-retweet"></i>
          <i class="fas fa-solid fa-heart"></i>
        </small>
      </div>
    </footer>
  </article>`)
  return $tweet;
};


const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    const newTweet = createTweetElement(tweet);
    $('#tweets-container').prepend(newTweet);
  }
}

$(document).ready(function() {
  
  // renderTweets(data);

  const loadTweets = () => {
    $.ajax({
      method: 'GET',
      url: '/tweets'
    }).then((tweets) => {
      renderTweets(tweets);
    })
  }

  loadTweets();
  
  //grab form from DOM
  const $form = $('#create-tweet');

  $form.on('submit', (event) => {
    event.preventDefault();
    const data = $form.serialize();
    console.log(data)

    $.ajax({
      method: POST,
      url: '/tweets/',
      data: data
    })
  })
});



