function calculateRectangleArea(){
    const rectangleWidthInput= document.getElementById('rectangle-width');
    const rectangleLengthInput= document.getElementById('rectangle-length');

    const width= parseFloat(rectangleWidthInput.value);
    const length= parseFloat(rectangleLengthInput.value);
    

    const area= width * length;

    const rectangleAreaText= document.getElementById('rectangle-area');
    rectangleAreaText.innerText= area;

    rectangleWidthInput.value= "";
    rectangleLengthInput.value= "";
}