////////////////////////////////////////////
//
//  Contents
//
//  pixelRowsToArr:  Takes an image object, returns an array of color values (each one representing rgba format)
//  onePixelDiv: takes a color, returns a div (to represent a pixel)
//  addPixels: Loops through a div row and colours it in (literally attaches a a 'pixel' div to a 'row' div)
//  buildRows: Builds a row with divs as pixels (according to GRID_SIZE). These are all attached to the container element.
//  createRow
//  getOnePixel
//  readRow
//  readImg
////////////////////////////////////////////

/////////////////////////////////////////////////////////
//
//  Build process
//
/////////////////////////////////////////////////////////

function pixelRowsToArr(data){
    // Convert data to a readable array
    return [data[0], data[1], data[2], data[3]];
 } // end function


function onePixelDiv(color){
   
    var div = document.createElement("div");
    div.classList.add("pixel"); // Give it 'pixel' properties
    // div.classList.add("rotate-center") // Come back to this (can use it to add all sorts of css utils)
    div.style.background = color; // Give it the passed in color

    return div;
} // end function

function addPixels(color){

    // Add as many pixels as specified by GRID_SIZE to the row, and likewise rows according to GRID_SIZE
    for(var i = 0; i  < GRID_SIZE; i++){

        var thisRow = document.querySelector(`[data-id = '${i}'`);

        // Add the individual pixels
        repeatIt(GRID_SIZE, function(c = color){
    
            var pixel = onePixelDiv(c);
            thisRow.appendChild(pixel);

        }) // end repeatIt
        
    } // end loop
} // end function

function buildRows(){

   // Create as many rows as determined by size
    for(var i = 0; i  < GRID_SIZE; i++){
        var row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("data-id", i)
        container.appendChild(row);
    } // end loop

} // end function

