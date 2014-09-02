$(document).ready(function() {
        $(".InputfieldFileUpload").css("clear", "both");
        $(".InputfieldFileItem").css("margin-right", "10px");
        $( '<div id="zoom"><div id="slider"></div></div>' ).insertBefore( ".InputfieldFileList " );
        $("#slider").slider({
          	min:10,
            max:100,
            value:$.cookie('altgridcookie'),
            slide: function(e,ui) {
                var sliderValue =  jQuery("#slider").slider("value");
                $(".InputfieldFileItem").width(sliderValue + "%");
                $(".InputfieldFileItem").height('auto');
                $.cookie('altgridcookie', $("#slider").slider("value"), { expires: 365 });
            }
        });

$(".InputfieldFileItem").css({"width": $.cookie('altgridcookie') + "%"});

$(document).on('click', '.InputfieldImageListToggle', function() {
        $(".floatleft").addClass( "InputfieldImageGrid" )
        $(".InputfieldFileItem").width('auto');
        $(".InputfieldFileItem").height('auto');
        if($("#zoom").is(':visible')){
              $("#zoom").hide();
        } else if ($("#zoom").is(':hidden')) {
              $("#zoom").show(); 
              $(".InputfieldFileItem").css({"width": $.cookie('altgridcookie') + "%"});

       }; 

    }); 
    
$(".InputfieldFileName").each(function(i){
    len=$(this).text().length;
    if(len>9)
    {
      $(this).text($(this).text().substr(0,9)+'...');
    }
  }); 
  
});
