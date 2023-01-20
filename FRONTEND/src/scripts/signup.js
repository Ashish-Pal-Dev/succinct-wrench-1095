// JUMP TO LOGIN PAGE
let btn=document.getElementById("jumptologin");
btn.addEventListener("click",()=>{
    window.location.assign('login.html')
})

// REGISTER THE USER
let form=document.getElementById("loginForm");
form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    let username=`${fname} ${lname}`;
    let userObj={username,email,password};
    try {
        let req=await fetch("http://localhost:5050/users/register",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userObj)
        });
        if(req.ok){
            alert('Registered successfully.');
            window.location.assign('login.html');
        }
    } catch (error) {
        console.log(error);
    }
})