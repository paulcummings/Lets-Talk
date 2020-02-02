document.addEventListener('DOMContentLoaded', function() {

  const nameField = document.getElementById('name');
  const fluentField = document.getElementById('fluent');
  const learningField = document.getElementById('learning');
  const chatField = document.getElementById('num_chat');
  const ratingField = document.getElementById('rating');
  const descField = document.getElementById('profile_desc');

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var firestore = firebase.firestore();
      var userDoc = firestore.collection("users").doc(firebaseUser.uid);
      userDoc.get().then(function(doc) {
    if (doc.exists) {
        //console.log("Document data:", doc.data());
        nameField.innerText = doc.data().name;
        fluentField.innerText = doc.data().fluent;
        learningField.innerText = doc.data().learning;
        num_chat.innerText = doc.data().num_chat;
        rating.innerText = doc.data().rating;
        descField.innerText = doc.data().description;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
});
    } else {
      console.log('not logged in');
    }
  });

//update profile picture
  var readURL = function(input) {
          if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                  $('.profile-pic').attr('src', e.target.result);
              }
              reader.readAsDataURL(input.files[0]);
          }
      }
      $(".file-upload").on('change', function(){
          readURL(this);
      });
      $(".upload-button").on('click', function() {
         $(".file-upload").click();
      });
});
