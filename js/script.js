// script.js

$(function() {
     //Click en el boton go
     $('#empezar').click(function() {
        //función que revisa si el carro ganó la carrera
        function chackIfComplete() {
            if( isComplete == false) {
                isComplete = true;
            } else {
                place = 'segundo ';
            }
        }

        //obtener el width de los carros
        var carWidth = $('#car1').width();

        //obtener el width de la pista
        var raceTrackWidth = $(window).width() - carWidth;

        //generar un número aleatorio entre 1 y 5 seg
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1);

        //Set a flag variable to False by default
        var isComplete = false;

        //set a flag variable to First by default
        var place = "primer";

        //animar el carro 1
        $('#car1').animate({
            //mover el carro por el ancho de la pista
            left: raceTrackWidth
        }, raceTime1, function() {
            //la animación terminó

            chackIfComplete();

            //Dar los resultados de la carrera
            $('#raceInfo1 span').text( 'Terminó en ' + place + 'lugar y registró ' + raceTime1 + ' milisegundos');

        })

        //animar el carro 2
        $('#car2').animate({
            //mover el carro por el ancho de la pista
            left: raceTrackWidth
        }, raceTime2, function() {
            //la animación terminó

            chackIfComplete();

            //Dar los resultados de la carrera
            $('#raceInfo2 span').text( 'Terminó en ' + place + ' lugar y registró ' + raceTime2 + ' milisegundos');

        })
     }) 

     //Resetear la carrera
     $('#reset').click(function () {
        $('.car').css('left', '0');
        $('.raceInfo span').text('');
     })   
});
    








