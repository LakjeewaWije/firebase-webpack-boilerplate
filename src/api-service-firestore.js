var db = firebase.firestore();
const addDataF = (path,data)=>{
db.collection("users").add({
    first: "Ada7",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

export {addDataF}