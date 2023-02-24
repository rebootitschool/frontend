loginInput = document.querySelector('#login')
passwordInput = document.querySelector('#password')
sendBtn = document.querySelector('#send')

// console.log(loginInput, passwordInput, sendBtn)


// Event


function sendClick() {
    const userCred = {
        login: loginInput.value,
        password: passwordInput.value
    };

    console.log(userCred);

    loginInput.value = '';
    passwordInput.value = '';
}

sendBtn.addEventListener('click', sendClick);

// setTimeout(function() {
//     sendBtn.removeEventListener('click', sendClick);
// }, 3000);

