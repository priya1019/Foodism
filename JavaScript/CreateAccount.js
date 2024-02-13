
let nameNode = document.getElementById("name");
let errNode1 = document.getElementById("err1");
let usernameNode = document.getElementById("username");
let errNode2 = document.getElementById("err2");
let passwordNode = document.getElementById("password");
let errNode3 = document.getElementById("err3");
let confpasswordNode = document.getElementById("confpassword");
let errNode4 = document.getElementById("err4");
let emailidNode = document.getElementById("emailid");
let errNode5 = document.getElementById("err5");
let addressNode = document.getElementById("address");
let errNode6 = document.getElementById("err6"); 

function validate1(){
    errNode1.innerHTML="";
    nameNode.style.border="2px green solid";
    nameNode.style.backgroundColor='transparent';
    let name=nameNode.value;
    if(name===""){
        errNode1.innerHTML="<b>this field is required</b>";
        nameNode.style.border="2px red solid ";
        nameNode.style.backgroundColor='transparent';
        return false;
    }else{
        return true;
    }
} 
    function validate2(){
        errNode2.innerHTML="";
        usernameNode.style.border="2px green solid";
        usernameNode.style.backgroundColor='transparent';
        let username = usernameNode.value;
        if(username===""){
            errNode2.innerHTML="<b>this field is required</b>";
            usernameNode.style.border="2px red solid ";
            usernameNode.style.backgroundColor='transparent';
            return false;
        }else{
            return true;
        } 
}
function validate3(){
    errNode3.innerHTML="";
    passwordNode.style.border="2px green solid";
    passwordNode.style.backgroundColor='transparent';
    let password=passwordNode.value;
    let regexpress=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if(password===""){
        errNode3.innerHTML="<b>this field is required</b>";
        passwordNode.style.border="2px red solid ";
        passwordNode.style.backgroundColor='transparent';
        return false;
    }
    else if(regexpress.test(password)==false){
        errNode3.innerHTML="<b>Password should be alphanumeric with atleast one symbol from !,@,#,$,%,^,&,*</b>";
        passwordNode.style.border="2px red solid ";
        passwordNode.style.backgroundColor='transparent';
        return false;
    }
    else if(password.length<3 || password.length>8){
        errNode3.innerHTML="<b>Password should have min 3 and max 8 characters</b>";
        passwordNode.style.border="2px red solid";
        passwordNode.style.backgroundColor="transparent"
        return false;
    }else{
         return true;
    }
}
function validate4(){
    errNode4.innerHTML="";
    confpasswordNode.style.border="2px green solid";
    confpasswordNode.style.backgroundColor='transparent';
    let confpassword=confpasswordNode.value;
    let password=passwordNode.value;

    if(confpassword===""){
        errNode4.innerHTML="<b>this field is required</b>";
        confpasswordNode.style.border="2px red solid ";
        confpasswordNode.style.backgroundColor='transparent';
        return false;
    }
    else if(password!=confpassword){
        errNode4.innerHTML="<b>Password should be matched</b>";
        confpasswordNode.style.border="2px red solid ";
        confpasswordNode.style.backgroundColor='transparent';
        return false;
    }else{
         return true;
    }
}
function validate5(){
    errNode5.innerHTML="";
    emailidNode.style.border="2px green solid";
    emailidNode.style.backgroundColor='transparent';
    let emailid=emailidNode.value;
    let ss=emailid.substring(emailid.indexOf('@')+1);
    console.log(ss);
    
    if(emailid===""){
        errNode5.innerHTML="<b>this field is required</b>";
        emailidNode.style.border="2px red solid ";
        emailidNode.style.backgroundColor='transparent';
        return false;
    }
    else if(!emailid.include("@") || ss===''){
        errNode5.innerHTML="<b>invalid email id.</b>";
        emailidNode.style.border="2px red solid ";
        emailidNode.style.backgroundColor='transparent';
        return false;
    }else{
     return true;
    }
}

function validateForm1(){
    let st1= validate1();
    let st2= validate2();
    let st3=validate3();
    let st4= validate4();
    let st5= validate5();
     return (st1 && st2 && st3 && st4 && st5);
 
 } 