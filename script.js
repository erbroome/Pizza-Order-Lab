//1. Listen for the form’s submit event
//2. Use event.preventDefault() to stop the page from reloading
//3. Grab values from each input
//4. Create a new <tr> and <td> elements
//5. Add the new row to the bottom of the table
let form = document.getElementById("myForm");
let table = document.getElementById("myTable");
let fnameInput = document.getElementById("fName");
let lnameInput = document.getElementById("lName");
let addressInput = document.getElementById("address");
let sizesInput = document.getElementById("sizes");
let toppings1Input = document.getElementById("topping1");
let toppings2Input = document.getElementById("topping2");
let toppings3Input = document.getElementById("topping3");
let toppings4Input = document.getElementById("topping4");
let toppings5Input = document.getElementById("topping5");
let toppings6Input = document.getElementById("topping6");
let deliveryInput = document.getElementById("delivery");
let totalInput = document.getElementById("total");
let submitButton = document.getElementById("submitButton");

form.addEventListener("submit", function(event)
{
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Grab values from each input
    let fname = fnameInput.value;
    let lname = lnameInput.value;
    let address = addressInput.value;
    let sizes = sizesInput.value;
    let toppingsArray = [];
   
    if (toppings1Input.checked) {
        toppingsArray.push(toppings1Input.value);
    
    }
    if (toppings2Input.checked) {
        toppingsArray.push(toppings2Input.value);
    
    }
    if (toppings3Input.checked) {   
        toppingsArray.push(toppings3Input.value);
    
    }
    if (toppings4Input.checked) {
        toppingsArray.push(toppings4Input.value);
    
    }
    if (toppings5Input.checked) {
        toppingsArray.push(toppings5Input.value);
    
    }
    if (toppings6Input.checked) {   
        toppingsArray.push(toppings6Input.value);
    
    }
    let toppings = toppingsArray.join(", "); // Join the selected toppings into a string

    //let toppings = toppingsInput.value;
    

    // Create a new <tr> and <td> elements
    let newRow = table.insertRow(-1); // Insert a new row at the end of the table
    newRow.insertCell(0).innerText = fname + " " + lname;
    newRow.insertCell(1).innerText = address;
    newRow.insertCell(2).innerText = sizes;
    newRow.insertCell(3).innerText = toppings;
    
    
    // Clear the form inputs after submission
    form.reset();
    // Reset the form inputs to their default values

})
    

