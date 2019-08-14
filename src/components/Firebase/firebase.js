import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAVK3VUhSeMZHz_5Goy1GLFfoz9kfKRNE8",
  authDomain: "react-firebase-fun.firebaseapp.com",
  databaseURL: "https://react-firebase-fun.firebaseio.com",
  projectId: "react-firebase-fun",
  storageBucket: "",
  messagingSenderId: "790555634231",
};

class Firebase {
	constructor(){
    app.initializeApp(config);
    this.auth = app.auth();
  }
  
  doCreaterUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => 
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;