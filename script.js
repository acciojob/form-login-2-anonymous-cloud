//your JS code here. If required.


function name(event) {
    event.preventDefault();  // Prevent form from submitting and refreshing the page
    
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const message = `First Name: ${firstName}  Last Name: ${lastName}  Phone Number: ${phone}  Email ID: ${email}`;

    alert(message);
}



function name(event) {
    event.preventDefault();  // Prevent form from submitting and refreshing the page
    
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const message = `First Name: ${firstName}  Last Name: ${lastName}  Phone Number: ${phone}  Email ID: ${email}`;

    alert(message);
}
