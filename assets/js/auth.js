
// Initalize the Google Sign-In API
gapi.load('auth2', function() {
  gapi.auth2.init({
    client_id: '399328660819-h5keg0q9hg0umm8bktu1u42aipbnun5b.apps.googleusercontent.com'
  });
});

// Handle the sign-in event
function onSignIn(googleUser) {
  // Get the user's ID token and basic profile information
  var id_token = googleUser.getAuthResponse().id_token;
  var profile = googleUser.getBasicProfile();

  // Use the ID token and profile information to authenticate
  // the user on your server, or to personalize the UI for the user
  // ...
}

