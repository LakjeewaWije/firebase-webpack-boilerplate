// import {initializeFirebase} from './firebase';
// initializeFirebase();
import {addData} from './api-service-realtimedb';
import {addDataF} from './api-service-firestore';
import './style.css';

function component() {
   console.log("Init Component vv");
   let arr = [10,20,45,30,8];
   console.log("initial array ",arr);
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
   }
   
   console.log("final array ",arr);
//    initializeFirebase();
   let data = {
    username: "name1",
    email: "email",
    profile_picture : "imageUrl"
  };
   addData("users",data);
   addDataF();
  }

  component();
