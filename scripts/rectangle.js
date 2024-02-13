function calculateRectangleArea(){
    const width= getInputValue('rectangle-width');   
    const length= getInputValue('rectangle-length');   
    const area= width * length;
    getArea('rectangle-area', area);
}
