$(document).ready(function() {
    $('#calcForm').submit(function(event) {
        event.preventDefault();
        
        
        var number1 = parseFloat($('#number1').val());
        var number2 = parseFloat($('#number2').val());
        var operation = $('#operation').val();
        var result = 0;
        
       
        if (operation === 'sumar') {
            result = number1 + number2;
        } else if (operation === 'restar') {
            result = number1 - number2;
        } else if (operation === 'multiplicar') {
            result = number1 * number2;
        } else if (operation === 'dividir') {
            result = (number2 !== 0) ? number1 / number2 : 'Error: División por cero';
        }
        
        
        $('#resultValue').text(result);
    });
});
