//main versions
// navigator.getUserMedia({video:true, audio: true}, function(stream){
// 	var Peer = require('simple-peer')

// //whoever is the first peer has the #firstPeer at the end
// var peer = new Peer({
// 	//initiator sets to true or false based on whether they are the first peer or not, if url has firstPeer they are the first one
// 	initiator: location.hash == '#firstPeer',
// 	trickle: false,
// 	stream: stream
// })

// //gives the id or SDP of first person
// peer.on('signal', function(data){
// 	document.getElementById('yourId').value = JSON.stringify(data);
// })

// document.getElementById('connect').addEventListener('click', function(){
// 	var otherId = JSON.parse(document.getElementById('otherId').value);
// 	//lets our peer know that the other peer is available 
// 	peer.signal(otherId);
// })

// //users can text chat with each other using peer.send
// document.getElementById('send').addEventListener('click', function(){
// 	var yourMessage = document.getElementById('yourMessage').value;
// 	peer.send(yourMessage);
// })

// //shows the messages that was sent to us
// peer.on('data', function(data){
// 	document.getElementById('messages').textContent += data + '\n';
// })

//   peer.on('stream', function (stream) {
//     var video = document.createElement('video');
//     document.body.appendChild(video);

//     video.srcObject = stream;
//     video.play();
//     })

// }, function(err){
// 	console.log("error");
// })

//version 1
// var getUserMedia = require('getusermedia')

// getUserMedia({ video: true, audio: true }, function (err, stream) {
//   if (err) return console.error(err)

//   var Peer = require('simple-peer')
//   var peer = new Peer({
//     initiator: location.hash === '#initiator',
//     trickle: false,
//     stream: stream
//   })

//   peer.on('signal', function (data) {
//     document.getElementById('yourId').value = JSON.stringify(data)
//   })

//   document.getElementById('connect').addEventListener('click', function () {
//     var otherId = JSON.parse(document.getElementById('otherId').value)
//     peer.signal(otherId)
//   })

//   document.getElementById('send').addEventListener('click', function () {
//     var yourMessage = document.getElementById('yourMessage').value
//     peer.send(yourMessage)
//   })

//   peer.on('data', function (data) {
//     document.getElementById('messages').textContent += data + '\n'
//   })

//   peer.on('stream', function (stream) {
//     var video = document.createElement('video')
//     document.body.appendChild(video)
//     video.srcObject = stream;
//     // video.src = window.webkitURL.createObjectURL(stream)
//     video.play()
//   })
// })

//version 2
'use strict';

//just give me video and audio
const mediaStreamConstraints = {
  audio: true,
  video: true
};

//local stream
// Video element where stream will be placed.
const localVideo = document.getElementById('localVideo');
// Local stream that will be reproduced on the video.
let localStream;
// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}
// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}
// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);


// //just give me video, nothing else
// var constraints = {
// 	video: true
// };

// //sets video source to the stream that is returned by getUserMedia
// function successCallback(stream){
// 	var video=document.querySelector("localVideo");
// 	video.src=window.URL.createObjectURL(stream);
// }

// //prints error message to console if it fails
// function errorCallback(error){
// 	console.log("navigator.getUserMedia: ", error);
// 	console.log("oops");
// }