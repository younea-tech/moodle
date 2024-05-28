window.onload = function() {
    checkJqueryScormPopup();
};


function checkJqueryScormPopup() {
    if (window.jQuery) {
        jQuery(document).ready(function() {
            console.log("loaded");

            console.log("customRUN");
            $('#scorm_content').appendTo('body');

            var win = $(window);
            $("#scorm_content").width(win.width()).height(win.height());
            $("#scorm_object").width($("#scorm_content").width()).height($("#scorm_content").height());

            $(window).on('resize', function () {
                var win = $(window);
                console.log("resize");
                $("#scorm_content").width(win.width()).height(win.height());
                $("#scorm_object").width($("#scorm_content").width()).height($("#scorm_content").height());
            });

            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                setTimeout(
                    function () {
                        var win = $(window);
                        $("#scorm_content").width(win.width()).height(win.height());
                        $("#scorm_object").width($("#scorm_content").width()).height($("#scorm_content").height());
                    }, 1000);
            }

            $("#scorm_object").on("load", function (e) {
                var $head = $(this).contents().find("head");
                $head.append('<style type="text/css">.b24-widget-button-wrapper { display: none !important; }</style>');
            });

        });
    }
    else {
        console.log("Not loaded");
        window.setTimeout("checkJqueryScormPopup();", 1000);
    }
}