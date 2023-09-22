import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, connectAuthEmulator, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD4S8p3luYZavoni3WlL-CPT3Vktdtsx3E",
  authDomain: "projecthydroreport.firebaseapp.com",
  databaseURL: "https://projecthydroreport-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projecthydroreport",
  storageBucket: "projecthydroreport.appspot.com",
  messagingSenderId: "45585808372",
  appId: "1:45585808372:web:097aecc95d12542fd5d7a1",
  measurementId: "G-PLCBLY233Z"
});

const auth = getAuth(firebaseApp);
const button = document.querySelector('btnLogin');

// connectAuthEmulator(auth, "http://localhost:9899");

// const loginEmailPassword =async () => {
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;

//   const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
//   console.log(userCredential.user)

// }

// btnLogin.addEventListener("click", loginEmailPassword);




// onAuthStateChanged(auth, user => {
//   if (user == null) {
//     return;
//   }
//   console.log(user);
// });

// btnLogin.addEventListener('click', clickEvent => {
//   signInWithRedirect(auth, new GoogleAuthProvider());
// });
