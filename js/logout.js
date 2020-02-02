(function() {

  const config = {
    apiKey: "AIzaSyCdwUUXyvq7C_sPSezrvqg7vdkykguu3C0",
    authDomain: "let-s-talk-86335.firebaseapp.com",
    databaseURL: "https://let-s-talk-86335.firebaseio.com",
    projectId: "let-s-talk-86335",
    storageBucket: "let-s-talk-86335.appspot.com",
    messagingSenderId: "423723637273"
  };
  firebase.initializeApp(config);

  // log out event
  btnLogout.addEventListener('click', e =>{
    firebase.auth().signOut();
  });
    
  // console log when user state changes
  /*firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      console.log('logged in');
    } else {
      console.log('not logged in');
    }
  }); */
  
}());








