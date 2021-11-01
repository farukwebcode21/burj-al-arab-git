
import { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const auth = getAuth();


const useFirebase = () => {
    const provider = new GoogleAuthProvider();



     const [user, setUser] = useState({});
     const [error, setError] = useState('');

     const signInUsingGoogle = () => {
         signInWithPopup(auth, provider)
         .then(result => {
             setUser(result.user);
         })
             .catch(error => {
                 setError(error.message);
         })

     }
     return {
         user,
         error,
         signInUsingGoogle
     }

 }

export default useFirebase;