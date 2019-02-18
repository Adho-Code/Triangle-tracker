function Triangle(){

var measurement1 = parseInt(document.getElementById("measurement1").value);
var measurement2 = parseInt(document.getElementById("measurement2").value);
var measurement3 = parseInt(document.getElementById("measurement3").value);

var measurements = [measurement1,measurement2,measurement3];

if(measurements[0] === measurements[1] && measurements[0] === measurements[2]){
alert ("equilateral triangle!");    
}
else if(measurements[0]=== measurement2 || measurement2 === measurement3){
alert ("isosceles triangle!");    
}
else 
{  
alert ("scalene triangle!");
}
}