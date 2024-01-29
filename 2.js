const emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function emailValidator(email){
    return emailPattern.test(email);
}

let email = 'kharenitin@gmail.com';
if(emailValidator(email)){
    console.log(true);
}
else{
    console.log(false);
}