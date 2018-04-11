var creditCard = prompt("Ingrese el numero de tarjeta: "); // Ingreso del numero de tarjeta mediante un prompt.

fuction isValidCard(){

  var creditCardRev = (creditCard.split("")).reverse();
  var pairNumb = []; //Variable para guardar numeros en posicion par del array.

  for (var i=0; i<creditCardRev.length; i++){

    if(i%2 !== 0){ //Condicion para obtener los numeros de las posiciones pairNumb
      var multip = creditCardRev[i]*2; //Se multiplican los numeros y se invierten.

      if (multip >= 10){ //Condicion para verificar los numeros >=10.
        var sum = 0; //Variable para indicar el numero de inicio 0.

  while (multip) { //Condicion para los numeros en posicion par que multiplicados sean > 10.
    sum += multip % 10; //Se extrae el residuo del numero % 10.
    multip = Math.floor(multip/10); //Redondear el cociente de la division con Math.floor.
    }

    pairNumb.push(sum) //Se colocan los numeros en posicion par de la variable sum.
  }else{
    pairNumb.push(multip) //Se colocan los numeros en posicion impar de la variable multip.
    //}
  }else{
    pairNumb.push(parseInt(creditCardRev[i])); //Se convierte el String en entero y se coloca en el Array.
  }

  var numberToValidate = 0; //Se crea la variable para dar un valor al inicio.
  for (var j=0; j<pairNumb.length; j++){ //Iterar los numeros pairNumb
    numberToValidate += pairNumb[j]; //Se concatenan los numeros.
  }

  if (numberToValidate % 10 === 0){ //Si la suma de todos los numeros divididos entre 10 da 0:
    return "El numero de tarjeta es valido"; //Regresa si el numero de tarjeta es valido.
  }else{
    return "El numero de tarjeta es invalido"; //Regresa si el numero de tarjeta es invalido.
  }
   return numberToValidate;
  }

document.write(isValidCard(creditCard)); //Escribe en el navegador si el numero de la tarjeta es valido o invalido.
    //}
  }
}
