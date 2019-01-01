// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let gridHeight = 0;
let gridWidth = 0;
let color = null;

function makeGrid() {
    gridHeight = $('#inputHeight').val();
    gridWidth = $('#inputWidth').val();
    for (let y = 0; y < gridHeight; y++){
        $('#pixelCanvas').append('<tr id="'+y+'"></tr>');
        for (let x = 0; x < gridWidth; x++){
            $('#'+y).append('<td></td>');
        }
    }
}

function pickColor() {
    color = $('#colorPicker').val();
}

function paintPixel(pixel){
    $(pixel).on('click', function(){
        pickColor();
        $(this).css('background-color', color);
    })
}

$('#gridSubmit').on('click', function(){
    $('#pixelCanvas').html('');
    makeGrid();
    $('td').each(function (){
        paintPixel(this);
    })
})