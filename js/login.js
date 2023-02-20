//step 1 , click button
document.getElementById('btn-login').addEventListener('click', function(){
    //step2 get the email  inside the fill
          const emailFild = document.getElementById('user-email');
          const email = emailFild.value;

// step 3
     const passwordFild = document.getElementById('password');
     const password = passwordFild.value;

     if(email === 'admin@email.com' && password === '123'){
          location.href='bank.html';
     }
     else{
          document.getElementById('statas-text').innerText = "Invalid email or password"
          document.getElementById('btn-login').innerText = "re-try"
     }
})
document.getElementById('my-profile').addEventListener('click',function(){
     location.href="https://www.facebook.com/adnan.fb"
})