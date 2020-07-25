//Declare variables
let btn = document.getElementById('btn');
let name = document.getElementById('name');
let email = document.getElementById('email');  
let subject = document.getElementById('subject');  
let msg = document.getElementById('msg');
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

btn.addEventListener('click', (e) => {
    e.preventDefault()
    //checking input Data
    if(name.value == '' || name.value == null ){
        alert('Please fill out Name')
        name.focus();
    }
    else if(email.value == '' || email.value == null || regex.test(email.value) == false){
        alert('Please Write correct Email')
        email.focus();
    }
    else if(subject.value == '' || subject.value == null ){
        alert('Please fill out Subject')
        subject.focus();
    }
    else if(msg.value == '' || msg.value == null){
        alert('Please fill out Message')
        msg.focus();
    }
    else{
        //implememt user Data in UI
        document.querySelector('#userData').innerHTML = `These is your Data:<br> <u>Name:</u>  ${name.value}.<br> <u>Email:</u>  ${email.value}<br> <u>Subject:</u>  ${subject.value}.<br> <u>Message:</u>  ${msg.value}.`

        //reset value of Contact form
        name.value = '';
        email.value = '';
        subject.value = '';
        msg.value = ''; 
    }  
})