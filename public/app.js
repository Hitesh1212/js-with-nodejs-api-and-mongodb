function validate () {
   let name = document.querySelector("#name").value;
   let phone = document.querySelector("#phone").value;
   let email = document.querySelector("#email").value;
   let designation = document.querySelector("#designation").value;
   let company = document.querySelector("#company").value;
   let query = document.querySelector("#query").value;
   let file = document.querySelector("#file").value;
    
    
   // console.log(email);

    // error validate
    var name_err=document.querySelector('#err_name');
    var phone_err = document.querySelector('#err_phone');
    var email_err = document.querySelector('#err_email');
    var name_check=false;
    var phone_check=false;
    var email_check = false;

    // name validation
    if(name==''){
        name_err.style.display='block';
        name_err.innerHTML='plz fill name';
        name_check=false;
    }else{
         if(name.length <='3'){
            name_err.style.display='block';
            name_err.innerHTML='name must be greater than 3 character';
            name_check=false;
            }else{   
              //  console.log(name);        
              name_err.style.display='none';
              //console.log(c);
              
              
              name_check=true;
            }
    }
    // phone validation
    if(phone ==''){
        phone_err.style.display='block';
        phone_err.innerHTML='plz enter ur phone number';
        phone_check=false;
    }else{
         if(phone.length =='10'){
           // console.log(phone);        
            phone_err.style.display='none';
            phone_check = true;
            }else{   
                phone_err.style.display='block';
                phone_err.innerHTML='phone must contain 10 digit';
                phone_check=false;
              //console.log(c);
              
            }
    }

    // email validation
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if(email == '') {
        email_err.style.display = 'block';
        email_err.innerHTML = 'plz enter your email';
        email_check= false;
    } else {
        if (atpos<1 || dotpos<atpos+2 || dotpos +2>= email.length){
            
            email_err.style.display='block';
            email_err.innerHTML='invalid email';
            
            email_check = false;
        }
        else {
            email_err.style.display='none';
               // email_err.innerHTML='invalid email';
                email_check=true;
               // console.log(email);
        }
    }

    if(name_check == true &&  phone_check== true && email_check == true) {
        

         fetch('http://localhost:3000/api/addData', {
            method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({
                 full_name: name,
                 phone: phone,
                 email: email,
                 designation: designation,
                 company: company,
                 query: query
             }),
             credentials: 'include'
         } ).then((response) => {
             return response.json();
         }).then((json) => {
             console.log('data response: ', json);
         }).catch((err) => {
             console.log('catched response: ', err);
         })
        console.log(name);
        console.log(phone);
        console.log(email);
        console.log(designation);
        console.log(company);
        console.log(query);

    }
}


//validate();