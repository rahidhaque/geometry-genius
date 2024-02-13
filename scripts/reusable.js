function getInputValue(inputField){
    const inputFieldText= document.getElementById(inputField);
    const inputValue= parseFloat(inputFieldText.value);
    return inputValue;
}

function getArea(areaTextId, area){
    const areaText= document.getElementById(areaTextId);
    areaText.innerText= area;
}