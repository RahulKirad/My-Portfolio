function validate(){
    var username = document.getElementById('username').value 
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value
    
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkcpasswordmatch(cpassword, password)

}

function checkusername(username){
    if(username.length > 7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error' , 'success')
        document.getElementById('username_erorr').innerHTML=''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_erorr').innerText='Enter Valid 8 letters long Username'
        
    }
   
}

function checkemail(email)
{
    if(email.length > 8 && email.includes('@gmail'))
        {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error' , 'success')
        document.getElementById('email_erorr').innerHTML=''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_erorr').innerText='Enter Valid email'
        
    }
   
}
function checkpassword(password)
{
    if(password.length > 8 && password.includes('@')){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error' , 'success')
        document.getElementById('password_erorr').innerHTML=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_erorr').innerText='password must be 8 letter long and should have special character'
        
    }
   
}
function checkcpasswordmatch(password, cpassword){
    if( cpassword == password && password!=''){
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error' , 'success')
        document.getElementById('cpassword_erorr').innerHTML=''
    }
    else
    {
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_erorr').innerText='Password Not match'
        
    }

}

