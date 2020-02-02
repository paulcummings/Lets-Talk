function edit_profile() {
  // get elements
  var nameField = document.getElementById('name');
  var fluentField = document.getElementById('fluent');
  var learningField = document.getElementById('learning');
  var descField = document.getElementById('profile_desc');
  var btnEdit = document.getElementById('edit');
  var btnDone = document.getElementById('done');
  var btnCancel = document.getElementById('cancel');
  var btnImageUpload = document.getElementById("imageUpload");

  // get element's text content
  var nameFieldText = document.getElementById("name").textContent;
  var fluentFieldText = document.getElementById("fluent").textContent;
  var learningFieldText = document.getElementById("learning").textContent;
  var descFieldText = document.getElementById("profile_desc").textContent;

  // show and hide buttons
  btnEdit.classList.add("hidden");
  btnDone.classList.remove("hidden");
  btnCancel.classList.remove("hidden");
  btnImageUpload.classList.remove("hidden");
  

  // add input fields
  nameField.innerHTML = "<input type='text' class ='desc' id='newNameField'>";
  newNameField.setAttribute("value", nameFieldText);
  fluentField.innerHTML = "<input type='text' class ='desc' id='newFluentField'>";
  newFluentField.setAttribute("value", fluentFieldText);
  learningField.innerHTML = "<input type='text' class ='desc' id='newLearningField'>";
  newLearningField.setAttribute("value", learningFieldText);
  descField.innerHTML = "<textarea class ='desc' id='newDescField' rows='4', cols='50'></textarea>";
  newDescField.value = descFieldText;
}

function edit_done() {
  // get elements
  var nameField = document.getElementById('name');
  var fluentField = document.getElementById('fluent');
  var learningField = document.getElementById('learning');
  var descField = document.getElementById('profile_desc');
  var btnEdit = document.getElementById('edit');
  var btnDone = document.getElementById('done');
  var btnCancel = document.getElementById('cancel');
  var btnImageUpload = document.getElementById("imageUpload");

  var newNameField = document.getElementById("newNameField");
  var newFluentField = document.getElementById("newFluentField");
  var newLearningField = document.getElementById("newLearningField");
  var newDescField = document.getElementById("newDescField");

  var newNameFieldText = newNameField.value;
  var newFluentFieldText = newFluentField.value;
  var newLearningFieldText = newLearningField.value;
  var newDescFieldText = newDescField.value;

  // remove text input boxes
  nameField.innerHTML = newNameFieldText;
  fluentField.innerHTML = newFluentFieldText;
  learningField.innerHTML = newLearningFieldText;
  descField.innerHTML = newDescFieldText;

  // show and hide buttons
  btnEdit.classList.remove("hidden");
  btnDone.classList.add("hidden");
  btnCancel.classList.add("hidden");
  btnImageUpload.classList.add("hidden");

  // change to new values
  firebase.auth().onAuthStateChanged(firebaseUser => {
    var firestore = firebase.firestore();
    var userId = firebase.auth().currentUser.uid;
    var userDoc = firestore.collection("users").doc(firebaseUser.uid);
    userDoc.get()
      .then(function(doc) {
        firestore.collection('users').doc(userId).update({
          name: newNameFieldText,
          fluent: newFluentFieldText,
          learning: newLearningFieldText,
          description: newDescFieldText
        })
      });
  });
}

function edit_cancel() {
  // get elements
  var nameField = document.getElementById('name');
  var fluentField = document.getElementById('fluent');
  var learningField = document.getElementById('learning');
  var descField = document.getElementById('profile_desc');
  var btnEdit = document.getElementById('edit');
  var btnDone = document.getElementById('done');
  var btnCancel = document.getElementById('cancel');
  var btnImageUpload = document.getElementById("imageUpload");

  // show and hide buttons
  btnEdit.classList.remove("hidden");
  btnDone.classList.add("hidden");
  btnCancel.classList.add("hidden");
  btnImageUpload.classList.add("hidden");

  // reload old data
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

}
