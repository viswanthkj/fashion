import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGrvHs6tvkSTfe3P5C8PI829NdRvTzUes",
  authDomain: "fashion-796ce.firebaseapp.com",
  databaseURL: "https://fashion-796ce.firebaseio.com",
  projectId: "fashion-796ce",
  storageBucket: "fashion-796ce.appspot.com",
  messagingSenderId: "1043330253215",
  appId: "1:1043330253215:web:6c77734ba9a49e6f78fdaa",
  measurementId: "G-E45ZNGMTQE"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async(userAuth, additionalData)  => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

 

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;