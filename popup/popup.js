import {blurOff} from "../functions/functions.js";

jQuery(document).ready(function () {
    const body = document.querySelector("body");
    const popup = document.querySelector(".popup");
    const closeBtn = document.querySelector(".close__btn");
    jQuery(body).css("overflow", "hidden")
    jQuery(closeBtn).on('click', function () {
        jQuery(popup).css("display", "none")
        blurOff();
        jQuery(body).css("overflow", "auto")
    })
})
