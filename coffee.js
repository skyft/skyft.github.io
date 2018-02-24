function update_radio_style() {
    var radios = $(":radio");
    radios.each(function() {
        var radio_id = $(this).attr("id");
        if ($(this).is(":checked")) {
            $("label[for='"+radio_id+"']").addClass("selected_item");
        } else {
            $("label[for='"+radio_id+"']").removeClass("selected_item");
        }
    });
}

function update_radio_buttons() {
    $(":radio").change(update_radio_style);
}
