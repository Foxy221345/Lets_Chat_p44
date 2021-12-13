const firebaseConfig = {
  apiKey: "AIzaSyCeQt5dkB4pYRpqutZMCM5U8WRMe2WzP6A",
  authDomain: "letschat-ee1a9.firebaseapp.com",
  databaseURL: "https://letschat-ee1a9-default-rtdb.firebaseio.com",
  projectId: "letschat-ee1a9",
  storageBucket: "letschat-ee1a9.appspot.com",
  messagingSenderId: "46863036200",
  appId: "1:46863036200:web:aecc354453bf680aa66a1d",
  measurementId: "G-PE0N04C4NH"
};


firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});
}
getData();

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name );
     window.location="kwitter_page.html"; 
}
