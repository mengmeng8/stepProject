/**
 * Created by hp on 2017/9/21.
 */
$(function(){
    alert(1);
    $(".add-btn").on("click",function(){
        var $tr=$(".table tr:eq(1)");
        $tr.after("<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>" +
            "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
    });

});