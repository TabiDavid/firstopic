function areaPerimeter(){

    var length = parseFloat(document.getElementById("write number 1").value);
    var width = parseFloat(document.getElementById("write number 2").value);
var operator = (2 * length) + (2 * width);

var perimeter = result(operator);

document.getElementById("outPut").innerHTML = perimeter;

}

function result(a) {
var text = " ";
    for (var i = 0; i >= a; i++){
text += i; 
return text;
    

    }
}
    /*if (a >= 500 & a <= 900){
        
        return "pay 10 % discount";

    }
  else if (a >= 901){

    return "pay"

  }  
  else {
      return "pay the price"
  }
}*/
