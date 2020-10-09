/**Sticky navbar */

let navbar = $(".navbar");

$(window).scroll(function() {
    let oTop = $(".cover").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});

/**Counter animation */
let nCount = function(selector) {
    $(selector).each(function() {

        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function(value) {
                $(this).text(Math.cell(value));
            }
        });
    });

};

let a = 0;
$(window).scroll(function() {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect > h1");
    }
});