function displayDomMessage()
{
    alert("Welcome to external JS file");
}
//var empObj = [];
/*function storeInSession()
{
    sessionStrogage.setItem("empInfo",empObj)
}

function retrive()
{
    
}
*/
function onFormSubmit()
{
    alert("Event gernerated...")
    //var data = readFormData();
    //insertNewRecord(data);
    //resetData();
    ///empObj.push(data); // in empobj

}

function readFormData()
{
    var obj = {} // empty object
    obj.name = document.getElementById("user").value;
    obj.name = document.getElementById("age").value;
    console.log(obj);
    //return obj;
}

/*
function insertNewRecord(data)
{
    var table = document.getElementById("employeeList")
    var body = table.getElementByTagName("tbody")[0];
    var newRow = body.insertRow(body.lenth); //row created

    var cell1 = newRow.insertCell(0); //cell created
    cell1.innerHTML = data.name; // value passed

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
}


function resetData()
{
    document.getElemensById("name").value ="";
    document.getElementById("age").value = "";
        
}
*/
