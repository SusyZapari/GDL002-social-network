window.initFirebase = function(){
  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyC69KcGgAiDrajAsi-Fbi2tjvrRMHzH9So",
    authDomain: "veggiehappy-c15fa.firebaseapp.com",
    databaseURL: "https://veggiehappy-c15fa.firebaseio.com",
    projectId: "veggiehappy-c15fa",
    storageBucket: "veggiehappy-c15fa.appspot.com",
    messagingSenderId: "982911036256"
  };

  // Prevent this execution if not mocked yet in unit test
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(config);
  }
}

initFirebase();