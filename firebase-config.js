import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAC_W7HlVyaBSH1kkGchhs4Xg3iz4J4068",
  authDomain: "xeronsymposium2025-aa9e4.firebaseapp.com",
  projectId: "xeronsymposium2025-aa9e4",
  storageBucket: "xeronsymposium2025-aa9e4.appspot.com",
  messagingSenderId: "842011624500",
  appId: "1:842011624500:web:687bb0afaae2a53584f661",
  measurementId: "G-XB0JPMYMYB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app };