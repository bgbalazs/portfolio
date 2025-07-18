
const sendButton = document.getElementById('send-message'); 
const nameInputField = document.getElementById('nameText'); 
const emailInputField = document.getElementById('emailText'); 
const messageInputField = document.getElementById('message'); 

const modal = document.getElementById('myModal'); 
const closeSpan = document.querySelector('.close-button'); 
    

const modalName = document.getElementById('modalName');
const modalEmail = document.getElementById('modalEmail');
const modalMessage = document.getElementById('modalMessage');

function showMessage() {
           
    const name = nameInputField.value;
    const email = emailInputField.value;
    const msg = messageInputField.value;

           
        modalName.textContent = name; 
        modalEmail.textContent = email;
        modalMessage.textContent = msg;

            
        modal.style.display = 'flex';
        }

    sendButton.addEventListener("click", showMessage);

    
    closeSpan.addEventListener("click", () => {
            modal.style.display = 'none';
  nameInputField.value = "";
  emailInputField.value="";
  messageInputField.value="";
        });

     

