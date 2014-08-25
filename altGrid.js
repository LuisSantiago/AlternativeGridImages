$(document).ready(function() {

    //    $(".InputfieldFileItem").css("float", "left");
        $(".InputfieldFileUpload").css("clear", "both");
        $(".InputfieldFileItem").css("width", "100%");

    //    $(".InputfieldFileItem").css("float", "left");


$( '<div id="zoom"><div id="slider"></div><input class="inputporcentaje" maxlength="4" type="text" id="porcentaje" readonly></div>' ).insertBefore( ".InputfieldFileList " );

$('#home').toggleClass('active');


$("#slider").slider({
  	min:10,
    max:100,
    value:100,
    slide: function(e,ui) {
        var sliderValue =  jQuery("#slider").slider("value");
        jQuery(".InputfieldFileItem").width(sliderValue + "%");
        jQuery(".InputfieldFileItem").height('auto');
        $( "#porcentaje" ).val(sliderValue+"%");
    }
});

    $(document).on('click', '.InputfieldImageListToggle', function() {
        $(".floatleft").addClass( "InputfieldImageGrid" )
        jQuery(".InputfieldFileItem").width('auto');
        jQuery(".InputfieldFileItem").height('auto');


        if($("#zoom").is(':visible')){
           $("#zoom").hide();
       } else if ($("#zoom").is(':hidden')) {
           $("#zoom").show(); 
       }; 


    }); 







});
