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
    



var one = [
    {
      "Name": "David",
      "City": "Chilcapamba",
      "Country": "Ecuador",
      "age": "33"
    },
    {
      "Name": "Juan",
      "City": "Otavalo",
      "Country": "Ecuador",
      "age": "32"
    },
    {
      "Name": "Pedro",
      "City": "San Juan",
      "Country": "Peru",
      "age": "43"
    },
    {
      "Name": "Jose",
      "City": "Iluman",
      "Country": "Ecuador",
      "age": "45"
    },
    {
      "Name": "Leo",
      "City": "Peguche",
      "Country": "Peru",
      "age": "45"
    }
  ]

  function arrays(){

  var i, j, x = " ";

  for (i = 0; i < one.length; i++) {

  x += "<h3>" + one[i].Name + "</h3>" + "<br>" + "Age: " + one[i].age + "<br>" + "City: " + one[i].City + "<br>" + "Country: " + one[i].Country;

  
}

document.getElementById("demo").innerHTML = x;
}
