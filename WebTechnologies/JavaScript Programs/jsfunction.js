//Normal function
function add(a,b)
{
    return a+b;
}

document.write("Normal Function <br/>");
document.write(add(100,200));

//expression style function
var sum = function addNumber(a,b)
{
    return a+b;
}
document.write("<br/> Expression style function <br/>");
document.writeln(sum(20,30))

//expression style function without name
var totalSum = function(a,b)
{
    return a+b;
}
document.write("<br/> Expression style function without Name <br/>");
document.write(totalSum(20,60));

//callback function
function sayHello(fname,callback)
{
    document.write("<br/> Welcome, your name is "+callback(fname));
}

var maleInfo = function(fname)
{
    return "Mr. "+fname; 
}
var femaleInfo = function(fname)
{
    return "Ms. "+fname; 
}

sayHello("Blue",maleInfo);
sayHello("Mouni",femaleInfo);

sayHello("Isha", function(fname)
{
    return "Ms. "+fname;
});

//Arrow function
var sayHi = function(name)
{
    return "welcome "+name;
}
var addNumber2 = function(a,b)
{
    var sum = a+b;
    return sum;
}
document.write("<br/> Expression Style <br/>")
document.write(sayHi("Raj"));


//Arrow function is known as anonymous function
//arrow function by default return the value.
//1st point if we want to write code very less and repeating same.
// logic again and again.
document.write("<br/> using Arrow Function <br/>")
var sayHiee = (name)=>"Welcome "+name;
document.write(sayHiee("Skye"));

var addNumber2 = (a,b)=>a+b;
document.write("<br/> addition using Arrow Function <br/>")
document.write(addNumber2(10,90));

var findLargest = (a,b)=>
{
    if(a>b)
        return a;
    else
        return b;
}
document.write("<br/>")
document.write(findLargest(2,4));


