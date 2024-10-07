const display = document.getElementById("display");

/*
make it when you start typing after computation, screen is whiped
maybe make * an x on display
*/

function appendToDisplay(input){
    display.value += input;
}
    
function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        canBeWritten = false;
    }
}