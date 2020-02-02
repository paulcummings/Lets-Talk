(function forgotpassword() {

  const config = {
    apiKey: "AIzaSyCdwUUXyvq7C_sPSezrvqg7vdkykguu3C0",
    authDomain: "let-s-talk-86335.firebaseapp.com",
    databaseURL: "https://let-s-talk-86335.firebaseio.com",
    projectId: "let-s-talk-86335",
    storageBucket: "let-s-talk-86335.appspot.com",
    messagingSenderId: "423723637273"
  };
  firebase.initializeApp(config);

  const inputEmail = document.getElementById('forgotEmail');
  const btnSubmit = document.getElementById('btnSubmit');

  btnSubmit.addEventListener('click', e => {
    const email = forgotEmail.value;
    const auth = firebase.auth();
    auth.sendPasswordResetEmail(email)
      .then(function() {
        alert("Email sent")
      })
      .catch(function(error) {
        alert("Please enter valid email")
      });
  });
}());
