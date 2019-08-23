$(function () {
    // 选项卡
    let btn = $(".canvas .z-main .z-main-left ul li");
    let content = $(".canvas .z-main .z-main-right ul")
    content.eq(0).addClass('active');
    btn.eq(0).addClass('hot');
    btn.click(function () {
        $(this).addClass("hot").siblings().removeClass("hot");
        //获取选中元素的下标
        var index = $(this).index();
        content.eq(index).addClass("active")
            .siblings().removeClass("active");
    })
})