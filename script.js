const teclasNumeros = document.querySelectorAll('.numero');
const teclasEspeciales = document.querySelectorAll('.especial');
const igual = document.querySelectorAll('.final');
const pantalla = document.getElementById('pantalla');
const contenedor = document.getElementById('contenedor_Teclas');
let lista = [];
let comprobar = false;
let almacenar = "";
let resultado = "";
let numero = "";

contenedor.addEventListener('click', (e) => {
    if(e.target.getAttribute('class') === 'tecla especial' && pantalla.textContent !== "" && comprobar === false ){
        lista.push(numero);
        numero = "";
        pantalla.innerHTML += e.target.textContent; 
        switch (e.target.textContent) {
            case '+': lista.push("+"); break;
            case '-': lista.push("-"); break;
            case 'x': lista.push("*"); break;
            case '÷': lista.push("/"); break;
        }
        comprobar = true;
        }

    if (e.target.getAttribute('type') === 'button'){
        if(pantalla.textContent == "" && e.target.textContent === '-'){
            pantalla.innerHTML += e.target.textContent;  
            lista.push(e.target.textContent)
            comprobar = true;
        }

        if(e.target.getAttribute('class') === 'tecla numero' && e.target.textContent !== '.'){
            pantalla.innerHTML += e.target.textContent; 
            numero += e.target.textContent;
            comprobar = false;
        }

        if (e.target.getAttribute('class') === 'tecla numero' && e.target.textContent == '.' && !numero.includes('.')) {
            pantalla.innerHTML += e.target.textContent; 
            numero += e.target.textContent;
            comprobar = false;
        }

        if (e.target.getAttribute('class') === 'tecla final') {
            lista.push(numero);
            numero = "";
            resultado = eval(lista.join(''));
            pantalla.textContent = resultado;
        }
    }
})
