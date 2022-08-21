/*Representacion de turnos de una sala de ensayo
Los turnos son sabados y domingos desde las 14hs hasta las 18 hs. Cada turno es de 2 horas
0 significa libre, 1 es ocupado*/

let sab14=0;
let sab16=0;
let sab18=0;

let dom14=0;
let dom16=0;
let dom18=0;

let nombre;
let banda;
let genero;
let integrantes;



function solicitarDatos(){
    nombre=prompt("Nombre y apellido");
    banda=prompt("Nombre de la banda");
    genero=prompt("Género que tocan");
    integrantes=prompt("Cantidad de integrantes");
}

function mostrarDatos(banda,genero,integrantes){
    alert("Se confirma la reserva con los siguientes datos: \n Banda: "+banda+ "\n Género musical: "+genero+"\n Cantidad de integrantes: "+integrantes);

}

while(true){
    let entrada= prompt("Seleccione el horario en el que desea ocupar la sala de ensayo. \n 1 = Sábado 14 a 16 hs \n 2 = Sábado 16 a 18 hs \n 3 = Sábado 18 a 20 hs \n 4 = Domingo 14 a 16 hs \n 5 = Domingo 16 a 18 hs \n 6 = Domingo 18 a 20 hs");
    switch (entrada){
        case "1":
            alert("Seleccionaste el horario Sábado de 14 a 16 hs \n Ahora chequearemos si está disponible");
            if(sab14==0){
                alert("El horario está disponible");
                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                if (resp=="S" || resp=="s"){
                    solicitarDatos();
                    sab14=1;
                    mostrarDatos(banda,genero,integrantes);
                }
            }else{
                alert("El horario no está disponible")
            }
            break;
        case "2":
            alert("Seleccionaste el horario Sábado de 16 a 18 hs \n Ahora chequearemos si está disponible");
            if(sab16==0){
                alert("El horario está disponible")
                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                if (resp=="S" || resp=="s"){
                    solicitarDatos();
                    sab16=1;
                    mostrarDatos(banda,genero,integrantes);
                }
            }else{
                alert("El horario no está disponible")
            }
            break;
        case "3":
            alert("Seleccionaste el horario Sábado de 18 a 20 hs \n Ahora chequearemos si está disponible");
            if(sab18==0){
                alert("El horario está disponible");
                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                if (resp=="S" || resp=="s"){
                    solicitarDatos();
                    sab18=1;
                    mostrarDatos(banda,genero,integrantes);
                }
            }else{
                alert("El horario no está disponible")
            }
            break;
        case "4":
            alert("Seleccionaste el horario Domingo de 14 a 16 hs \n Ahora chequearemos si está disponible");
            if(dom14==0){
                alert("El horario está disponible");
                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                if (resp=="S" || resp=="s"){
                    solicitarDatos();
                    dom14=1;
                    mostrarDatos(banda,genero,integrantes);
                }
            }else{
                alert("El horario no está disponible")
            }
            break;
        case "5":
            alert("Seleccionaste el horario Domingo de 16 a 18 hs \n Ahora chequearemos si está disponible");
            if(dom16==0){
                alert("El horario está disponible");
                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                if (resp=="S" || resp=="s"){
                    solicitarDatos();
                    dom16=1;
                    mostrarDatos(banda,genero,integrantes);
                }
            }else{
                alert("El horario no está disponible")
            }
            break;
        case "6":
            alert("Seleccionaste el horario Domingo de 18 a 20 hs \n Ahora chequearemos si está disponible");
            if(dom18==0){
                alert("El horario está disponible");
                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                if (resp=="S" || resp=="s"){
                    solicitarDatos();
                    dom18=1;
                    mostrarDatos(banda,genero,integrantes);
                }
            }else{
                alert("El horario no está disponible")
            }
            break;
        default:
            alert("La opción ingresada no es válida");
            break;
    }

}