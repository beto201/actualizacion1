function generar(){
var numper = $("#personas").val();
var numgrup = $("#grupos").val();
alert("hh: "+ numper + "; "+ numgrup);
}

function a�adir(){
var capturanombre=$("#addper").val();
$("#lista").append("<li>"+capturanombre+"</li>");
}
