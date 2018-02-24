function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function get_api_uri() {
    return "/api/v1"
}

function load_footer() {
    $("#footer").load("footer.html", function() {
        $(".dialog_message").hide();
        $("#about").click(function() {
            $("#about_message").dialog({
            title: "About Thingi10K",
            width: 700
            });
        });
        $("#help").click(function() {
            $("#help_message").dialog({
            title: "Query Help",
            width: 700
            });
            $("#help_message tr:even").css("background-color", "#333333");
        });

        $("#download").click(function() {
            $("#download_message").dialog({
            title: "Download Entire Dataset",
            width: 700
            });
            $("#download_all").click(function() {
                window.location="https://drive.google.com/file/d/0B4_KyPW4T9oGRHdMTGZnVDFHLUU";
            });
        });

        $("#publication").click(function() {
            $("#publication_message").dialog({
            title: "Publications",
            width: 700
            });
        });

        $("#errata").click(function() {
            $("#errata_message").dialog({
                title: "Errata",
                width: 700
            });
        });

        $("#acknowledgement").click(function() {
            $("#acknowledgement_message").dialog({
                title: "Acknowledgement",
                width: 700
            });
        });

        $("#help_message tt").each(function(index, elem) {
            $(elem).css("text-decoration", "underline");
            $(elem).css("cursor", "pointer");
            $(elem).click(function() {
                window.location="/results.html?q=" +
                encodeURIComponent($(elem).text());
            });
        })
    });
}

function toggle_info(info) {
    var info_box = $("#info_box");
    info_box.toggle();
    if (info_box.is(":visible")) {
        $("#footer").css("margin-bottom", "100px");
    } else {
        $("#footer").css("margin-bottom", "0px");
    }
    info_box.html(info);
}
