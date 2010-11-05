jQuery.fn.fadeToggle = function(speed, easing, callback) {
         if ($(this).is(':visible')) speed=0;
         return this.animate({opacity: 'toggle'}, speed, easing, callback); 
     };
     $(function(){ 
         $('dt').each(function(i){
             $(this).next().fadeOut(0);
             $(this).click(function(j){ $(this).next().fadeToggle(200)});
             $(this).hover(function(){$(this).addClass("over");},function(){$(this).removeClass("over");})
         });
     });