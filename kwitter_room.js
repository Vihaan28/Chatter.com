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

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! " ;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
var row = "<div class = 'room_name' id=" + Room_names + "onclick='toroomname(this.id)' > #" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;  
      //End code
      });});}
getData();

function toroomname(name)
{

      console.log(name);
      localStorage.setitem("room_name" , name);
      window.location = "chatter_page.html";
}

function addroom()
{

var room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({

      purpose : "adding room name "
});

localStorage.setItem("room_name" , room_name);

window.location = "chatter_page.html";

}

function logout(){

      window.location = "index.html";
      
      localStorage.removeItem("user_name");

      localStorage.removeItem("room_name");
}