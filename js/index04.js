/**
 * Created by hp on 2017/9/25.
 */

$(function(){

    $('.upload-content ul li').click(function(){
        $(this).addClass('hit').removeClass('visited').siblings().removeClass('hit');
        $(this).children().addClass('hit-line').removeClass('visited-line');
        $(this).siblings().children().removeClass('hit-line');
        $(this).children().removeClass('old-line');
        $(this).siblings().children().addClass('old-line');
        var m=$('.upload-content ul li').index($('.hit'));
        if(m>0){
            for(var n=m-1;n<m;n++){
                $(this).parent().children().eq(n).addClass('visited');
                $(this).parent().children().children().eq(n).addClass('visited-line');
            }
        }
        var i=document.getElementsByClassName('visited').length;
       //
       // $('.visited').click(function(){
       //     if(i>0){
       //         for(var j=i;j<i;j++){
       //          alert(j);
       //         }
       //     }
       // });


        $('.upload-tasks>div:eq('+$(this).index()+')').show().siblings().hide();
    });

    $('.visited').click(function () {
        alert(123);
    });






    /**
     * 下一步
     */

    $('.last-btn').click(function(){
        var i=$('.upload-content ul li').index($('.hit'));
        if(i<4){
            i++;
        }else{
            var i=$('.upload-content ul li').index($('.hit'));
        }
        $('.upload-content ul').children().eq(i).addClass('hit').removeClass('visited').siblings().removeClass('hit');
        $('.upload-content ul').children().eq(i).children().addClass('hit-line').removeClass('visited-line');
        $('.upload-content ul').children().eq(i).siblings().children().removeClass('hit-line');
        $('.upload-content ul').children().eq(i).children().removeClass('old-line');
        $('.upload-content ul').children().eq(i).siblings().children().addClass('old-line');
        for(var n=i-1;n<i;n++){
            $('.upload-content ul').children().eq(n).parent().children().eq(n).addClass('visited');
            $('.upload-content ul').children().eq(n).parent().children().children().eq(n).addClass('visited-line');
        }
        $('.upload-tasks').children().eq(i).show().siblings().hide();
    })

    /**
     * 上一步
     */
    $('.pre-btn').click(function(){
        var i=$('.upload-content ul li').index($('.hit'));
        if(i<=4&&i>0){
            i--;
        }else{
            var i=$('.upload-content ul li').index($('.hit'));
        }
        $('.upload-content ul').children().eq(i).addClass('hit').removeClass('visited').siblings().removeClass('hit');
        $('.upload-content ul').children().eq(i).children().addClass('hit-line').removeClass('visited-line');
        $('.upload-content ul').children().eq(i).siblings().children().removeClass('hit-line');
        $('.upload-content ul').children().eq(i).children().removeClass('old-line');
        $('.upload-content ul').children().eq(i).siblings().children().addClass('old-line');
        if(i>0){
            for(var n=i-1;n<i;n++){
                $('.upload-content ul').children().eq(n).parent().children().eq(n).addClass('visited');
                $('.upload-content ul').children().eq(n).parent().children().children().eq(n).addClass('visited-line');
            }
        }

        $('.upload-tasks').children().eq(i).show().siblings().hide();
    });
});
/**
 * Created by hp on 2017/9/26.
 */
