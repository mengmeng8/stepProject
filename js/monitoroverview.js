/**
 * Created by hp on 2017/9/21.
 */
$(function(){

     $('.monitor-content ul li').click(function(){
            $(this).addClass('hit').siblings().removeClass('hit');
            $('.monitor-tasks>div:eq('+$(this).index()+')').show().siblings().hide();
      })

      $(".totalPro").on("click",function () {
          $('.monitor-content ul').children().eq(2).addClass('hit').siblings().removeClass('hit');
          $('.monitor-tasks>div:eq(2)').show().siblings().hide();
      });

     $(".taskNum").on("click",function(){
         $(".monitor-content ul").children().eq(1).addClass('hit').siblings().removeClass('hit');
         $('.monitor-tasks>div:eq(1)').show().siblings().hide();
     });

});
