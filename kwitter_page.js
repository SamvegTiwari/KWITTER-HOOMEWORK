//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCr2loRqcBsQa7nfTT54rwPPJYgLxcQaOY",
      authDomain: "momento-c40c2.firebaseapp.com",
      databaseURL: "https://momento-c40c2-default-rtdb.firebaseio.com",
      projectId: "momento-c40c2",
      storageBucket: "momento-c40c2.appspot.com",
      messagingSenderId: "238605807191",
      appId: "1:238605807191:web:3853e7b911f48f7a057d12"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("nils");
room_name=localStorage.getItem("newrooms");