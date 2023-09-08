//
//
//const firebaseConfig = {
//  apiKey: "AIzaSyACj6cl3xeGBLRA8Tg9xgevFN-jPpXdA8o",
//  authDomain: "mainproject-c5244.firebaseapp.com",
//  databaseURL: "https://mainproject-c5244-default-rtdb.firebaseio.com",
//  projectId: "mainproject-c5244",
//  storageBucket: "mainproject-c5244.appspot.com",
//  messagingSenderId: "596851507396",
//  appId: "1:596851507396:web:d4bbecdf714943f89f0991",
//  measurementId: "G-2TYWGQ2G5Z"
//};
//
//
//// Initialize Firebase
//firebase .initializeApp(firebaseConfig);
//
let getValue=localStorage.getItem("Username");

document.getElementById("usname").innerHTML="Hello "+getValue;

let input1=document.getElementById("input1");
let buton=document.getElementById("buton");
let root=document.getElementById("root");
let backbtn=document.getElementById("backbtn");


//
//function addUser(){
//  var userName=input1.value;
//  firebase.database().ref("/").child(userName).update({
//      purpose:"adding room name"
//  });
//
//

buton.addEventListener("click",function(){
  
    buton.textContent="ADD STUDENT";
    


    let usname=document.createElement("button");
    usname.textContent=input1.value;
    

    root.appendChild(usname);
    let hr=document.createElement("hr");
    root.appendChild(hr)

    

    usname.onclick=function(){
      window.location="new2.html"
    }

    input1.value="";
   

});
backbtn.addEventListener("click",function(){
  window.location="index.html";
});