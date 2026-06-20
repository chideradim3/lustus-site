import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ─────────────────────────────────────────────────────────────────
// PASTE YOUR FIREBASE CONFIG HERE
// Get it from: Firebase Console → Project Settings → Your apps → Web app
// ─────────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyAbC6l2KAs-hhKt9TGspwxInsOGMFmYE0s",
  authDomain: "lustus-trading.firebaseapp.com",
  projectId: "lustus-trading",
  storageBucket: "lustus-trading.firebasestorage.app",
  messagingSenderId: "836070228449",
  appId: "1:836070228449:web:08218026d6737dd30912a0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
