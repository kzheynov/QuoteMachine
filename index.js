$(document).ready(function(){
var randomQuote;
var actor;
var randomNum;


function getQuote(){


  var quotes = ["To be or not to be. That's not really a question", 
"To be immortal and then die", 
"Is the cinema more important than life?", 
"Taste is a result of a thousand distastes.",
"Self-plagiarism is style.",
"Give them pleasure. The same pleasure they have when they wake up from a nightmare.",
"There is no end. There is no beginning. There is only the infinite passion of life.",
"Don't wake me for the end of the world unless it has very good special effects.",
"Cinema is a matter of what's in the frame and what's out",
"Oh how Shakespeare would have loved cinema!",
"That's what I like about film-it can be bizarre, classic, normal, romantic. Cinema is to me the most versatile thing."
];
  var author = ["Jean-Luc Godard", 
"Jean-Luc Godard", 
"Francois Truffaut", 
"Francois Truffaut",
"Alfred Hitchcock",
"Alfred Hitchcock",
"Federico Fellini",
"Roger Zelazny",
"Martin Scorsese",
"Derek Jarman",
"Catherine Deneuve"
];
  
  randomNum = Math.floor((Math.random()*quotes.length));
  randomQuote = quotes[randomNum];
  actor = author[randomNum];

  
  $("#quote").text('"'+randomQuote+'"');
  $("#author").text("-" + actor);
}
  
  $("#new-quote").on("click", function(){
getQuote();
  });
$("#tweet-quote").on("click",function(){
window.open("http://twitter.com/intent/tweet?text="+ '"'+randomQuote+'"' + " " +"-"+ " " +actor);
});


});