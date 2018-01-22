(function ($) {
  $(document).ready(function(){
    $("#agata-gallery-images").addClass('active');
    
    $(".gallery-tab-link.video-tab").click(function(){
        $("#agata-gallery-videos").addClass('active');
        $("#agata-gallery-images").removeClass('active');
    });
    $(".gallery-tab-link.images-tab").click(function(){
        $("#agata-gallery-videos").removeClass('active');
        $("#agata-gallery-images").addClass('active');
    });

    $(".fancybox").fancybox({
      beforeShow : function() {
        this.title =  $(this.element).data("caption");
        $('body').addClass('fancybox-opened');
      },
      afterClose: function() {
        $('body').removeClass('fancybox-opened');
      }
    });
    
  });
}(window.jQuery));
