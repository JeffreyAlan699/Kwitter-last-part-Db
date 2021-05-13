var firebaseConfig = {
      apiKey: "AIzaSyCrDIBn-oTfNShiEXQvFnOIiL2o7Zg90AI",
      authDomain: "class-94-e20b0.firebaseapp.com",
      databaseURL: "https://class-94-e20b0-default-rtdb.firebaseio.com",
      projectId: "class-94-e20b0",
      storageBucket: "class-94-e20b0.appspot.com",
      messagingSenderId: "489555332524",
      appId: "1:489555332524:web:58fced1c2010aa53347e09",
      measurementId: "G-TX9PWL2P6L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("Message").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("Message").innerHTML = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}