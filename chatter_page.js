var firebaseConfig = {
      apiKey: "AIzaSyBxnCZ6rJyqf8b3rez9KwxYAgnwA8sup0c",
      authDomain: "chatter-99486.firebaseapp.com",
      databaseURL: "https://chatter-99486-default-rtdb.firebaseio.com",
      projectId: "chatter-99486",
      storageBucket: "chatter-99486.appspot.com",
      messagingSenderId: "695732855358",
      appId: "1:695732855358:web:92ae4f68d1f135fe91a76f"
    };
  firebase.initializeApp(firebaseConfig);
  var user_name = localStorage.getItem("user_name");
  var room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

var name = message_data ['name'];
var message = message_data ['message'];
var like = message_data ['like'];

var name_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
var message_tag = "<h4 class='message_h4'>" + message + "</h4>";
var like_tag = "<button class='btn btn-warning' id=" + firebase_message_id + " value =" +like+" onclick='updateLike(this.id)'>";
var span_with_tag = "<span class = ' glyphicon glyphicon-thumbs-up'>" + like + "</span></button><hr>";

var row = name_tag + message_tag + like_tag + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();


function updateLike(message_id)
{
console.log("clicked on like button -" + message_id);
var button_id = message_id;

var likes = document.getElementById(button_id).value;
var update_likes = Number(likes) +1;
console.log(update_likes);

firebase.database().ref(room_name).child(message_id).update({
      like : update_likes
});
}

function send(){

      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

   name:user_name , 
   message:msg,
   like:0

      });

      document.getElementById("msg").value="";

}

function logout(){

      window.location = "index.html";
      
      localStorage.removeItem("user_name");

      localStorage.removeItem("room_name");
}


