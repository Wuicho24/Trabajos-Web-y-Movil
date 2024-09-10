$(document).ready(function() {
    $('#calcForm').submit(function(event) {
        event.preventDefault();
        
        // Obtener valores de los inputs
        var number1 = parseFloat($('#number1').val());
        var number2 = parseFloat($('#number2').val());
        var operation = $('#operation').val();
        var result = 0;
        
        // Realizar la operación aritmética según la selección
        if (operation === 'sumar') {
            result = number1 + number2;
        } else if (operation === 'restar') {
            result = number1 - number2;
        } else if (operation === 'multiplicar') {
            result = number1 * number2;
        } else if (operation === 'dividir') {
            result = (number2 !== 0) ? number1 / number2 : 'Error: División por cero';
        }
        
        // Mostrar el resultado en el span dentro del div correspondiente
        $('#resultValue').text(result);
    });
});
