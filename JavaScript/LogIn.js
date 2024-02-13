let usrnmNode = document.getElementById("usrnm");
let errNode1 = document.getElementById("err1");
let pwdNode = document.getElementById("pwd");
let errNode2 = document.getElementById("err2");
function validate1(){
    errNode1.innerHTML="";
    usrnmNode.style.border="2px green solid";
    usrnmNode.style.backgroundColor='transparent';
    let usrnm = usrnmNode.value;
    if(usrnm===""){
        errNode1.innerHTML="<b>this field is required</b>";
        usrnmNode.style.border="2px red solid ";
        usrnmNode.style.backgroundColor='transparent';
        return false;
    }else{
        return true;
    } 
}
function validate2(){
    errNode2.innerHTML="";
    pwdNode.style.border="2px green solid";
    pwdNode.style.backgroundColor='transparent';
    let pwd=pwdNode.value;
    let regexpress=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if(pwd===""){
        errNode2.innerHTML="<b>this field is required</b>";
        pwdNode.style.border="2px red solid ";
        pwdNode.style.backgroundColor='transparent';
        return false;
    }
    else if(regexpress.test(password)==false){
        errNode2.innerHTML="<b>Password should be alphanumeric with atleast one symbol from !,@,#,$,%,^,&,*</b>";
        pwdNode.style.border="2px red solid ";
        pwdNode.style.backgroundColor='transparent';
        return false;
    }
    else if(pwd.length<3 || pwd.length>8){
        errNode2.innerHTML="<b>Password should have min 3 and max 8 characters</b>";
        pwdNode.style.border="2px red solid";
        pwdNode.style.backgroundColor="transparent"
        return false;
    }else{
         return true;
    }
}
function validateForm1(){
    let st1= validate1();
    let st2= validate2();
    return (st1 && st2);
 
 } 