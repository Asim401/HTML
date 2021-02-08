

alert("Welcome To Al-Hussen Youth Club")
// var fname = "Asim Ahmad";
// console.log (fname);
// console.log ("First Name is  " + fname);
// var age = 23;
// console.log (age);
var fname  = prompt("What is your name") ;
if(fname == 'Asim Ahmad') {
   alert('Welcome Asim')
} else {
   alert ('sign with us and become a fan');
   confirm("would you to sign with us")
}
var age  = prompt("How Old are You");

if(age <=15) {
   alert('sorry you are to young')
} else {
   alert ('you are welcome');
   
}

var isFan = "true "
console.log (isFan);
console.log (fname + ' ,' + age + "Years old , is a Fan" + ' ' + isFan );
 
var type = prompt("Football or Basketball Fan ?") ;
while (type !== "Football" && type !== "Basketball" )
{
   type = prompt("Football or Basketball Fan ?") ;
}
var space = '  ' ;
if(type == "Football")
{ space = '<img src="welcome.jpg"/>'
}
else 
{
   space = '<img src="closed.jpg"/>'
}
document.write (space) 
Ball = '<img src="Football.jpg"/>'
var noOfBall = prompt("Do you Want To Buy A ball ?")
var result = '  ' ;
for(var i=0 ; i<noOfBall ; i++)
{
   result = result + Ball 
}
document.write (result)







