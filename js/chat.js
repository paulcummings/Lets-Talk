// 'use strict';

// //just give me video and audio
// const mediaStreamConstraints = {
//   audio: true,
//   video: true
// };

// const localVideo = document.getElementById('localVideo');
// // Local stream that will be reproduced on the video.
// let localStream;
// // Handles success by adding the MediaStream to the video element.
// function gotLocalMediaStream(mediaStream) {
//   localStream = mediaStream;
//   localVideo.srcObject = mediaStream;
// }
// // Handles error by logging a message to the console with the error message.
// function handleLocalMediaStreamError(error) {
//   console.log('navigator.getUserMedia error: ', error);
// }
// // Initializes media stream.
// navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
//   .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);

//All the browsers we can check for if we wanted to be more specific. Will need to test other browsers and cross browser video compatibility. So far we know that Chrome, Safari, and Opera do not work.

// Internet Explorer 6-11
//var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
//var isEdge = !isIE && !!window.StyleMedia;

// Blink engine detection
//var isBlink = (isChrome || isOpera) && !!window.CSS;

// Chrome 1 - 71
//var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Safari 3.0+ "[object HTMLElementConstructor]"
//var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Opera 8.0+
//var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

//handling getUserMedia
// navigator.mediaDevices.getUserMedia({ audio: true, video: true})
// .then(function(stream) {
//    /* use the stream */
// })
// .catch(function(err) {
//    /* handle the error */
// });

// document.addEventListener('DOMContentLoaded', function () {

//     //var name = document.getElementById('name');

//     var firestore = firebase.firestore();

//     firestore.collection("users").orderBy("name")
//       .get()
//       .then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//           //console.log(doc.id, " => ", doc.data());
//           //load_connect.innerText += doc.data().name += "\n";

//           var userRecord;

//           userRecord = "<div class='row container border'>\
//               <div class=''>\
//                 <div class='row'>\
//                   <h4><span id='user_name'>" + doc.data().name + "</span></h4>\
//                   <button type='button' class='connect-button' class='btn btn-success'>\
//                     Connect\
//                   </button>\
//                   <div class=''>\
//                     Speaking: <span id='fluent'>" + doc.data().fluent + "</span><br>\
//                     Learning: <span id='learning'>" + doc.data().learning + "</span><br>\
//                   </div>\
//                   <div class=''>\
//                     Calls: <span id='num_chat'>" + doc.data().num_chat; + "</span>\
//                     <span id='rating'>" + doc.data().rating + "</span>\
//                     <button onclick='voteUp()' class='oi oi-thumb-up'>\
//                     </button>\
//                   </div>\
//                 </div>\
//               </div>\
//               <div class=''>\
//               </div></div>"

//           // loadUsers.innerHTML += "<div class='row container border'>";
//           // loadUsers.innerHTML += "<div class=''>";
//           // loadUsers.innerHTML += "<div class='row'>";
//           // loadUsers.innerHTML += "<h4><span id='user_name'>";
//           // loadUsers.innerHTML += doc.data().name;
//           // loadUsers.innerHTML += "</span></h4>";
//           loadUsers.innerHTML += userRecord;
//           // loadUsers.innerHTML += "<button type='button' class='connect-button' class='btn btn-success'>Connect</button>";
//           // loadUsers.innerHTML += "<div class=''>";
//           // loadUsers.innerHTML += "Speaking: <span id='fluent'>";
//           // loadUsers.innerHTML += doc.data().fluent;
//           // loadUsers.innerHTML += "</span><br>";
//           // loadUsers.innerHTML += "Learning: <span id='learning'>";
//           // loadUsers.innerHTML += doc.data().learning;
//           // loadUsers.innerHTML += "</span><br>";
//           // loadUsers.innerHTML += "</div>";
//           // loadUsers.innerHTML += "<div class=''>";
//           // loadUsers.innerHTML += "Calls: <span id='num_chat'>";
//           // loadUsers.innerHTML += doc.data().num_chat;
//           // loadUsers.innerHTML += "</span>";
//           // loadUsers.innerHTML += "<span id='rating'>";
//           // loadUsers.innerHTML += doc.data().rating;
//           // loadUsers.innerHTML += "</span><button onclick='voteUp()' class='oi oi-thumb-up'></button>";
//           // loadUsers.innerHTML += "<button onclick='voteDown()' class='oi oi-thumb-down'></button><br>";
//           // loadUsers.innerHTML += "</div></div></div>";
//           // loadUsers.innerHTML += "<div class=''>";
//           // loadUsers.innerHTML += "</div></div>";
//         });
//       })
//       .catch(function (error) {
//         load_connect.innerText = "Error loading users";
//         console.log("Error getting documents: ", error);
//       });
//   });

//video chat only works with Firefox browser so must use Firefox Browser
// var isFirefox = typeof InstallTrigger !== 'undefined';
// if (isFirefox) {
//     var inputRoomName = document.getElementById("inputRoomName");
//     var callButton = document.getElementById("callButton");
//     var roomValue;
//     var chatBox = document.getElementById("chatBox");

//     var hangupButton = document.getElementById("hangupButton");
//     var patternCheck;
//     var errorMessage = document.getElementById("errorMessage");

//     // var connectButton = document.getElementsByClassName("connect-button");
//     // console.log(connectButton.length);

//     //inputRoomName.value = "batman123";
//     callButton.addEventListener("click", function () {
//         //returns a boolean, true or false indicating whether user entered room name in correct format
//         patternCheck = /^[a-zA-Z0-9]{5,}$/.test(inputRoomName.value);
//         if (patternCheck === true) {
//             //have to use innerHTML to set it to blank
//             errorMessage.innerHTML = "";
//             roomValue = "http://appr.tc/r/" + inputRoomName.value;
//             chatBox.src = roomValue;

//             //this takes out the red border if user had an error typing in pattern
//             inputRoomName.classList.remove("errorMessageRed");
//         }
//         else {
//             //can use textContent or innerHTML here, both should work fine but used innerHTML for consistency
//             errorMessage.innerHTML = "Error: Room name has to be 5 or more characters being alphanumeric only with no spaces. Must also be using Firefox Browser";
//             //this adds red border to the inputRoomName box to show that user made a mistake.
//             inputRoomName.classList.add("errorMessageRed");
//         }
//     });

//     hangupButton.addEventListener("click", function () {
//         chatBox.src = "";
//     });
// }
// else {
//     alert("Must use compatible browser: Firefox");
// }


var chatbox = talkSession.createChatbox(conversation);
chatbox.mount(document.getElementById("talkjs-container"));
