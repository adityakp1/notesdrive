// Initialize Firebase
const firebaseConfig = {
    // add your Firebase config here
    apiKey: "AIzaSyDynEt_UV4EULxOFSoGU167YLPZrZ9l9zs",
    authDomain: "notesdrive-243a7.firebaseapp.com",
    projectId: "notesdrive-243a7",
    storageBucket: "notesdrive-243a7.appspot.com",
    messagingSenderId: "1048421238550",
    appId: "1:1048421238550:web:5f994e9d560023a91af237",
    measurementId: "G-NZ5JLKGW82"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Save message to Firebase
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    db.collection('messages').add({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function () {
        alert('Thank you for your message.');
        document.getElementById('contact-form').reset();
    }).catch(function (error) {
        alert('An error occurred. Please try again later.');
        console.error(error);
    });
});
