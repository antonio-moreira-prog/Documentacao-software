// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPzr0pyTyPq5MGFBdqhCxV_wapDPEP2X8",
  authDomain: "documentacao-software-login.firebaseapp.com",
  projectId: "documentacao-software-login",
  storageBucket: "documentacao-software-login.appspot.com",
  messagingSenderId: "126934883227",
  appId: "1:126934883227:web:380837b6799e4203e1df3e",
  measurementId: "G-56XVDH2P9L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };



