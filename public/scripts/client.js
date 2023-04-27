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
      <small>${$tweetObj.created_at}</small>
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

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

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
  
  renderTweets(data);

  
});



