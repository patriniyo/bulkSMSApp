import Modal from "./modal.js";

const signupMessageModalElement = document.getElementById("sign-up-message-modal");
const signUpForm = document.getElementById("form-register-user");
const errorMessage = document.getElementById("error-message-sign-up");

const request = async (e) =>{
    e.preventDefault();
    const firstName = document.getElementById('user-firstname').value;
    const lastName = document.getElementById('user-lastname').value;
    const birthDay = document.getElementById('birth-date').value;
    console.log(typeof birthDay)
    console.log(birthDay)
    const response = await fetch('http://localhost:8080/api/v1/customer',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName,lastName,birthDay})
      });
    const data  = await response;
    console.log(data);
    if(data.status == 200){
        const confirmationModal= new Modal(signupMessageModalElement,signUpForm);
        confirmationModal.displayMessage("The customer registered succesfully");
        confirmationModal.setModalTitle("Confirmation");
        confirmationModal.toggleModal();

    }else{

      console.log(data);
        // errorMessage.classList.toggle("show-error-message");
    	  // errorMessage.innerHTML = data.message;
    }
}  

signUpForm.addEventListener('submit', request);
