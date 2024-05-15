const display = document.getElementById("display");
let canBeWritten = true;

function appendToDisplay(input){
    if(display.value==""&&(input=="-"||input=="+"||input=="/"||input=="x")){
        display.value = "";
    }
    else{
        if(canBeWritten){
            display.value += input;
        }
        else{
            canBeWritten = true;
            if(input=="-"||input=="+"||input=="/"||input=="x"){
                display.value = "";
            }
            else{
                display.value = input;
            }
        }
    }
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