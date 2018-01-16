(function ($) {
  $(document).ready(function(){
    $("#agata-gallery-videos").addClass('active');
    
    $(".gallery-tab-link.video-tab").click(function(){
        $("#agata-gallery-videos").addClass('active');
        $("#agata-gallery-images").removeClass('active');
    });
    $(".gallery-tab-link.images-tab").click(function(){
        $("#agata-gallery-videos").removeClass('active');
        $("#agata-gallery-images").addClass('active');
    });
    
  });
}(window.jQuery));
