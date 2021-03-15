document.write("First message")
document.write("<br/> Second message")
document.write("<br/> Third message")

//setTimeout()
//here it first it displays first n 3rd message
// and based on time it shows "2nd message
document.write("<br/>First message")
setTimeout(function()
{
    document.write("<br/>2nd message")
},3000);
document.write("<br/>3rd message")

//here it shows 1st n 3rd msg and
// after certain based on our input it display "2nd msg" along with 1st and 3rd msg.
document.write("<br/>First message")
setTimeout(function()
{
    document.getElementById("msg").innerHTML = "2ndMessage"
},5000);
document.write("<br/>3rd message")

var i =0;
setInterval(function()
{
    document.getElementById("info").innerHTML = i++;
},1000);
document.write("<br/>3rd message")