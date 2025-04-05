import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    const serviceAccount =
      process.env.FIREBASE_PRIVATE_KEY &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PROJECT_ID
        ? {
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          }
        : require("../serviceAccount.json"); // 🔁 fallback to local key (adjust path if needed)

    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
