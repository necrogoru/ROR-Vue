$(document).on("turbolinks:load", function() {
  $('.button-collapse').sideNav();
  Materialize.updateTextFields();
  $('.parallax').parallax();
  $('.tooltipped').tooltip({delay: 50});
  $('select').material_select();

  $('.datepicker').pickadate({
    selectMonths: true,
    format: 'd mmmm, yyyy',
    formatSubmit: 'yyyy-mm-dd',
    hiddenName: true,
    selectYears: 70,
    labelMonthNext: 'Siguiente mes',
    labelMonthPrev: 'Mes anterior',
    labelMonthSelect: 'Selecciona un mes',
    labelYearSelect: 'Selecciona un año',
    monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
    monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
    weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ],
    weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
    weekdaysLetter: [ 'D', 'L', 'M', 'M', 'J', 'V', 'S' ],
    today: '',
    clear: 'Limpiar',
    close: 'Ok',
    closeOnSelect: true
  });
});
