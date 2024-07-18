let outputScreen = document.getElementById("outputScreen");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
        alert('Result: ' + outputScreen.value + '\nOperation completed successfully.');

    }
    catch(err) {
        alert("Invalid")
    }
}
function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}