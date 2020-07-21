import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDgtMLGioSVZDG0NMkxShmNqBUIHqqq54k",
    authDomain: "chat-box-app-aa319.firebaseapp.com",
    databaseURL: "https://chat-box-app-aa319.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
