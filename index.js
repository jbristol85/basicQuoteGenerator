/*global $ */

// https://talaikis.com/random_quotes_api/
// https://dev.twitter.com/web/tweet-button/web-intent

var quotes = {
    quote: "",
    author: "",
    getQuote: function() {
        $.ajax({
            method: "GET",
            url: "https://talaikis.com/api/quotes/random/",
            dataType: "json",
            success: function(data) {
                console.log(data);
                quotes.quote = data.quote;
                quotes.author = data.author;
                quotes.displayQuote();
            }
        });
    },
    displayQuote: function() {
        document.getElementById("insertQuote").innerHTML = '"' + quotes.quote + '"';
        document.getElementById("insertAuthor").innerHTML = '- ' + quotes.author;
    },
    postTweet: function() {
        window.open('https://twitter.com/intent/tweet?text=' + '"' + quotes.quote + '"' + '  - ' + quotes.author);
    }
};

document.getElementById("newQuote").onclick = function() {
    quotes.getQuote();
};
document.getElementById("postTwitter").onclick = function() {
    quotes.postTweet();
};

quotes.getQuote();