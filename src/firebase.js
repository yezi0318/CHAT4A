import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9HrZ3izWiSNCfyMGD2giCHW9igFh1Xf4',
  authDomain: 'chat-dee2a.firebaseapp.com',
  projectId: 'chat-dee2a',
  storageBucket: 'chat-dee2a.appspot.com',
  messagingSenderId: '67345361001',
  appId: '1:67345361001:web:20daaef0ff8b7ea7d59af8',
  measurementId: 'G-3ST15L9E3T',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
