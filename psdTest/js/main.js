$(document).ready(function () {
    //图1
    goTransforming();
    $("#text-02").animate({top: 203}, "fast", function () {
        $("#wenhao").fadeIn().animate({top: 225}, "fast", function () {
            $("#big").fadeIn().animate({top: 251, left: 1284}, "fast");
        });

    });

    var int1, int2;

    function penguin_moveLeft() {
        $("#penguin").css({
            "-ms-transform": "rotate(-11deg)",
            "transform": "rotate(-11deg)",
            "-moz-transform": "rotate(-11deg)",
            "-webkit-transform": "rotate(-11deg)",
            "-o-transform": "rotate(-11deg)"
        });

    }

    function penguin_moveRight() {
        $("#penguin").css({
            "-ms-transform": "rotate(11deg)",
            "transform": "rotate(11deg)",
            "-moz-transform": "rotate(11deg)",
            "-webkit-transform": "rotate(11deg)",
            "-o-transform": "rotate(11deg)"
        });
    }

    function goTransforming() {
        int1 = setInterval(function () {
            penguin_moveLeft();
        }, 1000);
        int2 = setInterval(function () {
            penguin_moveRight();
        }, 1200);
    }


    //图2
    $("#img2").mouseover(function () {

        $("#bubble1").fadeIn("fast", function () {
            $("#bubble2").fadeIn("fast", function () {
                $("#bubble3").fadeIn("fast", function () {
                    $("#ellipse1").fadeIn("normal");
                    $("#text-04").fadeIn("normal", function () {
                        $("#ellipse2").fadeIn("normal");
                        $("#text-05").fadeIn("normal", function () {
                            $("#ellipse3").fadeIn("normal");
                            $("#text-06").fadeIn("normal", function () {
                                $("#ellipse4").fadeIn("normal");
                                $("#text-07").fadeIn("normal", function () {
                                    $("#bubble4").fadeIn("fast", function () {
                                        $("#ellipse5").fadeIn("normal");
                                        $("#text-08").fadeIn("normal", function () {
                                            $("#selection").fadeIn().animate({top: 667, left: 761}, 800, function () {
                                                $("#star1").fadeIn("fast", function () {
                                                    $("#star2").fadeIn("fast", function () {
                                                        $("#star3").fadeIn("fast", function () {
                                                            $("#star4").fadeIn("fast");
                                                        });
                                                    })
                                                })
                                            })
                                        })
                                    });
                                })
                            })
                        })
                    })
                })
            })
        })
    });

    //图3
    var twinkle = true;
    $("#img3").mouseover(function() {
        $("#see").fadeIn().animate({top: 132}, "fast", function () {
            $("#small-exclamation").fadeIn().animate({top: 99}, 20, function () {
                $("#big-exclamation").fadeIn().animate({top: 116}, 20,function(){
                    $("#AT").fadeIn().animate({left:1137},"normal");
                    $("#AT-text").fadeIn("normal",function(){
                        $("#DE").fadeIn().animate({left:982},"normal");
                        $("#DE-text").fadeIn("normal",function(){
                            $("#FR").fadeIn().animate({left:831},"normal");
                            $("#FR-text").fadeIn("normal",function(){
                                $("#DK").fadeIn().animate({left:680},"normal");
                                $("#DK-text").fadeIn("normal",function(){
                                    if(twinkle){
                                        $("#slogan1").fadeIn().fadeOut().fadeIn();
                                        twinkle = false;
                                    }
                                });
                            });
                        });
                    });
                });
            });
        });
    });


    //图4
    var d = true;
    var con  = $("#third-text");
    var index = 0;
    con.empty();
    $("#img4").mouseover(function(){
        $('#slogan2').fadeIn().animate({left:545},"normal",function(){
            $("#img4-exclamation").fadeIn().animate({top:218},"fast",function(){
                start();
                function start(){
                    var s = "但最关键的是？";
                    var len = s.length;

                    var tid = null;
                    if(d){
                        tid = setInterval(function(){
                            con.append(s.charAt(index));
                            index++;
                            if(index == len){
                                d = false;
                            }
                        },200);
                    }
                }
            });
        });
    });


    //图5
    $("#img5").mouseover(function(){
        $("#shape1").fadeIn().animate({left:515},"fast",function(){
            $("#slogan3").fadeIn(function(){
                $("#shape2").fadeIn();
                $("#slogan4").fadeIn();
            });
        });

    })



})


