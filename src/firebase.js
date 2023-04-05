import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDYj3NUHjlj8WKd2iLLDlvZGV-AkuxrpRY',
    authDomain: 'realtime-chat-ta.firebaseapp.com',
    projectId: 'realtime-chat-ta',
    storageBucket: 'realtime-chat-ta.appspot.com',
    messagingSenderId: '158600501859',
    appId: '1:158600501859:web:a77dcd2ec7c2f59ebf3656',
    measurementId: 'G-GLKGFP91ZQ',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
