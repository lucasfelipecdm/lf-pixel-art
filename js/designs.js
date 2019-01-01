/**
 * This function creates the "<td>" and "<tr>" elements in HTML document, it get the size of grids from
 * "<input type="number">" elements call inputHeight and inputWidth.
 */
function makeGrid() {
    let gridHeight = $('#inputHeight').val();
    let gridWidth = $('#inputWidth').val();
    for (let y = 0; y < gridHeight; y++){
        $('#pixelCanvas').append('<tr id="'+y+'"></tr>');
        for (let x = 0; x < gridWidth; x++){
            $('#'+y).append('<td></td>');
        }
    }
}
/**
 * This function get the color from "<input type="color">" element and return it.
 */

function pickColor() {    
    return $('#colorPicker').val();
}

/**
 * This function change the background-color of "<td>" when this element is clicked.
 */
function paintPixel(pixel){
    $(pixel).on('click', function(){
        $(this).css('background-color', pickColor());
    })
}

/**
 * This function call the makeGrid funtion and creates a event listener for each "<td>" element in HTML document.
 */
$('#gridSubmit').on('click', function(){
    $('#pixelCanvas').html('');
    makeGrid();
    $('td').each(function (){
        paintPixel(this);
    })
})