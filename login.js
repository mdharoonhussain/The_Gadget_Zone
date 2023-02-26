let signup=document.querySelector("form")
let email=document.getElementById("email")
let username=document.getElementById("username")
let password=document.getElementById("password")
let loginarr=JSON.parse(localStorage.getItem("register"))||[]

signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(email.value==""||username.value==""||password.value==""){
        alert("All fields are required. Please complete the form.")
        return
    }
        let obj={
                    email:email.value,
                    username:username.value,
                    password:password.value,
           }
           loginarr.push(obj)
           localStorage.setItem("register",JSON.stringify(loginarr))
           alert("Signup Succesfully")
        
            
   
})
let login=document.getElementById("form2")
let loginemail=document.getElementById("loginemail")
let loginpassword=document.getElementById("loginpassword")
let data=JSON.parse(localStorage.getItem("register"))
login.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formlogin={
        email:loginemail.value,
        password:loginpassword.value,
    }
    console.log(formlogin)
   for(let i=0;i<data.length;i++){
    if(data[i].email==formlogin.email && data[i].password==formlogin.password){
       window.location.replace("index.html")
        return
    }
   }alert("Invalid information")
})





