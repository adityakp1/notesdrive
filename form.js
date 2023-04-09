const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.register-link')
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})


// Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyDynEt_UV4EULxOFSoGU167YLPZrZ9l9zs",
    authDomain: "notesdrive-243a7.firebaseapp.com",
    projectId: "notesdrive-243a7",
    storageBucket: "notesdrive-243a7.appspot.com",
    messagingSenderId: "1048421238550",
    appId: "1:1048421238550:web:5f994e9d560023a91af237",
    measurementId: "G-NZ5JLKGW82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://notesdrive-aietm.me","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        email : getId('email'),
        password : getId('password')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
