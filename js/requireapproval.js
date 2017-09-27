/**
 * Created by hp on 2017/9/21.
 */
$(function(){

    $("#view-btn").on("click",function(){
        $(".view-details").show();

    });

    $(".close-view-btn").on("click",function(){
       $(".view-details").hide();
    });

    $(".cancel-btn").on("click",function(){
        $(".view-details").hide();
    });
    /**
     * 需求配置审批----用户数据(数据编码详情)
     */
    $(".display-detail").on("click",function(){
        var clicknum=$(".display-detail").attr("clicknum");
       if(clicknum==="true"){
           $(".data-encod-detail").show();
           $(this).parent().parent().next().eq(0).show();
           $(".display-detail").attr("clicknum","false");
       }else if(clicknum==="false"){
           $(this).parent().parent().next().eq(0).hide();
           $(".data-encod-detail").hide();
           $(".display-detail").attr("clicknum","true");
       }
    });

    /**
     *需求配置审批----全部任务(产品编码详情)
     */
    $(".pro-display").on("click",function(){
        var clickstatus=$(".pro-display").attr("clickstatus");
        if(clickstatus==="true"){
            $(".product-code-table").show();
            $(this).parent().next().eq(0).show();
            $(".pro-display").attr("clickstatus","false");
        }else if(clickstatus==="false"){
            $(this).parent().next().eq(0).hide();
            $(".product-code-table").hide();
            $(".pro-display").attr("clickstatus","true");
        }
    });

});