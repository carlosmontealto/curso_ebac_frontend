const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');
let validacaoFormulario = false;

function validaNumeros(A, B){
    let valorA = parseInt(A);
    let valorB = parseInt(B); 
    if (valorA>valorB){
        return false;
    } else{
        return true;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const mensagemSucesso = `Os Valores foram posicionados corretamente. Os valores de ${valorA.value} e ${valorB.value} foram enviados.`;
    if (validacaoFormulario){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    } else {
        valorA.classList.add('error');
        valorB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }

})

valorB.addEventListener('keyup', function(e){
    validacaoFormulario = validaNumeros(valorA.value, e.target.value);

    if (!validacaoFormulario) {
        valorA.classList.add('error');
        valorB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        valorA.classList.remove('error');
        valorB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})