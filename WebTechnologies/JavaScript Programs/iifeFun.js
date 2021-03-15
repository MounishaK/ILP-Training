//IIFE - Immediate invoke function expression.
function dis1()
{
    document.write("Normal Function <br/>")
}
dis1();
//call function from same script
//call function function from another script
//call function from html using evnts.

//IIFE - Immediate invoke function expression.
(function()
{
    document.write("<br/> This is type of IIEF function<br/>")
})();

(function()
{
    document.write("<br/> This is second IIEF function<br/>")
})();

(()=>document.write("<br/> This is IIFE function using arrow <br/>")) ();

//using parameter
((a,b)=>document.write(a,b))
(10,20);

