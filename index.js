function areaPerimeter(){

    var length = parseFloat(document.getElementById("write number 1").value);
    var width = parseFloat(document.getElementById("write number 2").value);
var operator = (2 * length) + (2 * width);
var perimeter = operator;

document.getElementById("outPut").innerHTML = perimeter;

}
