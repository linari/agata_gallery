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
      scrolling	: 'auto',
      beforeShow : function() {
        this.title =  $(this.element).data("caption");
        $('body').addClass('fancybox-opened');
        $("body").css({'overflow-y':'hidden'});
      },
      afterClose: function() {
        $('body').removeClass('fancybox-opened');
        $("body").css({'overflow-y':'visible'});
      },
      afterShow: function() {
        $('.fancybox-wrap').swipe({
          swipe : function(event, direction) {
            if (direction === 'left') {
              $.fancybox.prev( direction );
            } else if (direction === 'right'){
              $.fancybox.next( direction );
            }
          }
        });
      },
      afterLoad : function() {
      }
    });
    
  });
}(window.jQuery));
