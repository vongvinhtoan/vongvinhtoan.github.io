function validateKey() {
    var inputKey = document.getElementById("inputKey").value;
    var validKey = "a"; // Replace with the correct key you want

    if (inputKey === validKey) {
        document.getElementById("result").innerText = "Valid key! Here's another key: YourNewKey"; 
        // Set the header 1 to "Key Validation Success!"
        // Set the paragraph to "Valid key! Here's another key: YourNewKey"
        updateHeading();
    } else {
        document.getElementById("result").innerText = "Invalid key. Please try again.";
    }
}

function updateHeading() {
    var newHeading = "New Heading"; // Replace with the desired new heading text
    var headingElement = document.getElementById("HeaderOne"); // Replace "myHeading" with the ID of your <h1> element
    headingElement.innerText = newHeading;
}