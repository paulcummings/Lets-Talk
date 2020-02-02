document.addEventListener('DOMContentLoaded', function() {

  //var name = document.getElementById('name');
  var firestore = firebase.firestore();
  loadUsers.innerHTML = ""; // clear output
  loadUsers2.innerHTML = "";
  firestore.collection("users").orderBy("name")
    .get()
    .then(function(querySnapshot) {
      //var halfUsers = (querySnapshot.size) /2
      var i = 0;
      querySnapshot.forEach(function(doc) {

        //console.log(doc.id, " => ", doc.data());
        //load_connect.innerText += doc.data().name += "\n";

        //if(i < halfUsers){

          loadUsers.innerHTML += "<div class='container border'>\
                                  <div class='row'>\
                                    <div class='col-10'>\
                                      <div class='row'>\
                                        <div class='row'>\
                                          <div style='padding-left:20px'></div>\
                                          <img src='../img/profile.png' height='100' width='100' class='d-inline-block align-top' alt=''>\
                                        </div>\
                                        <div class='col'>\
                                          <div style='padding:10px'></div>\
                                          <h4><span id='user_name' style='padding-top:10px;'>" + doc.data().name + "</span></h4>\
                                          <button type='button' class='connect-button' class='btn'>Connect</button>\
                                          <span>Fluent: <span id='fluent'>" + doc.data().fluent + "</span><br>\
                                          <span>Learning: <span id='learning'>" + doc.data().learning + "</span><br>\
                                          <span>Rating: <span id='rating'>" + doc.data().rating + "</span>\
                                          <button onclick='voteUp()' class='oi oi-thumb-up'></button>\
                                          <button onclick='voteDown()' class='oi oi-thumb-down'></button>\
                                        </div>\
                                      </div>\
                                    </div>\
                                    <div class='col'>\
                                    </div>\
                                  </div>\
                                  <div><margin:100px;</div>\
                                </div>";
            loadUsers.innerHTML +="<div style='padding:10px'></div>";
          /*}
          else{
            loadUsers2.innerHTML += "<div class='container border'>\
                                    <div class='row'>\
                                      <div class='col-10'>\
                                        <div class='row'>\
                                          <div class='row'>\
                                            <div style='padding-left:20px'></div>\
                                            <img src='../img/profile.png' height='100' width='100' class='d-inline-block align-top' alt=''>\
                                          </div>\
                                          <div class='col'>\
                                            <div style='padding:10px'></div>\
                                            <h4><span id='user_name' style='padding-top:10px;'>" + doc.data().name + "</span></h4>\
                                            <button type='button' class='connect-button' class='btn'>Connect</button>\
                                            <span>Fluent: <span id='fluent'>" + doc.data().fluent + "</span><br>\
                                            <span>Learning: <span id='learning'>" + doc.data().learning + "</span><br>\
                                            <span>Rating: <span id='rating'>" + doc.data().rating + "</span>\
                                            <button onclick='voteUp()' class='oi oi-thumb-up'></button>\
                                            <button onclick='voteDown()' class='oi oi-thumb-down'></button>\
                                          </div>\
                                        </div>\
                                      </div>\
                                      <div class='col'>\
                                      </div>\
                                    </div>\
                                    <div><margin:100px;</div>\
                                  </div>";
              loadUsers2.innerHTML +="<div style='padding:10px'></div>";

          }
          i++;*/
      });
    })
    .catch(function(error) {
      load_connect.innerText = "Error loading users";
      console.log("Error getting documents: ", error);
    });

});

function voteUp() {

};

function voteDown() {

};
btnSearch.addEventListener('click', e => {
  var searchBar = document.getElementById('searchBar');
  var searchBarValue = searchBar.value;
  var flag = 0;
  var flag2 = 0;
  //var name = document.getElementById('name');

  var firestore = firebase.firestore();
  loadUsers.innerHTML = ""; // clear output
  loadUsers2.innerHTML = "";
  // document.getElementById('fluent-label').innerHTML = "<h2>Users who are fluent in <span id='fluent'>" + searchBarValue + "</b></span><br></h2>";
  firestore.collection("users").orderBy("name")
    .get()
    .then(function(querySnapshot) {
      fluentLabel.innerHTML = "<div><h3>Users fluent in " + searchBarValue + "</h3></div>";
      learningLabel.innerHTML = "<div><h3>Users learning " + searchBarValue + "</h3></div>";
      querySnapshot.forEach(function(doc) {

        if (doc.data().fluent == searchBarValue || doc.data().learning == searchBarValue) {
          var userRecord;

          // if(doc.data().fluent == searchBarValue){
          if(doc.data().fluent == searchBarValue){

            loadUsers.innerHTML += "<div class='container border srch-res'>\
                                    <div class='row'>\
                                      <div class='col-10'>\
                                        <div class='row'>\
                                          <div class='row'>\
                                            <div style='padding-left:20px'></div>\
                                            <img src='../img/profile.png' height='150' width='150' class='d-inline-block align-top' alt=''>\
                                          </div>\
                                          <div class='col'>\
                                            <div style='padding:10px'></div>\
                                            <h4><span id='user_name' style='padding-top:10px;'>" + doc.data().name + "</span></h4>\
                                            <button type='button' class='connect-button' class='btn'>Connect</button>\
                                            <span><b>Fluent: <span id='fluent'>" + doc.data().fluent + "</b></span><br>\
                                            <span>Learning: <span id='learning'>" + doc.data().learning + "</span><br>\
                                            <span>Rating: <span id='rating'>" + doc.data().rating + "</span>\
                                            <button onclick='voteUp()' class='oi oi-thumb-up'></button>\
                                            <button onclick='voteDown()' class='oi oi-thumb-down'></button>\
                                          </div>\
                                        </div>\
                                      </div>\
                                      <div class='col'>\
                                        \
                                      </div>\
                                      <div class='col'>\
                                      </div>\
                                    </div>\
                                    <div><margin:100px;</div>\
                                  </div>";
              loadUsers.innerHTML +="<div style='padding:10px'></div>";
              flag = 1;
            }
          if (doc.data().learning == searchBarValue){
            loadUsers2.innerHTML += "<div class='container border srch-res'>\
                                    <div class='row'>\
                                      <div class='col-10'>\
                                        <div class='row'>\
                                          <div class='row'>\
                                            <div style='padding-left:20px'></div>\
                                            <img src='../img/profile.png' height='150' width='150' class='d-inline-block align-top' alt=''>\
                                          </div>\
                                          <div class='col'>\
                                            <div style='padding:10px'></div>\
                                            <h4><span id='user_name' style='padding-top:10px;'>" + doc.data().name + "</span></h4>\
                                            <button type='button' class='connect-button' class='btn'>Connect</button>\
                                            <span>Fluent: <span id='fluent'>" + doc.data().fluent + "</span><br>\
                                            <span><b>Learning: <span id='learning'>" + doc.data().learning + "</b></span><br>\
                                            <span>Rating: <span id='rating'>" + doc.data().rating + "</span>\
                                            <button onclick='voteUp()' class='oi oi-thumb-up'></button>\
                                            <button onclick='voteDown()' class='oi oi-thumb-down'></button>\
                                          </div>\
                                        </div>\
                                      </div>\
                                      <div class='col'>\
                                        \
                                      </div>\
                                      <div class='col'>\
                                      </div>\
                                    </div>\
                                    <div><margin:100px;</div>\
                                  </div>";
              loadUsers2.innerHTML +="<div style='padding:10px'></div>";
              flag2 = 1;
          }

            // }
        }
        else{
          if(flag == 0 && flag2 == 0 && !(doc.data().fluent == searchBarValue || doc.data().learning == searchBarValue)){
            loadUsers.innerHTML = "<div id='noUsers' class='container border'>\
                                    <div class='text-center'>\
                                      <span style='padding-top:50px; color:red;' class='oi oi-warning'></span>\
                                      <h2 style='padding-bottom:50px;'>Sorry, no users available</h2>\
                                    </div>\
                                    </div>";
            loadUsers2.innerHTML = "<div id='noUsers2' class='container border'>\
                                    <div class='text-center'>\
                                      <span style='padding-top:50px; color:red;' class='oi oi-warning'></span>\
                                      <h2 style='padding-bottom:50px;'>Sorry, no users available</h2>\
                                    </div>\
                                    </div>";
          }
        }

      });
      if (flag==1){
        document.getElementById("noUsers").outerHTML = "";
      }
      if (flag2==1){
        document.getElementById("noUsers2").outerHTML = "";
      }
    })
    .catch(function(error) {
      load_connect.innerText = "Error loading users";
      console.log("Error getting documents: ", error);
    });
});
