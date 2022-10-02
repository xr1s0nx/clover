$(document).ready(function () {
    AOS.init();


    /* burger */
    $(".nav_toggle").on("click", function () {
        $(".nav").toggleClass("active");
        $(".shadow").toggleClass("active");
        $(".nav_toggle").toggleClass("active");
    });

    $(".shadow, .close").on("click", function () {
        $(".nav").removeClass("active");
        $(".shadow").removeClass("active");
        $(".nav_toggle").removeClass("active");
        $(".call_modal").removeClass("active");
    });

    $(".header .phone").on("click", function () {
        $(".call_modal").addClass("active");
        $(".shadow").addClass("active");
        $(".nav").removeClass("active");
        $(".nav_toggle").removeClass("active");
    });

    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();
        $(".offer_tab span").removeClass("active");
        let cat = $(this).data("filter");

        $(this).addClass("active");
        $("[data-cat]").each(function () {
            let workCat = $(this).data("cat");

            if (workCat != cat) {
                $(this).removeClass("active");
            } else {
                $(this).addClass("active");
            }
        });
    });

    var offer_slider = new Swiper(".offer_slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".offer_next",
            prevEl: ".offer_prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    var news_slider = new Swiper(".news_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".news_next",
            prevEl: ".news_prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            550: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            870: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    $(document).ready(function () {
        $("form").submit(function () {
            var e = $(this);
            return $.ajax({
                type: "POST",
                url: "mail.php",
                data: e.serialize(),
            }).done(function () {
                setTimeout(function () {
                    e.trigger("reset");
                }, 1e3);
            });
        });
    });
});

let drill = document.querySelector('.img_block')

window.addEventListener("scroll", function () {
    let value = -window.scrollY;


    if (value > -1020) {
        drill.style.right = 0 + value * -0.03 + "%";

    }
    console.log(value)

});

let cityBlocks = document.querySelectorAll('.block');

cityBlocks.forEach((block) => {
    block.addEventListener('click', (e) => {
        cityBlocks.forEach((item) => {
            item.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
        let currentId = e.currentTarget.id;
        let uncurrentId;
        if(currentId == 'map1') {
            uncurrentId = 'map2';
        } else {
            uncurrentId = 'map1';
        }
        let mapActive = document.querySelector('.' + currentId);
        let mapUnActive = document.querySelector('.' + uncurrentId);
        mapActive.style.display = 'block';
        mapUnActive.style.display = 'none';
        console.log('active: ' + mapActive.className)
        console.log('unactive: ' + mapUnActive.className)
    })
})
