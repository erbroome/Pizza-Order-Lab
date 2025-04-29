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
let toppingsInput = document.getElementById("toppings");
let deliveryInput = document.getElementById("delivery");
let totalInput = document.getElementById("total");
let submitButton = document.getElementById("submitButton");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Grab values from each input
    let fname = fnameInput.value;
    let lname = lnameInput.value;
    let address = addressInput.value;
    let sizes = sizesInput.value;
   
    //let toppings = toppingsInput.value;
    

    // Create a new <tr> and <td> elements
    let newRow = table.insertRow(-1); // Insert a new row at the end of the table
    newRow.insertCell(0).innerText = fname + " " + lname;
    newRow.insertCell(1).innerText = address;
    newRow.insertCell(2).innerText = sizes;
    newRow.insertCell(3).innerText = "toppings";
    
    
    // Clear the form inputs after submission
    form.reset();
}
);
// Add an event listener to the submit button to trigger the form submission
//submitButton.addEventListener("click", function() {
 //   form.dispatchEvent(new Event("submit"));
//});
// Add an event listener to the form to handle the submit event

