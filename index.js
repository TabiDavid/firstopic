function buyHouse(){

    var casa = parseFloat(document.getElementById("write number 1").value);
    var  tax = casa * 0.12;

var sum = house(casa + tax);

var total = sum;

return total;

}

function house(a) {

    if ( a <= 30000){

        var houses = ["Residential", "Hotel", "House at the field", "Farm"];
        var text = " ";
        
        for (var i = 0; i <= houses.length - 1; i++){
    text += houses[i] + "<br/>";
         
    }
}
else if (a > 30000){

    var house = ["Residential + new car", " Hotel + new car, House At tthe Fiel with a new Car", "Farm + new bycicle"];
     var text = " ";
     
     for ( var i = 0; i <= house.length - 1; i++){
        text += house[i] + "<br/>";
    }
     }
     
else {

  text = "Put the amount";
}

document.getElementById ("outPut").innerHTML = text;
}
    
