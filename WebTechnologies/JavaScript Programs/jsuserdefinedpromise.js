var option = prompt("Enter your option")
var obj = new Promise(function(resolve,rejected){
   if(option == "yes")
   {
    resolve("succesfully done the task!")
   }else
   {
    rejected("Failure - error genrated")
   }
});

//Asynchronous callback function than execute only if
//promise reolve catch execute
obj.then(data=>document.write(data)).
catch(error=>document.write(error));