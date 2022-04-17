$(document).ready(function () {
    var master = "giveaway";
    var slave = "main-page";
    var master_tmp;
    var slave_tmp;
    var timer;

    $("#toParticipate").on("click", function () {
        $(".responsice-modal").css({
            display: "flex",
        });
        $(".second-modal").css({
            display: "flex",
        });
    });

    $('.nav_item').click(function () {
        $(".modal_nav").hide();
    });

    $("#continue").on("click", function () {
        $(".first-modal").css({
            display: "none",
        });
        $(".second-modal").css({
            display: "flex",
        });
    });


    $(".sort").on("click", function () {
        $(".modal_nav").show();
        setTimeout(() => {
            $(".modal_nav").css({display: "none"})
        }, 4000)
    })

    $("#toParticipate-mobile").on("click", function () {
        $(".responsice-modal").css({
            display: "flex",
        });
        $("first-modal").css({
            display: "flex",
        });
        $(".second-modal").css({
            display: "flex",
        });
    });

    var sync = function () {
        if ($(this).attr('id') == slave) {
            master_tmp = master;
            slave_tmp = slave;
            master = slave;
            slave = master_tmp;
        }
        $("#" + slave).unbind("scroll");
        var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
        var x = percentage * ($("#" + slave).get(0).scrollWidth - $("#" + slave).get(0).offsetWidth);
        $("#" + slave).scrollLeft(x);

        if (typeof (timer) !== 'undefind')
            clearTimeout(timer);

        timer = setTimeout(function () {
            $("#" + slave).scroll(sync)
        }, 200)
    }
    $('#' + master + ', #' + slave).scroll(sync);

});


window.onload = function () {
    document.querySelector('.preloader').remove();
};