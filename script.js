let nombreIngresado=(prompt("ingresa tu nombre"));
alert("hola " + nombreIngresado);

let cantidad=parseInt(prompt("por favor, indicar cantidad de comensales?"));

if (cantidad <= 5) {
    alert("tienen opciones de postre para elegir invitacion de la casa");
} else if  (cantidad <=9){
    alert ("disfruten de 10% de descuento");
} else if (cantidad <=15){
    alert("tienen 15% de descuento");
} else {
    alert("ponte en contacto con nosotros telefonicamente");
}



    

