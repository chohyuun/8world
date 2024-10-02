// firebase setting
// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {collection, addDoc} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {getDocs} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDBzg-CgJ_rurOKVL3QsX14yfRyat4fy6c",
    authDomain: "world-6960c.firebaseapp.com",
    projectId: "world-6960c",
    storageBucket: "world-6960c.appspot.com",
    messagingSenderId: "892743835529",
    appId: "1:892743835529:web:b4eef016af8ecfb8884b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// firebase.js에 있는 함수, 변수 등을 외부 페이지에서 사용하기 위한 export
export {db, getDocs, collection, addDoc };