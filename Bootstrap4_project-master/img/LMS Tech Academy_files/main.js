"use strict";

//$(window).on("load", function () {

//    $(".loader-backdrop").fadeOut();               // Open Modal on Load or after delay
//    if ($(".modal.fade.Contact").length && ($(".modal.fade.Contact").attr("data-open-onload")) === "true") {
//        setTimeout(function () {
//            $(".modal.fade.Contact").modal();
//        }, $(".modal.fade.Contact").attr("data-open-delay"));
//    }
//});

// Global variable used to disconnect home page videos from their container to 
// prevent audio from continuing to play after they are closed
var tempVideo;

jQuery(document).ready(function () {

    // ************ Function Calls ************//

    if ($("#slider").length) {
        callSliderRevolution();                  // Call to Slider Revolution
    }

    if ($("#slider-video").length) {
        callSliderRevolutionVideo();              // Call to Slider Revolution with Video
    }

    if ($("#slider-news").length) {
        callSliderRevolutionNews();              // Call to Slider Revolution with News
    }

    if ($(".announcement").length) {
        callAnnounceToggle();                    // Call to Announcement Slide Up/Down
    }

    if ($(".announcement-text").length) {
        callAnnouncement();                      // Call to Announcement Carousels
    }

    if ($(".timer").length) {
        $(".timer").each(function () {
            callCountdown(this);                  // Call to Event Countdown Timer
        });
    }

    if ($(".testimonials").length) {
        callTestimonial();                       // Call to Testimonials Carousel
    }

    if ($(".logo-scroll").length) {
        callLogoScroll();                        // Call to Logo Scroll
    }

    if ($(".tweets").length) {
        callTweetScroll();                       // Call to Tweet Scroll
    }

    if ($(".selectpicker").length) {
        callSelectPicker();                      // Call to Select Box Styler
    }

    if ($(".fact .count").length) {
        $(".fact .count").appear(function () {    // Call function callCountTo() only when the Element is in viewport
            callCountTo();
        });
    }

    if ($(".img-rotate").length) {
        $(".img-rotate").find("img:first-child").show();
        $(".img-rotate").mouseenter(function () {
            callAlbumHover(this);                       // Call to Album Hover (Gallery Albums Page)
        });
    }

    if ($(".youtube").length) {
        $(".youtube").each(function () {
            callYoutubeVideo(this);                     // Style each video found on page
        });
    }

    if ($("#gmap").length) {

        var lat = $("#gmap").attr("data-lat");            // Latitude of the place to be marked

        var long = $("#gmap").attr("data-long");          // Longitude of the place to be marked

        var infoWin = $("#gmap").attr("data-info-win");   // Content to be shown in Info Window on Marker

        callGoogleMapStyle(lat, long, infoWin);         // Call to Google Map Styler
    }

    if ($("#back").length) {                              // Back To Top Icon
        callBackToTop();
    }

    if ($("a[data-gal^='prettyPhoto']").length) {
        callPrettyPhoto();                              // Pretty Photo
    }

    if ($("#main-contact-form").length) {
        callFormSubmit();
    }
});


// ************Definitions of Functions for all popout videos************//


$(function () {
    $('#softwareVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#softwareVideoModal').on('shown.bs.modal', function () {
    $('#softwareDev_Video')[0].play();
});

function showMobileVideo() {
    $("#mobileVideoModal").modal('show');
}
$(function () {
    $('#mobileVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#mobileVideoModal').on('shown.bs.modal', function () {
    $('#mobile_Video')[0].play();
});

function showAdvancedJavaScriptVideo() {
    $("#advancedJavaScriptVideoModal").modal('show');
}
$(function () {
    $('#advancedJavaScriptVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#advancedJavaScriptVideoModal').on('shown.bs.modal', function () {
    $('#advancedJavaScript_Video')[0].play();
});

function showJavaAndroidVideo() {
    $("#javaAndroidVideoModal").modal('show');
}
$(function () {
    $('#javaAndroidVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#javaAndroidVideoModal').on('shown.bs.modal', function () {
    $('#javaAndroidVideoModal_Video')[0].play();
});

function showGameVideo() {
    $("#gameVideoModal").modal('show');
}
$(function () {
    $('#gameVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#gameVideoModal').on('shown.bs.modal', function () {
    $('#game_Video')[0].play();
});

$(function () {
    $('#csharpVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#csharpVideoModal').on('shown.bs.modal', function () {
    $('#csharp_Video')[0].play();
});

$(function () {
    $('#pythonVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#pythonVideoModal').on('shown.bs.modal', function () {
    $('#python_Video')[0].play();
});

$(function () {
    $('#UIUXVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#UIUXVideoModal').on('shown.bs.modal', function () {
    $('#UIUX_Video')[0].play();
});

$(function () {
    $('#cyberVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#cyberVideoModal').on('shown.bs.modal', function () {
    $('#cyber_Video')[0].play();
});

$(function () {
    $('#dataScienceVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#dataScienceVideoModal').on('shown.bs.modal', function () {
    $('#dataScience_Video')[0].play();
});

$(function () {
    $('#webVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#webVideoModal').on('shown.bs.modal', function () {
    $('#web_Video')[0].play();
});

function showVideo() {
    $("#enrollmentVideoModal").modal("show");
}
$(function () {
    $('#enrollmentVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#enrollmentVideoModal').on('shown.bs.modal', function () {
    $('#enrollment_Video')[0].play();
});
 
function showBootCampVideo() {
    $("#bootCampVideoModal").modal("show");
}
$(function () {
    $('#bootCampVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#bootCampVideoModal').on('shown.bs.modal', function () {
    $('#bootCampVideo')[0].play();
});

function showSoftwareVideo() {
    $("#softwareVideoModal").modal('show');
}
//bootcamp page video modals
function showGameDevVideo() {
    $("#gameDevVideoModal").modal('show');
}
$(function () {
    $('#gameDevVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#gameDevVideoModal').on('shown.bs.modal', function () {
    $('#gameDev_Video')[0].play();
});

function showMobileDevVideo() {
    $("#mobileDevVideoModal").modal('show');
}
$(function () {
    $('#mobileDevVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#mobileDevVideoModal').on('shown.bs.modal', function () {
    $('#mobileDev_Video')[0].play();
});

function showJavascriptVideo() {
    $("#javascriptVideoModal").modal('show');
}
$(function () {
    $('#javascriptVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#javascriptVideoModal').on('shown.bs.modal', function () {
    $('#javascriptDev_Video')[0].play();
});

function showAndroidVideo() {
    $("#androidVideoModal").modal('show');
}
$(function () {
    $('#androidVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#androidVideoModal').on('shown.bs.modal', function () {
    $('#androidDev_Video')[0].play();
});

function showCsharpVideo() {
    $("#csharpVideoModal").modal('show');
}

function showPythonVideo() {
    $("#pythonVideoModal").modal('show');
}

function showDataScienceVideo() {
    $("#dataScienceVideoModal").modal('show');
}

function showWebVideo() {
    $("#webVideoModal").modal('show');
}

function showUIUXVideo() {
    $("#UIUXVideoModal").modal('show');
}

function showCyberVideo() {
    $("#cyberVideoModal").modal('show');
}

function showVideo() {
    $("#overviewVideoModal").modal("show");
}
$(function () {
    $('#overviewVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#overviewVideoModal').on('shown.bs.modal', function () {
    $('#overview_Video')[0].play();
});

function showModal() {
    $("#TimedVideoModal").modal("show");
}

$(function () {
    $('#blobEnrollmentVideoModal').modal({
        show: false
    }).on('hidden.bs.modal', function () {
        $(this).find('video')[0].pause();
    });
});
$('#blobEnrollmentVideoModal').on('shown.bs.modal', function () {
    $('#blobEnrollment_Video')[0].play();
});
// ************End Definitions of Functions************//

function callSliderRevolution() {
    jQuery("#slider").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 5000,                                       // Delay in Transition from one slide to another in milliseconds
        navigation: {
            arrows: { enable: true }
        },
        lazyLoad: "on",
        gridwidth: 1200,
        gridheight: 800,
        parallax: {
            type: "scroll"
        }
    });
}

function callSliderRevolutionVideo() {
    jQuery("#slider-video").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 5000,                                       // Delay in Transition from one slide to another in milliseconds
        navigation: {
            onHoverStop: "off"
        },
        lazyLoad: "on",
        gridwidth: 1200,
        gridheight: 800,
        parallax: {
            type: "scroll"
        }
    });
}

function callSliderRevolutionNews() {
    jQuery("#slider-news").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 5000,                                       // Delay in Transition from one slide to another in milliseconds
        gridwidth: 1200,
        gridheight: 800,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "on",
            arrows: {
                style: "gyges",
                enable: true,
                hide_onmobile: false,
                hide_over: 778,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 40,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 0
                }
            },
            tabs: {
                style: "erinyen",
                enable: true,
                width: 250,
                height: 100,
                min_width: 250,
                wrapper_padding: 0,
                wrapper_color: "transparent",
                wrapper_opacity: "0",
                tmp: '<div class="tp-tab-title">{{title}}</div><div class="tp-tab-desc">{{description}}</div>',
                visibleAmount: 3,
                hide_onmobile: true,
                hide_under: 778,
                hide_onleave: false,
                hide_delay: 200,
                direction: "vertical",
                span: false,
                position: "inner",
                space: 10,
                h_align: "right",
                v_align: "center",
                h_offset: 30,
                v_offset: 0
            }
        }
    });
}

function callAnnounceToggle() {
    $(".btn-announce").click(function () {
        $(".announcement").toggleClass("open");        // Slides Open or Closes the announcement section on Home Page
    });
}

function callAnnouncement() {
    var announceCarousel = $('.announcement-text');

    $('.announcement .owl-left').click(function () {
        announceCarousel.trigger('prev.owl.carousel');
    });

    $('.announcement .owl-right').click(function () {
        announceCarousel.trigger('next.owl.carousel');
    });

    announceCarousel.owlCarousel({
        items: 1,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500                       // Announcements transition time from one to another in milliseconds
    });
}

function callCountdown(thisTimer) {
    var date = $(thisTimer).attr("data-date");
    $(thisTimer).countdown(date, function (event) {
        $(this).find(".days").html(event.strftime("%D"));              // Days Left
        $(this).find(".hours").html(event.strftime("%H"));             // Hours Left
        $(this).find(".minutes").html(event.strftime("%M"));           // Minutes Left
        $(this).find(".seconds").html(event.strftime("%S"));           // Seconds Left
    });
}

function callTestimonial() {
    var testiCarousel = $('.testimonials');

    $('.owl-left').click(function () {
        testiCarousel.trigger('prev.owl.carousel');
    })

    $('.owl-right').click(function () {
        testiCarousel.trigger('next.owl.carousel');
    })

    testiCarousel.owlCarousel({
        items: 1,
        loop: true,
        center: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,                       // Testimonials Carousel transition time from one to another in milliseconds
        autoplayHoverPause: true
    });
}

function callSelectPicker() {
    $('.selectpicker').selectpicker();
}

function callCountTo() {
    $(".fact .count").countTo();
}

function callLogoScroll() {
    $(".logo-scroll").owlCarousel({
        items: 5,
        loop: true,
        margin: 70,
        center: true,
        autoplay: true,
        autoplayTimeout: 2500,                       // Logo Carousel transition time from one to another in milliseconds
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            }
        }
    });
}

function callTweetScroll() {
    $(".tweets").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6500                      // Tweets transition time from one to another in milliseconds
    });
}

function callAlbumHover(hoverElement) {
    var imgInterval = 750;                          // Change interval between items (in milliseconds)  

    var imgSelect = $(hoverElement).find("img");

    var imgCount = $(imgSelect).length;

    var imgCurrent = 0;

    var infiniteLoop = setInterval(function () {
        $(imgSelect).eq(imgCurrent).hide();

        if (imgCurrent === imgCount - 1) {
            imgCurrent = 0;
        } else {
            imgCurrent++;
        }
        $(imgSelect).eq(imgCurrent).show();
    }, imgInterval);

    $(hoverElement).mouseleave(function () {         // On Mouse Leave, the first Image again shows up
        clearTimeout(infiniteLoop);
        $(this).find("img").hide();
        $(this).find("img").eq(0).show();
    });
}

function callYoutubeVideo(currentVideo) {
    var videoId = $(currentVideo).attr("data-video-id");                                    // Get Video ID from data attributes

    var thumbnail = 'url(https://img.youtube.com/vi/' + videoId + '/sddefault.jpg)';         // Get Thumbail image of the video

    $(currentVideo).css("background-image", thumbnail);                                     // Set thmbnail image as the background

    var videoUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";    // Framing Video URL from video ID

    $(currentVideo).find(".btn-play").click(function () {                                     // If play button is clicked, load Video within IFrame
        var videoFrame = $('<iframe/>', {
            'frameborder': '0',
            'src': videoUrl,
            'width': $(currentVideo).width(),
            'height': $(currentVideo).height()
        });
        $(currentVideo).replaceWith(videoFrame);                                            // Finally replace the div with IFrame
    });
}

function callGoogleMapStyle(lat, long, infoWin) {
    var styles = [
        {
            featureType: 'water',                       //Color of the Water Bodies
            elementType: 'geometry.fill',
            stylers: [
                { color: '#adc9b8' }
            ]
        }, {
            featureType: 'landscape.natural',           //Color of the Natural Landscapes
            elementType: 'all',
            stylers: [
                { hue: '#809f80' },
                { lightness: -35 }
            ]
        }, {
            featureType: 'poi',                         //Color of Points of Interest like Business
            elementType: 'geometry',
            stylers: [
                { hue: '#f9e0b7' },
                { lightness: 30 }
            ]
        }, {
            featureType: 'road',                        //Color of Main Roads
            elementType: 'geometry',
            stylers: [
                { hue: '#d5c18c' },
                { lightness: 14 }
            ]
        }, {
            featureType: 'road.local',                  //Color Of Local Roads
            elementType: 'all',
            stylers: [
                { hue: '#ffd7a6' },
                { saturation: 100 },
                { lightness: -12 }
            ]
        }
    ];

    var options = {
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
        center: new google.maps.LatLng(lat, long),
        zoom: 16,
        disableDefaultUI: true,
        mapTypeId: 'Styled'
    };
    var div = document.getElementById('gmap');

    var map = new google.maps.Map(div, options);

    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });

    map.mapTypes.set('Styled', styledMapType);

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, long)             // Set Marker Position of the place
    });

    marker['infowindow'] = new google.maps.InfoWindow({
        content: infoWin                                        // Set Content of the Info Window of the Marker
    });

    new google.maps.event.addListener(marker, 'mouseover', function () {
        this['infowindow'].open(map, this);                     // On Marker Hover, show Info Window
    });
}

function callBackToTop() {
    var offset = 250;                          // Offset after which Back To Top button will be visible 
    var duration = 1000;                       // Time duration in which the page scrolls back up.

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            $('#back').fadeIn(500);
        } else {
            $('#back').fadeOut(500);
        }
    });

    jQuery('#back').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
}

function callPrettyPhoto() {
    $("a[data-gal^='prettyPhoto']").prettyPhoto({ social_tools: '' });
}

function callFormSubmit() {

    var options =
        {
            clearForm: 'false',
            type: 'POST',
            url: 'sendemail.php',            // PHP Script for Form Submission
            cache: 'false',
            resetForm: 'false',
            async: 'true',
            datatype: 'html',
            timeout: 2400000,

            beforeSend: function () {
                text = "<i class='fa fa-spinner fa-spin'></i>Submitting your message, please wait.";
                $("#status").empty().html(text);
            },

            complete: function (xhr, textStatus) {
                $("#status").empty().html(xhr.responseText);
            },

            error: function (jqXHR, textStatus, errorThrown) {
                $("#status").empty().html('Error in application : Please try again.');
            }
        };
}


// ************NAVBAR SEARCH************//
(function (window, document, $, undefined) {

    $(function () {

        var navSearch = new navbarSearchInput();

        // Open search input
        var $searchOpen = $('[data-search-open]');

        $searchOpen
            .on('click', function (e) { e.stopPropagation(); })
            .on('click', navSearch.toggle);

        // Close search input
        var $searchDismiss = $('[data-search-dismiss]');
        var inputSelector = '.navbar-form input[type="text"]';

        $(inputSelector)
            .on('click', function (e) { e.stopPropagation(); })
            .on('keyup', function (e) {
                if (e.keyCode == 27) // ESC
                    navSearch.dismiss();
            });

        // click anywhere closes the search
        $(document).on('click', navSearch.dismiss);
        // dismissable options
        $searchDismiss
            .on('click', function (e) { e.stopPropagation(); })
            .on('click', navSearch.dismiss);

    });

    var navbarSearchInput = function () {
        var navbarFormSelector = 'form.navbar-form';
        return {
            toggle: function () {

                var navbarForm = $(navbarFormSelector);

                navbarForm.toggleClass('open');

                var isOpen = navbarForm.hasClass('open');

                navbarForm.find('input')[isOpen ? 'focus' : 'blur']();

            },

            dismiss: function () {
                $(navbarFormSelector)
                    .removeClass('open')      // Close control
                    .find('input[type="text"]').blur() // remove focus
                    // .val('')                    // Empty input
                    ;
            }
        };

    }

})(window, document, window.jQuery);

//*****Mobile tooltip script*****//
var elements = document.querySelectorAll('[title]');

if (window.innerWidth < 768) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function (e) {
            //Toggle the title message on and off when the element is clicked
            if (this.title != "") {
                //Toggle the data-toggle attribute
                $(this).tooltip('toggle');
            }
        });
    }
}