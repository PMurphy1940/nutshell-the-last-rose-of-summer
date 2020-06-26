import API from "./data.js"
import session from "./sessionStorage.js"


export default {
    
    login (userName, password) {

        //calls all users to compare username an password to login the correct individual
        API.getAllUsers()
            .then( users => users.find( user => {
                //compare all existing usernames and passwords to locate user
                if (user.password === password && user.userName === userName){
                    session.storeUser(user.id)
                    console.log(user)
                    console.log(userName)
                    console.log(password)
                }
            }))

    },
    signUp (newUser) {
        let duplicateEmail = false;
        let duplicateUsername = false;
        API.getAllUsers()
            .then(users => {
                //iterates through users to confirm unique username and email
                users.forEach( user => {

                    if (user.email === newUser.email) {
                        alert("That email is already in use.")
                        duplicateEmail = true;
                    } else if (user.userName === newUser.userName) {
                        alert("That username is already in use.")
                        duplicateUsername = true;
                    }
                
                })
                //if username and email are unique, we move to the fetch call
                if (duplicateEmail === false && duplicateUsername === false) {
                    API.saveUser(newUser)
                        .then(user => session.storeUser(user.id))
                        .then(console.log(sessionStorage))
                }
            })

    }


}