import { app } from './firebase-config.js';
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userDocRef = doc(db, "User", email);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists() && userDoc.data().role === "admin") {
      localStorage.setItem("isAdmin", "true");
      window.location.href = "dashboard.html";
    } else {
      message.textContent = "You are not authorized as admin.";
    }
  } catch (error) {
    message.textContent = "Login failed: " + error.message;
  }
});