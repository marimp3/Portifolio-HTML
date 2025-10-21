const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const campoNome = document.querySelector('#name');
    const errNome = document.querySelector('#errNome');

    if(campoNome.value.length<3){
        errNome.textContent = 'O nome precisa ter no minino 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        errNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const errEmail = document.querySelector('#errEmail');

    if(!campoEmail.value.match(emailRegex)){
        errEmail.innerHTML = 'Digite um email válido.';
        campoEmail.focus();
        return;
    } else {
        errEmail.innerHTML = '';
    }
     const campoSubject = document.querySelector('#subject');
    const errSubject = document.querySelector('#errSubject');

    if(campoSubject.value.length<5){
        errSubject.textContent = 'O assunto deve ter pelo menos 5 caracteres.';
        campoSubject.focus();
        return;
    } else {
        errSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');
    
    window.alert('Mensagem enviada com sucesso!');

    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMessage.value = '';
});