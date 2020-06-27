/*******  ***********
Sentencias if / else
*********************

var nombre ='Pablo';
var estadoCivil = 'Soltero';

if (estadoCivil === 'Casado'){

console.log(nombre + ' esta casado.');
}else{

    console.log(nombre + ' esta ' + estadoCivil );
}
*/
/*******
 * multiples if 
 
var nombre = 'Pablo';
var edad = 15;

//edad < 12 es un niño.
//edad > 11 pero < 18 es un adolescente.
//edad > 17 pero < 60 es un adulto.
//edad >60, es un anciano.

if (edad < 12){

    console.log(nombre +' es un niño.');

}else if ((edad > 11) && (edad < 18) ){
    
    console.log(nombre + ' es un adolescente.');

}else if ((edad > 17) && (edad < 60)){

    console.log(nombre + 'es un adulto.');
}else{

    console.log(nombre +' es un anciano.');
}*/
/************************
 * sentencias ternarias
 
var nombre = 'Pablo';
var edad = 32;

edad >= 18 ? console.log(nombre + ' es mayor de edad.') : console.log(nombre + ' no es mayor de edad.');
*/

/* Switch *********

var mes = 3;
switch(mes){
case 1:
    console.log('Enero');
    break;
case 2:
    console.log('Febrero');
    break;
case 3:
    console.log('Marzo');
    break;
case 4:
    console.log('abril');
    break;
default:
    console.log('ese que mes es pishurra?');
    break;
}
*/
/********
 * Sentencia for!!!
 
for (i = 0; i <=10; i++){
    console.log(i);

}
*****************************/

/************Sentencia While */
/* 
var i = 1;

 while(i <= 10){

    console.log(i);

    i++;

 } */

 /********DO WHILE!!!! */
/*
 var i = 1;

 do{
   console.log(i);
   i++;

 }while(i <= 10)
*/




