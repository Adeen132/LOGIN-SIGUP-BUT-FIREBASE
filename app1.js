import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzduMzGpyY_xKKx9PtAHlVKZeiPCBfHHM",
  authDomain: "adeen-9b41e.firebaseapp.com",
  projectId: "adeen-9b41e",
  storageBucket: "adeen-9b41e.appspot.com",
  messagingSenderId: "694179152775",
  appId: "1:694179152775:web:cd356183147e6df75a8922",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

let register_btn = document.getElementById("login_btn");

register_btn.addEventListener("click", function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("signup ===>", user);
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error ===>", errorMessage);
      // ..
    });
});
