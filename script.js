/*global $*/
var button = $("#lead-banner a");
button[0].onclick = function() {
 $("#points-of-sale").toggleClass("open");
 return false;
};

/*************************************************/

$(document).ready(function() {
 var allQuotes = $("blockquote");
 var currentQuote = 0;

 function changeQuote() {

  $(allQuotes[currentQuote]).fadeOut(200, function() {
     if (currentQuote == allQuotes.length - 1) {
        currentQuote = 0;
   } else {
        currentQuote++;
   }

   $(allQuotes[currentQuote]).fadeIn(200);
   
  });
 }

 var quoteTimer = setInterval(changeQuote, 3000);

});

/*******************************************************/

$(document).ready(function(){
     
     var items = $("#points-of-sale li");
     
     items.on("click", function(){
      
       $(this).find("p").slideToggle(500);
      
     });
});




























