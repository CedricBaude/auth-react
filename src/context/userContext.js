import { createContext, useState, UseEffect } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase-config"
import { useEffect } from "react";

export const UserContext = createContext()

export function UserContextProvider(props) {

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
        })
        return unsubscribe;
    }, [])

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);

    //modal
    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    })

    const toggleModals = modal => {
        if (modal === "signIn") {
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if (modal === "signUp") {
            setModalState({
                signUpModal: true,
                signInModal: false
            })
        }
        if (modal === "close") {
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }
    return (
        <UserContext.Provider value={{ modalState, toggleModals, signUp, currentUser }}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}