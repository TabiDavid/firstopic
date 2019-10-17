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
document.getElementById ("outPut").innerHTML = text;
}
    
