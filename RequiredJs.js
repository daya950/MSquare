$(document).ready(function() {
    var arr = [];
    $('span.form-option-variant--color').each(function() {
        arr.push($(this).attr("title").toLowerCase());
    });

    if(arr.length > 0) {
        showHide(arr[0]);
    }
    
    $('span.form-option-variant--color').each(function() {
        if($(this).attr("title").toLowerCase() == arr[0]) {
            $(this).onclick();
        }
    }); 
    
    $('span.form-option-variant--color').click(function() {
        showHide($(this).attr("title").toLowerCase());
    }); 
});

function showHide(varCol) {
    $('ul.productView-thumbnails li a img').each(function(){ 
        var str1 = $(this).attr("alt").toLowerCase();
        if(str1.indexOf(varCol) == -1) {
            $(this).parent().parent().hide();
        } else {
            $(this).parent().parent().show();
        }
    });
}
