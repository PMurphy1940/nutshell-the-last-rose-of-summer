
const jsonUrl = 'http://localhost:8088/'

const API = {
    getSingleUser (userId) {
        return fetch(`${jsonUrl}users/${userId}`)
                .then(response => response.json())
    },
    getAllUsers () {
        return fetch(`${jsonUrl}users`)
                .then(response => response.json())
    },
    saveUser (newUserObj) {
        return fetch(`${jsonUrl}users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserObj)
        }).then(response => response.json())
    },
    getUserData (userId) {
        return fetch(`${jsonUrl}users/${userId}?_embed=friends&_embed=messages&_embed=articles&_embed=events&_embed=tasks`)
                .then(response => response.json())
    }
}


export default API