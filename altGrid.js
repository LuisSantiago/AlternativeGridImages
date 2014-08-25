$(document).ready(function() {
        $(".InputfieldFileUpload").css("clear", "both");
        $(".InputfieldFileItem").css("width", "100%");
        $( '<div id="zoom"><div id="slider"></div><input class="inputporcentaje" maxlength="4" type="text" id="porcentaje" readonly></div>' ).insertBefore( ".InputfieldFileList " );
        
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
