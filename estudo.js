// console.log("Console: Alô Mundo...");
// alert("Alerta: Alô mundo...");
let tabuada = 4;


function meChame(){
   document.write("Tabuado do " + tabuada + "<br>");
   document.write(tabuada + " x 1 = " + (tabuada*1) +"<br>");
@@ -15,3 +16,21 @@ function meChame(){
   document.write(tabuada + " x 9 = " + (tabuada*9) +"<br>");
   document.write(tabuada + " x 10 = " + (tabuada*10) +"<br>");
}


function minhaTabuada(){
   for(var i=1; i <= 10; i++){

      for(var j = 1; j <=10; j++){
         document.write(i + " x " + j + " = " + (i*j) +"<br>");
      }

      document.write("<br><br>");
   }
}

function quadrado(){
   for(var i = 2; i < 21; i++){
      document.write("O quadrado de " + i + " é " + (i*i) + "<br>");
   }
}
