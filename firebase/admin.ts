import {
  initializeApp,
  getApps,
  cert,
  ServiceAccount,
} from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Import the full service account file
import localServiceAccount from "../serviceAccount.json";

function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    // Build service account from env, or fallback to the local JSON
    const serviceAccount: ServiceAccount =
      process.env.FIREBASE_PRIVATE_KEY &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PROJECT_ID
        ? {
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          }
        : (localServiceAccount as ServiceAccount); // typecast to fix TS error

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
