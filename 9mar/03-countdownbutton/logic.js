// Initialize Firebase (YOUR OWN APP)



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

// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. (I.E FIREBASE HERE)
// HINT: Use databaseVariable.ref().on("value", function(snapshot) {}
database.ref().on("value", function(snapshot){
  



// Inside our .on function...

// Console.log the initial "snapshot" value (the object itself)
console.log(snapshot.val().clickCount);

// Change the initial value to reflect the initial value in Firebase
// HINT: snapshot.val().__________


// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________


// Change the HTML using jQuery to reflect the updated clickCounter value
$("#click-value").html(snapshot.val().clickCount);

// Then include Firebase error logging
// HINT: }, function(errorObject)
});
// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;
  

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter 
  });

  // Log the value of clickCounter
  console.log(clickCounter);
  $("#click-value").html(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter 
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);


});