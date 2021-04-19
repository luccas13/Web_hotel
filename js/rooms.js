var aux1 = 0;
var aux2 = 0;
var aux3 = 0;
var room1 = document.getElementById("room1");
var room2 = document.getElementById("room2");
var room3 = document.getElementById("room3");
var btn1_izq = document.getElementById("btn1_izq");
var btn1_der = document.getElementById("btn1_der");
var btn2_izq = document.getElementById("btn2_izq");
var btn2_der = document.getElementById("btn2_der");
var btn3_izq = document.getElementById("btn3_izq");
var btn3_der = document.getElementById("btn3_der");


    function change_1_izq(){
        if (aux1 == 1) {
            room1.src = "img/room_1.png";
            aux1 -= 1;
        }
        else if (aux1 == 2) {
            room1.src = "img/room_5.png";
            aux1 -= 1;
        }
    }

    function change_1_der(){
        if (aux1 == 0) {
            room1.src = "img/room_5.png";
            aux1 += 1;
        }
        else if (aux1 == 1) {
            room1.src = "img/room_4.png";
            aux1 += 1;
        }
    }

    function change_2_izq(){
        if (aux2 == 1) {
            room2.src = "img/room_2.png";
            aux2 -= 1;
        }
        else if (aux2 == 2) {
            room2.src = "img/room_5.png";
            aux2 -= 1;
        }
    }

    function change_2_der(){
        if (aux2 == 0) {
            room2.src = "img/room_5.png";
            aux2 += 1;
        }
        else if (aux2 == 1) {
            room2.src = "img/room_4.png";
            aux2 += 1;
        }
    }

    function change_3_izq(){
        if (aux3 == 1) {
            room3.src = "img/room_3.png";
            aux3 -= 1;
        }
        else if (aux3 == 2) {
            room3.src = "img/room_5.png";
            aux3 -= 1;
        }
    }

    function change_3_der(){
        if (aux3 == 0) {
            room3.src = "img/room_5.png";
            aux3 += 1;
        }
        else if (aux3 == 1) {
            room3.src = "img/room_4.png";
            aux3 += 1;
        }
    }

btn1_izq.addEventListener("click", change_1_izq);
btn1_der.addEventListener("click", change_1_der);
btn2_izq.addEventListener("click", change_2_izq);
btn2_der.addEventListener("click", change_2_der);
btn3_izq.addEventListener("click", change_3_izq);
btn3_der.addEventListener("click", change_3_der);
