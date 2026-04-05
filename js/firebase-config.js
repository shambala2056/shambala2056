// ─────────────────────────────────────────────────────────────
//  FIREBASE CONFIG — Shambala2056 CS2 Academy
//  1. console.firebase.google.com дээр шинэ төсөл үүсгэх
//  2. Project Settings → Your apps → Web app нэмэх
//  3. Доорх утгуудыг тань Firebase config-ээр солих
// ─────────────────────────────────────────────────────────────

import { initializeApp }    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }          from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }     from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);
