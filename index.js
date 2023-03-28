import { menuArray } from "./data";


function getMenuHtml() {

feedHtml += `<div class="tweet">
<div class="tweet-inner">
    <img src="${tweets.profilePic}" class="profile-pic">
    <div>
        <p class="handle">${tweets.handle}</p>
        <p class="tweet-text">${tweets.tweetText}</p>
        <div class="tweet-details">
            <span class="tweet-detail">
            <i class="fa-regular fa-comment-dots" data-reply="${tweets.uuid}"></i>           
            ${tweets.replies.length}
            </span>
            <span class="tweet-detail">
            <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweets.uuid}"></i>
            ${tweets.likes}
            </span>
            <span class="tweet-detail">
            <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${tweets.uuid}"></i>
            ${tweets.retweets}
            </span>
        </div>   
    </div>            
</div>
<div class="hidden" id="replies-${tweets.uuid}">
    ${repliesHtml}
</div> 
</div>
`

}