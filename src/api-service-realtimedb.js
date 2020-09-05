var database = firebase.database();

const addData = (path,data)=>{
    console.log("adding data",path,data);
        database.ref(`${path}/`).set(data);
      
}

const deleteData = (id) =>{

}

const updateData = (id) =>{

}

export {addData};