import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
getAuth,
onAuthStateChanged,
setPersistence,
browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyAQnexePSWAJdgZc2WO2BFKL8Z_jnDKbqE",
authDomain: "yamonfilm-fead8.firebaseapp.com",
projectId: "yamonfilm-fead8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/* 🔥 SESSION GLOBALE (IMPORTANT) */
setPersistence(auth, browserLocalPersistence);

/* 🔐 FONCTION GLOBALE */
export function requireAuth(callback) {
onAuthStateChanged(auth, (user) => {
if (!user) {
window.location.href = "login.html";
return;
}
callback(user);
});
}
