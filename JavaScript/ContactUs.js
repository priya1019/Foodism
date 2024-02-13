let nameNode = document.getElementById("name");
let errNode1 = document.getElementById("err1");
let emailNode = document.getElementById("email");
let errNode2 = document.getElementById("err2");
let numberNode = document.getElementById("number");
let errNode3 = document.getElementById("err3");
let messageNode = document.getElementById("message");
let errNode4 = document.getElementById("err4");

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
    emailNode.style.border="2px green solid";
    emailNode.style.backgroundColor='transparent';
    let email=emailNode.value;
    let ss=email.substring(email.indexOf('@')+1);
    console.log(ss);
    
    if(email===""){
        errNode2.innerHTML="<b>this field is required</b>";
        emailNode.style.border="2px red solid ";
        emailNode.style.backgroundColor='transparent';
        return false;
    }
    else if(!email.include("@") || ss===''){
        errNode2.innerHTML="<b>invalid email id.</b>";
        emailNode.style.border="2px red solid ";
        emailNode.style.backgroundColor='transparent';
        return false;
    }else{
     return true;
    }
}
function validate3(){
    errNode3.innerHTML="";
    numberNode.style.border="2px green solid";
    numberNode.style.backgroundColor='transparent';
    let number=numberNode.value;
    if(number===""){
        errNode3.innerHTML="<b>this field is required</b>";
        numberNode.style.border="2px red solid ";
        numberNode.style.backgroundColor='transparent';
        return false;
    }
    else if(number>10){
        errNode3.innerHTML="<b>Number should be 10 digit</b>";
        numberNode.style.border="2px red solid ";
        numberNode.style.backgroundColor='transparent';
        return false;
    }
    else {
    return true;
    }
}
function validate4(){
    errNode4.innerHTML="";
    messageNode.style.border="2px green solid";
    messageNode.style.backgroundColor='transparent';
    let message=messageNode.value;
    if(message===""){
        errNode4.innerHTML="<b>this field is required</b>";
        messageNode.style.border="2px red solid ";
        messageNode.style.backgroundColor='transparent';
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
     return (st1 && st2 && st3 && st4);
 
 } 