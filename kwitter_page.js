const firebaseConfig = {
    apiKey: "AIzaSyC_IU4AvZd2sNsnmgaV1ujOcIZVuWZC6dM",
    authDomain: "kwitter-db-add40.firebaseapp.com",
    databaseURL: "https://kwitter-db-add40-default-rtdb.firebaseio.com",
    projectId: "kwitter-db-add40",
    storageBucket: "kwitter-db-add40.appspot.com",
    messagingSenderId: "589339952433",
    appId: "1:589339952433:web:66141cf5466b923e64dc10"
  };
  firebase.initializeApp(firebaseConfig);

//LINKS FIREBASE

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
Name = messageData['name'];
message = messageData['message'];
like = messageData['like'];
nameWithTag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
likeButton = "<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span></button><hr>"

row = nameWithTag +likeButton + spanWithTag;
document.getElementById("output").innerHTML += row;
//Fim do código
 } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });
}

function updateLike(messageId)
{
  console.log("botão like pressionado - " + messageId)
  button_id = messageId;
  likes = document.getElementById(button_id).value;
  updatedLikes = Number(likes) + 1
  console.log(updatedLikes);

  firebase.database().ref(roomName).child(messageId).update({
    like : updatedLikes 
  });
}

function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "index.html"
}
