//Calculo de años restantes para jubilación con año de nacimiento.

function calcularJubilacion(yearNaci, nombre){
 
 edad = 2020 - yearNaci;
 jubilacion = 65 - edad;
    return  nombre + ' se jubilara en ' + jubilacion + ' años.';
}

console.log(calcularJubilacion(1990, 'Gonzalo'));

//Calculo de años restantes para jubilación con edades.
function calcularJubilaciones(edades,nombres){

jubilaciones = 65 - edades;
   console.log(nombres + ' se jubilara en ' + jubilaciones + ' años.');
}

calcularJubilaciones(30, 'Gonzalo');