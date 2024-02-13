function calculateTriangleArea(){
    const base= getInputValue('triangle-base');
    const height= getInputValue('triangle-height');

    const area= 0.5 * base * height;

    getArea('triangle-area', area);
}