function getInputValue(inputField){
    const inputFieldText= document.getElementById(inputField);
    const inputValue= parseFloat(inputFieldText.value);
    return inputValue;
}

function getArea(areaTextId, area){
    const areaText= document.getElementById(areaTextId);
    areaText.innerText= area;
}

function calculateRectangleArea(){
    const width= getInputValue('rectangle-width');   
    const length= getInputValue('rectangle-length');   
    const area= width * length;
    getArea('rectangle-area', area);
}
