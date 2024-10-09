
let LlistaDejugadors = [];

// agregar Jugador a la lista//

 function AfegirJugador() {

    let jugador = document.getElementById("camp_nom").value;
    document.getElementById("jugadors").innerHTML +=  `${jugador} <br>` ;

    LlistaDejugadors.push(jugador); 
   
   
    
 }
 // mover el jugador a la lista//
 function SegüentJugador() {
 // llevar el nombre del jugador 
   document.getElementById("jugador_següent").innerHTML =LlistaDejugadors[0];
   
   let jugador_actual = LlistaDejugadors.shift();

   LlistaDejugadors.push(jugador_actual);

   document.getElementById("jugadors").innerHTML =  " " ;

   for (let i = 0;i<LlistaDejugadors.length;i++) {

      document.getElementById("jugadors").innerHTML +=  `${LlistaDejugadors[i]} <br>` ;
   }

 }