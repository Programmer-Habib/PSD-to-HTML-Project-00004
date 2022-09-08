/* ================
MOBILE NAVIGATION
================ */
function openNav(){
    document.getElementById("sidenav").style.width="45%";
}
function closeNav(){
    document.getElementById("sidenav").style.width="0%";
}

/* ================
SHOP BUTTON WITH CARD
================ */
$(document).ready(function(){
    $("#shop-btn1").click(function(){
        $("#sub0").hide();
        $("#sub99").show();
        document.getElementById("shop-btn1").style.background="#2500f9";
        document.getElementById("shop-btn1").style.color="#ffffff";
        document.getElementById("shop-btn1").style.fontWeight="700";
        document.getElementById("shop-btn2").style.background="#ffffff";
        document.getElementById("shop-btn2").style.color="#616368";
        document.getElementById("shop-btn2").style.fontWeight="400";
    });
    $("#shop-btn2").click(function(){
        $("#sub99").hide();
        $("#sub0").show();
        document.getElementById("shop-btn2").style.background="#2500f9";
        document.getElementById("shop-btn2").style.color="#ffffff";
        document.getElementById("shop-btn2").style.fontWeight="700";
        document.getElementById("shop-btn1").style.background="#ffffff";
        document.getElementById("shop-btn1").style.color="#616368";
        document.getElementById("shop-btn1").style.fontWeight="400";
    });


/* ================
TOGGLE SLIDE
================ */
    $(".checkbox-icon").mouseenter(function(){
        document.getElementById("checkbox").style.width="30rem";
        document.getElementById("checkbox").style.transition=".5s";
        
        document.getElementById("checkbox-content").style.transform="translateX(0%)";
        document.getElementById("checkbox-content").style.transition="1s";
    });
    $(".checkbox-icon").mouseleave(function(){
        document.getElementById("checkbox").style.width="0";
        document.getElementById("checkbox").style.transition="1s";

        document.getElementById("checkbox-content").style.transform="translateX(-120%)";
        document.getElementById("checkbox-content").style.transition=".9s";
    });

/* ================
MAKE FAQ
================ */
    $("#FQcontent1").hide();
    $("#FQopen1").click(function(){
        $("#FQcontent1").toggle();
        $("#FQcontent2").hide();
        $("#FQcontent3").hide();
        $("#FQcontent4").hide();
    });
    $("#FQcontent2").hide();
    $("#FQopen2").click(function(){
        $("#FQcontent2").toggle();
        $("#FQcontent1").hide();
        $("#FQcontent3").hide();
        $("#FQcontent4").hide(); 
    });
    $("#FQcontent3").hide();
    $("#FQopen3").click(function(){
        $("#FQcontent3").toggle();
        $("#FQcontent1").hide();
        $("#FQcontent2").hide();
        $("#FQcontent4").hide();
    });
    $("#FQcontent4").hide();
    $("#FQopen4").click(function(){
        $("#FQcontent4").toggle();
        $("#FQcontent1").hide();
        $("#FQcontent2").hide();
        $("#FQcontent3").hide();
    });

    // STIKY MENU
    $(".js--stiky-menu").waypoint(function(direction){
        if(direction == "down"){
            $(".header").addClass("stikey");
        }else{
            $(".header").removeClass("stikey");
        };
    });

    // SMOOTH SCROLL FOR IE/EDGE, SAFARI
    $("a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({
                    scrollTop: $(hash).offset().top
                },200,
                function(){
                    window.location.hash = hash;
                }
            );
        };
    });
});
