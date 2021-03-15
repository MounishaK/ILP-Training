//array : collection of more than one elements or values.
var obj1 = [100,200,300,400,500];
var obj2 = new Array(100,200,300,400,500);
document.write("<br/>");
document.write(obj1)
document.write("<br/>");
document.write(obj2)
document.write("<br/> using for loop");

for(var i=0; i<obj1.length;i++)
{
    document.write("<br/>" + obj1[i]);
}

document.write("<br/> dsiplay the value from array using callback with normal function style ")
obj1.forEach(dis);
function dis(a)
{
    document.write("<br/>"+a)
}

document.write("<br/> dsiplay the value from array using anonymous function style ")
obj1.forEach(function(n)
{
    document.write("<br/>"+n)
})

document.write("<br/> dsiplay the value from array using arrow function style ")
obj1.forEach(v=>document.write("<br/>"+v));


