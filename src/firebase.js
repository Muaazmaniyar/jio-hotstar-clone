import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBgmvsRL6izHOueIYViy8A0VIO_GyvXets",
  authDomain: "jiohotstar-clone.firebaseapp.com",
  projectId: "jiohotstar-clone",
  storageBucket: "jiohotstar-clone.firebasestorage.app",
  messagingSenderId: "682645333362",
  appId: "1:682645333362:web:4aeb056dc76b45aa03a9eb",
  measurementId: "G-SNP26LJ1YJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, };


