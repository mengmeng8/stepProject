/**
 * Created by hp on 2017/9/25.
 * 管理工单
 */

$(function(){
    $('.work-content ul li').click(function(){
        $(this).addClass('hit').siblings().removeClass('hit');
        $('.work-content-tabs>div:eq('+$(this).index()+')').show().siblings().hide();
    })

});
