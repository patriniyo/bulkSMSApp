// const axios = require('axios');
const messageContainer = document.getElementById("message-container");
const generateMessageButton = document.getElementById("button-filter--generate-message");

const displayMessage = (data) => {
    messageContainer.innerHTML = "";
    const messageContent = `Dear <strong>${data.firstName} ${data.lastName}</strong>, Happy <strong>${data.age}</strong>th Birthday. 
    We have noticed that you were born on <strong>${data.birthDay}</strong> and today is <strong>${data.today}</strong>. God bless you abundantly.`
    const message = document.createElement("div");
    message.classList.add('message');
    message.innerHTML = messageContent
    messageContainer.appendChild(message);
}

const loadMessages = async () => {
    const birthDate = document.getElementById("birth-date").value;
    if(birthDate.length == 0) return
    console.log(birthDate)
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/customer/${birthDate}`);
        const customers = response.data;
        console.log(response.data);
        if(customers.length == 0){
            messageContainer.innerHTML = `<p>No birthday on ${birthDate} </p>`
        }
        customers.forEach(customer => {
            displayMessage(customer);
        });
      } catch (error) {
        console.error(error);
      }
}
generateMessageButton.addEventListener('click', loadMessages);
