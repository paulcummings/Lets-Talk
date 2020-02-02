(function login() {

  const config = {
    apiKey: "AIzaSyCdwUUXyvq7C_sPSezrvqg7vdkykguu3C0",
    authDomain: "let-s-talk-86335.firebaseapp.com",
    databaseURL: "https://let-s-talk-86335.firebaseio.com",
    projectId: "let-s-talk-86335",
    storageBucket: "let-s-talk-86335.appspot.com",
    messagingSenderId: "423723637273"
  };
  firebase.initializeApp(config);

  const inputEmail = document.getElementById('inputEmail');
  const intputPassword = document.getElementById('inputPassword');
  const btnLogin = document.getElementById('btnLogin');

  btnLogin.addEventListener('click', e => {
    const email = inputEmail.value;
    const password = inputPassword.value;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password)
      .then((returnedUser) => {
        window.location.href = "./account.html";
      })
      .catch(function(error){
         alert("Email or Password is incorrect");

      });
  });

  // console log when user state changes
  /* firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser.uid);
      console.log('logged in');
    } else {
      console.log('not logged in');
    }
  }); */

}());
