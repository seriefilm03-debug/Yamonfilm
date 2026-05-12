import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
getAuth,
setPersistence,
browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyAQnexePSWAJdgZc2WO2BFKL8Z_jnDKbqE",
authDomain: "yamonfilm-fead8.firebaseapp.com",
projectId: "yamonfilm-fead8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

/* 🔥 OBLIGATOIRE */
setPersistence(auth, browserLocalPersistence);
