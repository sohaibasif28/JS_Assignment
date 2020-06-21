//Chapter 21-25


/* task 1 */
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

var fullName = firstName + lastName;

alert("Welcome "+fullName+"!");

/* task 2 */

var favoriteMobile = prompt("Enter your favorite mobile model = ");

document.write(favoriteMobile.length);

/* task 3 */

var country= "Pakistani";

document.write(country.indexOf("n"));

/* task 4 */

var greet= "Hello World";

    
document.write(greet.lastIndexOf("l"));


/* Task 5 */

var country= "Pakistan";

document.write("The Character At index 3: "+country.charAt(3));


/* task 6 */

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");


document.write(""+firstName.concat(lastName));


/*task 7 */

var city="Hyder"

document.write("City : \n"+city+"<br>");

var city="Islamabad";

document.write("\nAfter replacmenet :"+city);


/* task 8 */

var message = "Ali and Sami are best friends. They play cricket and football together ";


for (var i = 0;i<=message.length;i++)
{
    if (message.indexOf("and"))
    {
       var message = "Ali and Sami are best friends. They play cricket & football together.";
       document.write(message);
       break;
    }
}


/* task 9 */

var number = 472;


document.write("value : "+number+"<br>");
document.write("type of: "+typeof(number)+"<br>");

number = number.toString();




document.write("value : "+number+"<br>");
document.write("type of: "+typeof(number)+"<br>");


/*Task 10 */

var name = prompt("Enter any input");

input = name.toUpperCase();

document.write(input);

/* task 11 */

var name = "javascript"
var firstChar = name.slice(0,1);
firstChar=firstChar.toUpperCase();

var rest=name.slice(1,name.length);

var titleCase =firstChar+rest;

document.write(titleCase);

/* task 12 */

var num = 35.36;
num=num.toString();

var remove = num.slice(0,2);
var remove1 = num.slice(3,num.length);

num = remove + remove1;


document.write(num);


/* task 13 */

var text = prompt("Enter username")


for (var i = 0; i < text.length; i++) {
 if (text.charAt(i) === "!" || text.charAt(i) === "$" || text.charAt(i) === "@" || text.charAt(i) === "#")
{
 alert("PLease enter valid username!");

 break;
}
}

 /* task 14 */

 var A = ["cake", "Apple Pie" ,"Cookie", "Chips", "Patties"];


var search = prompt ("Ënter the element you want to search")





if (A.indexOf(search) !== -1)
{
    document.write("yes "+search+" is available at index "+A.indexOf(search))
       
}
else{
    document.write("We are sorry "+search+" is not available in our bakery")
}

 /* task 15 */

var number = [0,1,2,3,4,5,6,7,8,9];
var letterNumber = /^[0-9a-zA-Z]+$/;
var password = prompt ("Enter your password");

for (var i = 0 ; i<=number.length;i++)
{
    if (password.charAt(0) !== number[i] && password.length>=6 && password.match(letterNumber))
{
    alert("Your Password is correct");
    break;
}
else{
    alert("Enter your password again");
    break;
}
}

/* task 16 */

var university = "University Of Karachi";

for (var i = 0 ; i <=university.length;i++)
{
    document.write(university[i]+"<br>");  
}
    

 /* task 17 */
var input = prompt("Enter country name");

input = input.charAt(input.length-1);
    
document.write(""+input);

/* task 18 */

var str = "the quick brown fox jumps over the lazy dog the";
var count=0;
    
    
var matchk= "the"
    
    for (var i =0;i<=str.match(matchk).length;i++)
    {
    if (str.match(matchk))
    {
        count++
    
    }
    }
      document.write(count);


    // Chapter 26-30

    /*task 1 */

 var number = 3.45214;
document.write("Number: "+number+"<br>");
document.write(" Round Off Value: "+Math.round(number)+"<br>");
document.write("Floor Value: "+Math.floor(number)+"<br>");
document.write("Ceil Number: "+Math.ceil(number)+"<br>");

/* task 2 */

var number = -2.673;

document.write("Number: "+number+"<br>");
document.write(" Round Off Value: "+Math.round(number)+"<br>");
document.write("Floor Value: "+Math.floor(number)+"<br>");
document.write("Ceil Number: "+Math.ceil(number)+"<br>");


/* task 3 */
var number = -4;

document.write("The absolute value of -4 is  "+Math.abs(number)+"<br>");


/* task 4 */




var roll = Math.floor(Math.random()*6+1);


document.write(roll);

/* Task 5 */

var head = prompt("Enter name of headuser");
var tail = prompt("Enter name of tailuser");

var toss = Math.floor(Math.random()*2);

if (toss===0)
{
        alert(head+"won the toss chose head");
}
else{
        alert(tail+"won the toss chose tail");
        
}


/* task 6 */


var number = Math.floor(Math.random()*100);

document.write("Random Number between 1 to hundred is : "+number);



/* task 7 */

var weight = prompt("Enter your weight");


if (weight>50 && weight<60)
{
document.write("your weight is "+weight);
}
else{
        alert("Enter your weight again");
}



/* task 8 */

var secret = Math.floor(Math.random()*10+1);



var guess=+prompt("Guess the secret number");

if (guess===secret)
{
        alert("You have guessed the correct number");
}
else{
            alert("You have guessed the wrong number");
}

document.write(""+secret);


// Chapter 31 - 34

/* task 1 */

var date = new Date();


document.write(date);

/* task 2 */

var d = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

document.write("The current month is " + monthNames[d.getMonth()]);

/* task 3 */

var a = new Date();

var b = a.toString();

var c = b.slice(0,3);

document.write(""+c );


/* Task 4 */

var a = new Date();

var b = a.toString();

var c = b.slice(0,3);
var check ="Sun";

if (c===check)
{

document.write("It is Funday ");
}


/* task 5 */
var date = new Date();
var a = date.toString();
var b = a.slice(8,11);
var c = parseInt(b);
if (b<16)
{
    document.write("First fifteen days of the month");
            
}
else{
        document.write("Last fifteen days of the month ");
}

/* task 6 */


var date = new Date();
var c = date.getTime();
var d = parseInt(c);
var minutes = d/60000;

document.write("Milliseconds since 1st january 1970 are "+c+"<br>");
document.write("Minutes since 1st january 1970 are : "+minutes);




/* task 7 */
var date = new Date();
var c = date.getHours();
var time = parseInt(c);

if (c>=12){
        document.write("Its pm "+c);
}
else{
            document.write("Its am "+c);
}

/* task 8 */
var date = new Date(new Date().getFullYear(), 11, 31)
document.write(date);


/* task 9 */
var ramadan = new Date ("Jan 12,2020");
var currentDate = new Date();
var msRamadan = ramadan.getTime();
var msCurrentDate = currentDate.getTime();
var msDiff = msCurrentDate - msRamadan;
var daysPassed = Math.floor(msDiff / (1000*60*60*24));
document.write(daysPassed+" days have passed since Ramadan Started");

/* task 10 */
var date = new Date ("December 05,2015");
var currentDate = new Date();
var msCurr = currentDate.getTime();
var msDate = date.getTime();
var diff = msCurr - msDate;
var seconds = diff / 10000;
document.write("on Referance date "+date+" "+seconds+" seconds have passed since beginning of 2015");

/*task 11 */
var today = new Date();
today.setHours(today.getHours() - 1);
var currTime = new Date();
document.write("Current Date :"+currTime+"<br> 1 hour ago it was "+today);


/* task 12 */
var hundredYearsBack = new Date();
hundredYearsBack.setHours(hundredYearsBack.getFullYear() - 876000);
var currTime = new Date();
document.write("Current Date :"+currTime+"<br> 100 Years Back it was  "+hundredYearsBack);

/* task 13 */

var dob = new Date(prompt("Enter your date of birth, July 7,1997"));
var dobmili = dob.getTime();
var date = new Date();
var datemili = date.getTime();
var diff = datemili - dobmili;
var age = Math.floor(diff/(1000*60*60*24*30*12));
document.write(age);


/* task 14 */
var date = new Date();
var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
var name = prompt ("Enter customer's name");
var currUnits = +prompt("Enter Units spend");
var unitCharges = +prompt("Enter charges per unit");
var lateCharge = 200;
var withinDate = unitCharges * currUnits
var afterDate = lateCharge + withinDate;
var dueDate = new Date();
dueDate.setHours(dueDate.getHours()+168);
var day = dueDate.toString();
var accDate = day.slice(8,11);
accDate = parseInt(accDate);
var accDueDate = day.slice(0,11);

document.write("Current Date : "+accDate+"<br>");


document.write("Customer's name: "+name+"<br>");
document.write("The current month is: "+months[date.getMonth()]+"<br>");
document.write("Number of Units: "+currUnits+"<br>");
document.write("Charges per unit: "+unitCharges+"<br>");
document.write("DueDate: "+accDueDate+" Amount:"+withinDate+"<br>");
document.write("Net payable amount after due date: "+afterDate);


// Chapter 35-38

/*task 1 */

function date()
{
        var date = new Date();
        document.write(date);

}

date();

/* task 2 */
function greet()
{
        var firstName = prompt("Enter your first name");
        var lastName = prompt ("Enter your last name");
        var fullName = firstName + lastName;
        document.write("Hello "+fullName+"!");
}
greet();

/* Task 3 */
function add()
{
        var firstNum = +prompt("Enter First number");
        var secondNum = +prompt("Enter second number");
        return firstNum+secondNum;
}

document.write(add());


/*task 4*/
function calculator(){
var firstNumber = prompt ("Enter the first Number");
 var secondNumber = prompt ("Enter the second Number");
 var sign = prompt ("Enter the operator"); 
 
 if (sign === "+")
 {
         var total = firstNumber+secondNumber;
         document.write("<br>")
         document.write("The addition of 2 numbers is "+total);
 }
 else if (sign === "-")
 {
         var total = firstNumber-secondNumber;
         document.write("<br>")
         document.write("The Subtraction of 2 numbers is "+total);
 }
 else if (sign === "*")
 {
         var total = firstNumber*secondNumber;
         document.write("<br>")
         document.write("The Multiplication of 2 numbers is "+total);
 }
 else if (sign === "/")
 {
         var total = firstNumber/secondNumber;
         document.write("<br>")
         document.write("The Divsion of 2 numbers is "+total);
 }
 else if (sign === "%")
 {
         var total = firstNumber*secondNumber;
         document.write("<br>")
         document.write("The Modulus of 2 numbers is "+total);
 }
 }
 calculator();

 /* task 5*/
 function square(number)
 {     
         var power = number*number
         document.write("square of given number is " +power);
 } 
 square(4);


 /*task 6 */

 var x= +prompt("Enter the value of x");
 function fact()
 {
 var fact = 1;
    if (x<=0)
    {
        document.write("Factorial is not possible")   
    }
    else
    {
        for (var i = x ;i >= 1; i--)
    {
         fact = fact*i;
 
    }
        document.write(fact);
 }
 }
 fact(x);
 
 /* task 7 */
 function range()
{
    var firstNum = +prompt("Enter value of first Number");
    var secondNum = +prompt("Enter value of second number");

    for (var i =firstNum ; i<=secondNum;i++){
     document.write(""+i+"<br>"); }   
}
range();

/* task 8 */
function Hyp(b,p)
{
           
    var h = b*b + p*p;
    return h;                

}
 function result()
{                     
                           
   document.write(Hyp(b,p));
                          
}
            var b = +prompt("Enter the value of base");
            var p = +prompt("Enter the value of perpendicular");
            result(b,p);

/* task 9 */
function area(w,h)
{
             var area = w*h;
             document.write(""+area);            
}
var  x = area(3,4);
document.write(x);
/* task 10 */
function palindrome()
{
var word = prompt("Enter any word");
var check="";
for (var i = word.length-1;i>=0;i--)
{
           check +=word.charAt(i);
}

if (check===word)
{
      document.write(word+ " is palindrome");
}
else{
            document.write(word+" is Not palindrome");
}
}
palindrome();

/* task 11*/
function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
         
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
     
        return splitStr.join(' '); 
     }
     
     document.write(titleCase("the quick brown fox"));

     /* task 12 */

     function longestWord(string) {
        var str = string.split(" ");
        var longest = 0;
        var word = null;
        for (var i = 0; i < str.length; i++) {
            if (longest < str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        document.write(""+word);
    }
    
    longestWord("Web Development Tutorial");

    /* task 13 */

    function occur(){
    var temp = "JSResources.com";
var count = (temp.match(/is/g) || []).length;
document.write(count)
    }
    occur();

    /* task 14 */
    function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));