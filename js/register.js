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
  var firestore = firebase.firestore();

  const inputName = document.getElementById('inputName');
  const inputEmail1 = document.getElementById('inputEmail1');
  const intputPassword1 = document.getElementById('inputPassword1');
  //const intputPassword2 = document.getElementById('inputPassword2');
  const inputFluent = document.getElementById('inputFluent');
  const inputLearning = document.getElementById('inputLearning');
  const btnSubmit = document.getElementById('btnSubmit');

  btnRegister.addEventListener('click', e => {
    const name = inputName.value;
    const email = inputEmail1.value;
    const password = inputPassword1.value;
    const fluent = inputFluent.value;
    const learning = inputLearning.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
        var userId = firebase.auth().currentUser.uid;
        firestore.collection('users').doc(userId).set({
            name: name,
            email: email,
            fluent: fluent,
            learning: learning,
            num_chat: 0,
            rating: 0,
            description: null
          })
          .then(function() {
            auth.signInWithEmailAndPassword(email, password)
              .then((returnedUser) => {
                window.location.href = "./account.html";
              })
          });
      })
      .catch(function(error){
        alert("Registration details are invalid");
      });

  });
}());
