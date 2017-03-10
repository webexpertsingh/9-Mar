// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC3FFd8_xaYlgyXpKkw_R5oRclj-2q9xaA",
    authDomain: "fir-19dee.firebaseapp.com",
    databaseURL: "https://fir-19dee.firebaseio.com",
    storageBucket: "fir-19dee.appspot.com",
    messagingSenderId: "384275803534"
  };
  firebase.initializeApp(config);



// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
var bidderPrice = 0;
var bidderName = "";

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the initial variables for highBidder equal to the stored values.
    highBidder = snapshot.val().highBidder;
    highPrice = snapshot.val().highPrice;

    // Change the HTML to reflect the initial value
    $('#highest-bidder').html(highBidder);
    $('#highest-price').html(highPrice);

    // Print the initial data to the console.
    console.log(highBidder + " " + highPrice);

  }

  // Keep the initial variables for highBidder equal to the initial values
  else {

    // Change the HTML to reflect the initial value
    $('#highest-bidder').html(highBidder);
    $('#highest-price').html(highPrice);

    // Print the initial data to the console.
    console.log(highBidder + " " + highPrice);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  bidderName = $('#bidder-name').val().trim();
  bidderPrice = parseInt($('#bidder-price').val().trim());


  // Log the Bidder and Price (Even if not the highest)
  //console.log("newN-- "+bidderName+", "+"newP--"+bidderPrice+", "+"preHIP--"+highPrice);
  
  if (bidderPrice > highPrice) {
    //console.log("inside if -- ");
    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    


    // Log the new High Price
    highPrice = bidderPrice;

    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
    database.ref().set({
      highBidder : bidderName,
      highPrice : highPrice
    });

    // Change the HTML to reflect the new high price and bidder
    $('#highest-bidder').html(bidderName);
    $('#highest-price').html(bidderPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
