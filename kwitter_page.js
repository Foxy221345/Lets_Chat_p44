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
  room_name=localStorage.getItem("room_name");
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    //
 } });  }); }
getData();

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="kwitter.html";
}

function send()
{
 msg=document.getElementById("msg").value;
 console.log(room_name);
 firebase.database().ref(room_name).push(
       {
            name:user_name,
            message:msg,
            like:0 
       }
 );
 document.getElementById("msg").innerHTML="";
}