document.addEventListener('DOMContentLoaded', function () {


    var firestore = firebase.firestore();

    firestore.collection("users").orderBy("name")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {

                var userRecord;

                userRecord = "<div class='row container' id='contacts-box'>\
                                <div class=''>\
                                  <div class='row'>\
                                    <h4>" + doc.data().name + "</h4>\
                                    <button type='button' class='connect-button' class='btn btn-success'>\
                                      Chat\
                                    </button>\
                                  </div>\
                                  <div class='row'>\
                                    <h6><b>Speaks:</b> " + doc.data().fluent + "</h6>\
                                  </div>\
                                  <div class='row'>\
                                    <h6><b>Learning:</b> " + doc.data().learning + "</h6>\
                                  </div>\
                                </div>\
                                <div class=''>\
                                </div>\
                              </div>\
                              <hr>"

                loadUsers.innerHTML += userRecord;

                
            });
            
            var isFirefox = typeof InstallTrigger !== 'undefined';
            if (isFirefox) {
                var inputRoomName = document.getElementById("inputRoomName");
                var callButton = document.getElementById("callButton");
                var roomValue;
                var chatBox = document.getElementById("chatBox");

                var hangupButton = document.getElementById("hangupButton");
                var patternCheck;
                var errorMessage = document.getElementById("errorMessage");


                //inputRoomName.value = "batman123";
                callButton.addEventListener("click", function () {
                    //returns a boolean, true or false indicating whether user entered room name in correct format
                    patternCheck = /^[a-zA-Z0-9]{5,}$/.test(inputRoomName.value);
                    if (patternCheck === true) {
                        //have to use innerHTML to set it to blank
                        errorMessage.innerHTML = "";
                        roomValue = "http://appr.tc/r/" + inputRoomName.value;
                        chatBox.src = roomValue;

                        //this takes out the red border if user had an error typing in pattern
                        inputRoomName.classList.remove("errorMessageRed");
                    }
                    else {
                        //can use textContent or innerHTML here, both should work fine but used innerHTML for consistency
                        errorMessage.innerHTML = "Error: Room name has to be 5 or more characters being alphanumeric only with no spaces. Must also be using Firefox Browser";
                        //this adds red border to the inputRoomName box to show that user made a mistake.
                        inputRoomName.classList.add("errorMessageRed");
                    }
                });

                hangupButton.addEventListener("click", function () {
                    chatBox.src = "";
                });

                var roomName;
                var someUserName = document.getElementsByClassName("user_name");
                // console.log(someUserName[1].textContent);
                var connectButton = document.getElementsByClassName("connect-button");
                for (var i = 0; i < connectButton.length; i++)
                    connectButton[i].addEventListener("click", function () {

                        chatBox.src = "http://appr.tc/r/The_Room";
                    });
            }
            else {
                alert("Must use compatible browser: Firefox");
            }
        })
        .catch(function (error) {
            loadUsers.innerText = "Error loading chat";
            console.log("Error getting documents: ", error);
        });

});
