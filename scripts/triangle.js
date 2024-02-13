function calculateTriangleArea(){
    const triangleBaseInput= document.getElementById('triangle-base');
    const triangleHeightInput= document.getElementById('triangle-height');

    const base= parseFloat(triangleBaseInput.value);
    const height= parseFloat(triangleHeightInput.value);

    const area= 0.5 * base * height;

    const displayAreaField= document.getElementById('triangle-area');
    displayAreaField.innerText= area;

    triangleBaseInput.value="";
    triangleHeightInput.value="";
}