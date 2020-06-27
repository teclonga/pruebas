var aluPablo = 'Pablo';
var aluMaria =' María';

var notasPablo = new Array(14,8,16);
var notasMaria = new Array(12,18,10);

var promedioPablo = notasPablo[0] + notasPablo[1] + notasPablo[2] / 3
var promedioMaria = notasMaria[0] + notasMaria[1] + notasMaria[2] / 3


if(promedioPablo < promedioMaria){

    console.log('María tiene el promedio más elevado que Pablo.');
}else{
    console.log('Pablo tiene el promedio más elevado que María.');
}
for(i = 1; i <= 2; i++){
 if(i === 1){
   console.log('El promedio de Pablo es:' + promedioPablo);
   if(promedioPablo > 13){
       console.log('Pablo esta aprobado.');
   }else{
       console.log('Pablo esta suspenso.');
   }
   
 }else{
     console.log('El promedio de María es: ' + promedioMaria);
     if(promedioMaria > 13){
         console.log('María esta aprobada.');
     }else{
         console.log('María esta suspensa.');
     }
 }
}