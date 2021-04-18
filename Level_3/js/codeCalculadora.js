
 //Mostrar en el display el valor del numero al llamar al evento onclick

var cifra =""; //variable de tipo texto. Donde almacenar los valores de las teclas que se van seleccionando

var acumulado = 0;

var operacionCompletada = false;

var primera_operacion = true;

var sumar = false;

var restar = false;

var multiplicar = false;

var dividir = false;


 function mostrar(numero) {
    if(operacionCompletada == true){
        cifra = "";
        operacionCompletada = false;
    }
    document.getElementById("display").value = cifra + numero;//identificar y acceder al objeto al hacer click. Concatena 
    cifra = document.getElementById("display").value; //reasignar el valor de la variable Cifra, según lo que hay mostrado en el 'display'
}

function borrar(){
    primera_operacion = true;
    document.getElementById("display").value = 0; //se asigna el valor 0 en el display de la calculadora
    cifra = ""; //se inicializa con 0 de nuevo
    acumulado = 0; //se resetea a 0 el valor de la variable acumulado
    sumar = false;
    restar = false;
    multiplicar = false;
    dividir = false;
    operacionCompletada = false;
}

function suma(){
    if(primera_operacion == false){ //si no es la primera operación
        if(sumar){
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }else if (restar) {
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        } else if (multiplicar) {
            acumulado = acumulado * parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }else if (dividir) {
            acumulado = acumulado / parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }
    }else{
        acumulado = parseInt(cifra);
        primera_operacion = false; //la variable cambia de estado a false, al haber ya iniciado una primera operacion  con suma
    }
    cifra = "";
    sumar = true;
    restar = false;
    multiplicar = false;
    dividir = false;
}

function resta(){
    if(primera_operacion == false){ //si no es la primera operación,
        if(sumar){
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }else if (restar) {
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        } else if (multiplicar) {
            acumulado = acumulado * parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }else if (dividir) {
            acumulado = acumulado / parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }else if(borrar){

        }
    }else{
        acumulado = parseInt(cifra);
        primera_operacion = false; //la variable cambia de estado a false, al haber ya iniciado una primera operacion  con resta
    }
    cifra = "";
    sumar = false;
    restar = true;
    multiplicar = false;
    dividir = false;
}


function multiplica(){
    if(primera_operacion == false){ 
        if(sumar){
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value = acumulado;
        }else if (restar) {
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        } else if (multiplicar) {
            acumulado = acumulado * parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }else if (dividir) {
            acumulado = acumulado / parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }
     }else{
        acumulado = parseInt(cifra);
        primera_operacion = false; //la variable cambia de estado a false, al haber ya iniciado una primera operacion  con multiplica
    }
    cifra = "";
    sumar = false;
    restar = false;
    multiplicar = true;
    dividir = false;
}


function divide(){
    if(primera_operacion == false){ 
        if(sumar){
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value = acumulado;
        }else if (restar) {
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        } else if (multiplicar) {
            acumulado = acumulado * parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }else if (dividir) {
            acumulado = acumulado / parseInt(cifra);
            document.getElementById("display").value = acumulado; //mostrar el valor acumulado en la pantalla de la calculadora
        }
     }else{
        acumulado = parseInt(cifra);
        primera_operacion = false; //la variable cambia de estado a false, al haber ya iniciado una primera operacion  con divide
    }
    cifra = "";
    sumar = false;
    restar = false;
    multiplicar = false;
    dividir = true;
}


function resultado() { //detectar la operacion que se quiere realizar y hacer el cálculo del resultado
    if(sumar){
        document.getElementById("display").value = acumulado + parseInt(cifra); //coge el valor del acumulado + lo que se encuentra en el display antes de realizar otra operación
    }else if(restar){
        document.getElementById("display").value = acumulado - parseInt(cifra);
    }else if(multiplicar){
        document.getElementById("display").value = acumulado * parseInt(cifra);
    }else if(dividir){
        document.getElementById("display").value = acumulado / parseInt(cifra);
    }
    acumulado = parseInt(document.getElementById("display").value); //almacena en la variable 'acumulado' el valor que se muestra en la pantalla display 
    cifra = acumulado.toString(); 
    operacionCompletada = true;
    sumar = false;
    restar = false;
    multiplicar = false;
    dividir = false;
}









