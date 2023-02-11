let encabezados ="";

window.onclick = function() {
    // crea una serie de elements por cada tag
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("quieres ser mi moorrit@");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}

// tipos de datos en jaaavascript
let variable = 42; // numero entero o int
console.log(typeof variable);

variable = 42; // string o cadena de caracteres, que son letras y de números, por lo que si pones un string se concatenaran, en cambio si lo cambias por un numero se sumarán
console.log(variable + variable);
variable = !false; //booleano, solo puede ser sio no, falso o verdadero, no obstante si añades un signo de admiración ! se convierte en un operador, el cual realizará operaciones, dentro con uno dos o hasta tres valores, ya sea suma resta multiplicación o división, en este caso el signo ! es un operador de negación o de complemento, lo que haces es cambiarlo al otro valor 
console.log(variable);