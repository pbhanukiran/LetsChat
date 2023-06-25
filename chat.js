// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBHSumfcpxNRfjA6AjWANg4W-NLPYY5aOU",
    authDomain: "chat-web-app-8613e.firebaseapp.com",
    projectId: "chat-web-app-8613e",
    storageBucket: "chat-web-app-8613e.appspot.com",
    messagingSenderId: "674964926380",
    appId: "1:674964926380:web:83345534fc5a787d815409"
  };
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;

    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



